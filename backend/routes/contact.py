# backend/routes/contact.py
from fastapi import APIRouter, HTTPException, Request
from typing import Optional
from models.contact import (
    ContactSubmissionCreate,
    ContactSubmission,
    ContactResponse,
)
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/contact", tags=["contact"])

# DB handle is injected from server.py via set_db()
_db: Optional[object] = None

def set_db(database):
    global _db
    _db = database

@router.post("", response_model=ContactResponse)
async def submit_contact_form(contact: ContactSubmissionCreate, request: Request):
    """
    Accept a contact form submission.
    - Validates input with Pydantic (subject optional, message >= 10 chars).
    - If Mongo is configured, persists to 'contact_submissions'.
    - Always returns a success response (doesn't block UI if DB is down).
    """
    try:
        submission = ContactSubmission(
            **contact.model_dump(),
            ip_address=(request.client.host if request.client else None),
            user_agent=request.headers.get("user-agent"),
        )

        if _db:
            await _db.contact_submissions.insert_one(submission.model_dump())
            logger.info("Stored contact submission from %s", contact.email)
        else:
            logger.warning("No DB configured; accepted contact but did not persist.")

        return ContactResponse()

    except HTTPException:
        raise
    except Exception as e:
        logger.exception("Error submitting contact form: %s", e)
        raise HTTPException(status_code=500, detail="Failed to submit contact form. Please try again later.")

@router.get("/submissions")
async def get_contact_submissions(skip: int = 0, limit: int = 50):
    """
    Admin-style listing (no auth yet). If DB isn't configured, returns an empty list.
    """
    try:
        if not _db:
            return {"submissions": [], "count": 0}

        cursor = (
            _db.contact_submissions
            .find({}, {"_id": 0})  # hide Mongo _id
            .sort("created_at", -1)
            .skip(int(skip))
            .limit(int(limit))
        )
        submissions = await cursor.to_list(length=limit)
        return {"submissions": submissions, "count": len(submissions)}
    except Exception as e:
        logger.exception("Error fetching submissions: %s", e)
        raise HTTPException(status_code=500, detail="Failed to fetch submissions")
