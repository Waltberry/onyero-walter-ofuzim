# backend/routes/cv.py
from fastapi import APIRouter, HTTPException, Response
from fastapi.responses import FileResponse
from pathlib import Path
import logging

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/cv", tags=["cv"])

CV_PATH = (Path(__file__).resolve().parent.parent / "static" / "cv" / "Onyero_Walter_Ofuzim_CV.pdf")

@router.get("/download")
async def download_cv():
    try:
        if not CV_PATH.exists():
            logger.error(f"CV file not found at {CV_PATH}")
            raise HTTPException(status_code=404, detail="CV file not found. Please contact the administrator.")
        logger.info("CV download requested")
        return FileResponse(
            path=str(CV_PATH),
            filename="Onyero_Walter_Ofuzim_CV.pdf",
            media_type="application/pdf",
            headers={"Content-Disposition": "attachment; filename=Onyero_Walter_Ofuzim_CV.pdf"},
        )
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error serving CV: {e}")
        raise HTTPException(status_code=500, detail="Failed to download CV. Please try again later.")

@router.head("/download")
async def head_cv():
    if not CV_PATH.exists():
        raise HTTPException(status_code=404, detail="CV file not found")
    return Response(status_code=200)

@router.get("/info")
async def cv_info():
    try:
        exists = CV_PATH.exists()
        size = CV_PATH.stat().st_size if exists else 0
        return {
            "available": exists,
            "filename": "Onyero_Walter_Ofuzim_CV.pdf",
            "size_bytes": size,
            "size_mb": round(size / (1024 * 1024), 2) if exists else 0,
        }
    except Exception as e:
        logger.error(f"Error getting CV info: {e}")
        return {"available": False, "error": str(e)}
