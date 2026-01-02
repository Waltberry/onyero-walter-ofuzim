# backend/routes/analytics.py

from fastapi import APIRouter, HTTPException, Request
from motor.motor_asyncio import AsyncIOMotorClient
from models.analytics import AnalyticsEventCreate, AnalyticsEvent
import os
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/analytics", tags=["analytics"])

# Get database from app state
db = None

def set_db(database):
    global db
    db = database

@router.post("/track")
async def track_event(event: AnalyticsEventCreate, request: Request):
    """
    Track an analytics event
    """
    try:
        # Create analytics event
        analytics_event = AnalyticsEvent(
            **event.dict(),
            user_agent=request.headers.get("user-agent", "unknown")
        )
        
        # Store in database
        await db.analytics_events.insert_one(analytics_event.dict())
        
        logger.info(f"Analytics event tracked: {event.event}")
        
        return {"success": True, "message": "Event tracked"}
    
    except Exception as e:
        logger.error(f"Error tracking analytics: {str(e)}")
        # Don't fail the request if analytics fails
        return {"success": False, "message": "Failed to track event"}

@router.get("/stats")
async def get_analytics_stats():
    """
    Get analytics statistics (admin endpoint)
    """
    try:
        # Get event counts by type
        pipeline = [
            {
                "$group": {
                    "_id": "$event",
                    "count": {"$sum": 1}
                }
            },
            {
                "$sort": {"count": -1}
            }
        ]
        
        results = await db.analytics_events.aggregate(pipeline).to_list(100)
        
        # Get total events
        total = await db.analytics_events.count_documents({})
        
        return {
            "total_events": total,
            "events_by_type": results
        }
    
    except Exception as e:
        logger.error(f"Error fetching analytics stats: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch analytics")
