from fastapi import FastAPI
from middleware.cors import setup_cors
from routes.pg_routes import router as pg_router
from fastapi.staticfiles import StaticFiles
from routes.add_pg_routes import router as addpg_router
from routes.review_routes import router as review_router

app = FastAPI()
app.mount("/images", StaticFiles(directory="uploaded_images"), name="images")
setup_cors(app)
app.include_router(pg_router)
app.include_router(addpg_router)
app.include_router(review_router)