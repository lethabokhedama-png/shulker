from contextlib import asynccontextmanager

import socketio
import structlog
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.core.config import settings
from app.core.logging import configure_logging
from app.routers import downloads, lyrics, playlists, search, settings as settings_router, stream, tracks
from app.websocket.manager import sio

configure_logging()
log = structlog.get_logger()


@asynccontextmanager
async def lifespan(app: FastAPI):
    log.info("shulker.api.starting", env=settings.ENV)
    yield
    log.info("shulker.api.shutdown")


app = FastAPI(
    title="Shulker API",
    version="0.1.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(tracks.router,   prefix="/api/v1/tracks",    tags=["tracks"])
app.include_router(playlists.router,prefix="/api/v1/playlists", tags=["playlists"])
app.include_router(downloads.router,prefix="/api/v1/downloads", tags=["downloads"])
app.include_router(stream.router,   prefix="/api/v1/stream",    tags=["stream"])
app.include_router(search.router,   prefix="/api/v1/search",    tags=["search"])
app.include_router(lyrics.router,   prefix="/api/v1/lyrics",    tags=["lyrics"])
app.include_router(settings_router.router, prefix="/api/v1/settings", tags=["settings"])

socket_app = socketio.ASGIApp(sio, other_asgi_app=app)
