from fastapi import FastAPI
from middleware.cors import setup_cors
from routes.pg_routes import router as pg_router

app = FastAPI()
setup_cors(app)
app.include_router(pg_router)