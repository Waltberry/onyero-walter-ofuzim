# backend/routes/contact.py

from fastapi import APIRouter, HTTPException, Request
from motor.motor_asyncio import AsyncIOMotorClient
from models.contact import ContactSubmissionCreate, ContactSubmission, ContactResponse
import os
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/contact", tags=["contact"])

# Get database from app state (will be set in server.py)
db = None

def set_db(database):
    global db
    db = database

@router.post("", response_model=ContactResponse)
async def submit_contact_form(contact: ContactSubmissionCreate, request: Request):
    """
    Submit a contact form message
    """
    try:
        # Create submission object
        submission = ContactSubmission(
            **contact.dict(),
            ip_address=request.client.host if request.client else None
        )
        
        # Store in database
        result = await db.contact_submissions.insert_one(submission.dict())
        
        logger.info(f"Contact submission received from {contact.email}")
        
        return ContactResponse(
            success=True,
            message="Thank you for your message! I'll get back to you soon."
        )
    
    except Exception as e:
        logger.error(f"Error submitting contact form: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Failed to submit contact form. Please try again later."
        )

@router.get("/submissions")
async def get_contact_submissions(skip: int = 0, limit: int = 50):
    """
    Get all contact submissions (admin endpoint - add auth later)
    """
    try:
        submissions = await db.contact_submissions.find().sort("created_at", -1).skip(skip).limit(limit).to_list(limit)
        return {"submissions": submissions, "count": len(submissions)}
    except Exception as e:
        logger.error(f"Error fetching submissions: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch submissions")
