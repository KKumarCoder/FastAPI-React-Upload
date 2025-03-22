from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# ✅ CORS Middleware Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Email validation request body
class EmailBody(BaseModel):
    email: str

# ✅ Get upload URL request body
class Body(BaseModel):
    file_name: str
    chunk_size: int
    file_size: int

# ✅ Complete upload request body
class UploadBody(BaseModel):
    file_name: str
    upload_id: str
    parts: List[dict]

# 🔥 Endpoint 1: Email Validation
@app.post("/api")
async def validate_email(body: EmailBody):
    if "@" not in body.email:
        raise HTTPException(status_code=422, detail="Invalid email format")
    return {"message": "Email validated successfully", "email": body.email}

# 🔥 Endpoint 2: Get Upload URL
@app.post("/upload-get-url")
async def get_upload_url(body: Body):
    return {
        "upload_url": f"https://example.com/upload/{body.file_name}",
        "chunk_size": body.chunk_size,
        "file_size": body.file_size
    }

# 🔥 Endpoint 3: Complete Upload
@app.post("/upload-complete")
async def complete_upload(body: UploadBody):
    return {
        "status": "Upload completed successfully",
        "file_name": body.file_name,
        "upload_id": body.upload_id,
        "parts": body.parts
    }
