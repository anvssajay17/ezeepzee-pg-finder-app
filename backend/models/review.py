from pydantic import BaseModel

class Review(BaseModel):
    comment: str
