from fastapi import APIRouter
from typing import List
from models.review import Review
import json
from pathlib import Path

router = APIRouter()

REVIEWS_PATH = Path("data/reviews.json")


def load_reviews():
    if REVIEWS_PATH.exists():
        with open(REVIEWS_PATH, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}


def save_reviews(data):
    with open(REVIEWS_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)


reviews_db = load_reviews()


@router.get("/reviews/{pg_name}", response_model=List[Review])
async def get_reviews(pg_name: str):
    key = pg_name.lower().strip()
    return reviews_db.get(key, [])


@router.post("/reviews/{pg_name}")
async def add_review(pg_name: str, review: Review):
    key = pg_name.lower().strip()
    reviews_db.setdefault(key, []).append(review.dict())
    save_reviews(reviews_db)
    return {"message": "Review added"}

