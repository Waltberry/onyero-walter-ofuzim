# backend/server.py
from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os, logging, uuid
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
from datetime import datetime, timezone

# feature routes
from routes import contact as contact_routes
from routes import cv as cv_routes
from routes import analytics as analytics_routes

# --- env
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

SERVICE_NAME = os.getenv("SERVICE_NAME", "portfolio-api")
CORS_ORIGINS = os.getenv("CORS_ORIGINS", "*").split(",")

# Prefer MONGO_URI/MONGO_DB (matches your .env)
MONGO_URI = os.getenv("MONGO_URI")
MONGO_DB  = os.getenv("MONGO_DB", "portfolio")

# --- app
app = FastAPI(title="Portfolio API", version="1.0.0")
api = APIRouter(prefix="/api")

# --- DB (optional)
client: Optional[AsyncIOMotorClient] = None
db = None
if MONGO_URI:
    try:
        client = AsyncIOMotorClient(MONGO_URI)
        db = client[MONGO_DB]
        logging.info("Mongo connected")
    except Exception:
        logging.exception("Mongo init failed; continuing without DB")

# --- CORS
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=CORS_ORIGINS,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- health
@api.get("/health")
async def health():
    return {"ok": True, "service": SERVICE_NAME}

# --- demo status endpoints (DB optional)
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

@api.get("/")
async def root():
    return {"message": "Hello World"}

@api.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    obj = StatusCheck(**input.model_dump())
    if db:
        doc = obj.model_dump()
        doc["timestamp"] = doc["timestamp"].isoformat()
        await db.status_checks.insert_one(doc)
    return obj

@api.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    if not db:
        return []
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for r in rows:
        if isinstance(r.get("timestamp"), str):
            r["timestamp"] = datetime.fromisoformat(r["timestamp"])
    return rows

# --- mount feature routers (hand DB into modules that accept it)
if hasattr(contact_routes, "set_db"):   contact_routes.set_db(db)
if hasattr(analytics_routes, "set_db"): analytics_routes.set_db(db)

api.include_router(cv_routes.router)        # /api/cv/...
api.include_router(contact_routes.router)   # /api/contact/...
api.include_router(analytics_routes.router) # /api/analytics/...

app.include_router(api)

# --- shutdown
@app.on_event("shutdown")
async def shutdown_db():
    if client:
        client.close()

# --- logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
