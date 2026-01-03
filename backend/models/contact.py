from pydantic import BaseModel, EmailStr, Field, ConfigDict
from datetime import datetime, timezone
from typing import Optional
import uuid

class ContactSubmissionCreate(BaseModel):
    """
    Payload accepted from the public contact form.
    Subject is optional; message must be at least 10 chars.
    """
    model_config = ConfigDict(extra="ignore")
    name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    subject: Optional[str] = Field(default=None, max_length=200)
    message: str = Field(min_length=10, max_length=2000)

class ContactSubmission(ContactSubmissionCreate):
    """
    Document we store when a DB is configured.
    Server adds id, created_at, ip/user-agent, status.
    """
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    status: str = Field(default="new")
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    ip_address: Optional[str] = None
    user_agent: Optional[str] = None

class ContactResponse(BaseModel):
    """
    Success envelope returned to the UI.
    """
    success: bool = True
    message: str = "Thank you for your message! I'll get back to you soon."
