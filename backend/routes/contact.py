from fastapi import APIRouter, Request
from typing import Optional, Any
from models.contact import ContactSubmissionCreate, ContactSubmission, ContactResponse
import logging

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/contact", tags=["contact"])

# DB handle is injected from server.py via set_db()
_db: Optional[Any] = None

def set_db(database):
    """Inject a Motor/PyMongo database handle from server.py."""
    global _db
    _db = database

@router.post("", response_model=ContactResponse)
async def submit_contact_form(contact: ContactSubmissionCreate, request: Request):
    """
    Accept a contact form submission.
    - Validates input (subject optional, message >= 10 chars).
    - If Mongo is configured, persists to 'contact_submissions'.
    - Always returns success for portfolio UX (we only log DB errors).
    """
    submission = ContactSubmission(
        **contact.model_dump(),
        ip_address=(request.client.host if request.client else None),
        user_agent=request.headers.get("user-agent"),
    )

    if _db is not None:
        try:
            await _db.contact_submissions.insert_one(submission.model_dump())
            logger.info("Stored contact submission from %s", contact.email)
        except Exception as e:
            logger.exception("DB insert failed; returning success anyway: %s", e)
    else:
        logger.warning("No DB configured; accepted contact but did not persist.")

    return ContactResponse()

@router.get("/submissions")
async def get_contact_submissions(skip: int = 0, limit: int = 50):
    """
    Admin listing (no auth yet). Returns empty list if DB isn't configured or on errors.
    """
    if _db is None:
        return {"submissions": [], "count": 0}

    try:
        cursor = (
            _db.contact_submissions
            .find({}, {"_id": 0})
            .sort("created_at", -1)
            .skip(int(skip))
            .limit(int(limit))
        )
        submissions = await cursor.to_list(length=int(limit))
        return {"submissions": submissions, "count": len(submissions)}
    except Exception as e:
        logger.exception("Error fetching submissions: %s", e)
        return {"submissions": [], "count": 0}
