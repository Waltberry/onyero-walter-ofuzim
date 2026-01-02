# backend/models/analytics.py

from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional, Dict, Any
import uuid

class AnalyticsEvent(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    event: str = Field(..., description="Event type: page_view, cv_download, project_click, contact_submit")
    metadata: Dict[str, Any] = Field(default_factory=dict)
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    user_agent: Optional[str] = None

class AnalyticsEventCreate(BaseModel):
    event: str
    metadata: Dict[str, Any] = Field(default_factory=dict)
