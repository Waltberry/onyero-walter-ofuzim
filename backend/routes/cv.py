# backend/routes/cv.py

from fastapi import APIRouter, HTTPException, Response
from fastapi.responses import FileResponse
import os
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/cv", tags=["cv"])

CV_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), "static", "cv", "Onyero_Walter_Ofuzim_CV.pdf")

@router.get("/download")
async def download_cv():
    """
    Download CV/Resume as PDF
    """
    try:
        if not os.path.exists(CV_PATH):
            logger.error(f"CV file not found at {CV_PATH}")
            raise HTTPException(
                status_code=404,
                detail="CV file not found. Please contact the administrator."
            )
        
        logger.info("CV download requested")
        
        return FileResponse(
            path=CV_PATH,
            filename="Onyero_Walter_Ofuzim_CV.pdf",
            media_type="application/pdf",
            headers={
                "Content-Disposition": "attachment; filename=Onyero_Walter_Ofuzim_CV.pdf"
            }
        )
    
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error serving CV: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Failed to download CV. Please try again later."
        )
        

@router.head("/download")
async def head_cv():
    if not os.path.exists(CV_PATH):
        raise HTTPException(status_code=404, detail="CV file not found")
    return Response(status_code=200)


@router.get("/info")
async def cv_info():
    """
    Get CV metadata
    """
    try:
        exists = os.path.exists(CV_PATH)
        size = os.path.getsize(CV_PATH) if exists else 0
        
        return {
            "available": exists,
            "filename": "Onyero_Walter_Ofuzim_CV.pdf",
            "size_bytes": size,
            "size_mb": round(size / (1024 * 1024), 2) if exists else 0
        }
    except Exception as e:
        logger.error(f"Error getting CV info: {str(e)}")
        return {"available": False, "error": str(e)}
