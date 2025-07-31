from pydantic import BaseModel

class PG(BaseModel):
    name: str
    city: str
    phone: str
    image: str
