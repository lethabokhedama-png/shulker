from pathlib import Path
from fastapi import APIRouter
from app.core.config import settings
from app.schemas.track import Track, TrackList
from app.services.metadata_service import read_track_metadata

router = APIRouter()


@router.get("/", response_model=TrackList)
async def list_tracks(skip: int = 0, limit: int = 50):
    music_dir = Path(settings.MUSIC_DIR)
    tracks: list[Track] = []
    for path in sorted(music_dir.rglob("*")):
        if path.suffix.lstrip(".") in ("mp3", "flac", "m4a", "ogg", "opus"):
            try:
                tracks.append(read_track_metadata(path))
            except Exception:
                continue
    return TrackList(tracks=tracks[skip : skip + limit], total=len(tracks))


@router.get("/{track_id}", response_model=Track)
async def get_track(track_id: str):
    from app.core.exceptions import TrackNotFound
    music_dir = Path(settings.MUSIC_DIR)
    for path in music_dir.rglob("*"):
        if path.suffix.lstrip(".") in ("mp3", "flac", "m4a", "ogg", "opus"):
            try:
                track = read_track_metadata(path)
                if track.id == track_id:
                    return track
            except Exception:
                continue
    raise TrackNotFound(track_id)
