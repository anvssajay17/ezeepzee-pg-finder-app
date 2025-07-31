from fastapi import APIRouter,HTTPException
from models.pg_model import PG
from pathlib import Path
import json

data =json.loads(Path("data/pgData.json").read_text(encoding="utf-8"))

router=APIRouter()

@router.get("/pgs/{city}",response_model=list[PG])
async def get_city_by_pg(city:str):
    city_pgs=[pg for pg in data if pg["city"].lower()==city.lower()]
    if not city_pgs:
        raise HTTPException(status_code=404,detail="no Pgs found in this city")
    return city_pgs


