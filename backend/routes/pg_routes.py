from fastapi import APIRouter,HTTPException
from models.pg_model import PG
from pathlib import Path
import json



router=APIRouter()

@router.get("/pgs/{city}",response_model=list[PG])
async def get_city_by_pg(city:str):
    data =json.loads(Path("data/pg_data.json").read_text(encoding="utf-8"))
    city_pgs=[pg for pg in data if pg["city"].lower()==city.lower()]
    if not city_pgs:
        raise HTTPException(status_code=404,detail="no Pgs found in this city")
    return city_pgs


