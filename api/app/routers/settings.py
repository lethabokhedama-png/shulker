from fastapi import APIRouter
from pydantic import BaseModel
from app.core.config import settings

router = APIRouter()


class AppSettings(BaseModel):
    music_dir: str
    downloads_dir: str
    audio_format: str
    bitrate: str
    max_concurrent: int


@router.get("/", response_model=AppSettings)
async def get_settings():
    return AppSettings(
        music_dir=settings.MUSIC_DIR,
        downloads_dir=settings.DOWNLOADS_DIR,
        audio_format=settings.SPOTDL_AUDIO_FORMAT,
        bitrate=settings.SPOTDL_BITRATE,
        max_concurrent=settings.SPOTDL_MAX_CONCURRENT,
    )
