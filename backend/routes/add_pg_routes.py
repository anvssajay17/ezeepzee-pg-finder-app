from fastapi import APIRouter, UploadFile, File, Form
from fastapi.responses import JSONResponse
import os
import shutil
import json

router = APIRouter()

UPLOAD_FOLDER = "uploaded_images"
DATA_FILE = "data/pg_data.json"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@router.post("/addpg/")
async def add_pg(
    city: str = Form(...),
    name: str = Form(...),
    phone: str = Form(...),
    image: UploadFile = File(...)
):
    try:
        with open(DATA_FILE, "r") as f:
            data = json.load(f)
    except FileNotFoundError:
        data = []

    city_exists = any(pg["city"].lower() == city.lower() for pg in data)
    if not city_exists:
        return JSONResponse(
            status_code=400,
            content={"error": f"Currently, we do not support PGs in {city.title()}."}
        )

    img_filename = image.filename
    img_path = os.path.join(UPLOAD_FOLDER, img_filename)
    with open(img_path, "wb") as buffer:
        shutil.copyfileobj(image.file, buffer)

    new_pg = {
        "name": name,
        "city": city.title(),
        "phone": phone,
        "image": f"/images/pg/{img_filename}"
    }
    data.append(new_pg)

    with open(DATA_FILE, "w") as f:
        json.dump(data, f, indent=2)

    return {"message": "PG added successfully!", "pg": new_pg}
