import os
from pathlib import Path
from fastapi import HTTPException
from fastapi.responses import FileResponse
from app.core.config import settings


def resolve_track_path(track_id: str) -> Path:
    music_dir = Path(settings.MUSIC_DIR)
    for ext in ("mp3", "flac", "m4a", "ogg", "opus"):
        candidate = music_dir / f"{track_id}.{ext}"
        if candidate.exists():
            return candidate
    raise HTTPException(status_code=404, detail="Audio file not found")


def stream_response(path: Path) -> FileResponse:
    ext = path.suffix.lstrip(".")
    mime = {
        "mp3": "audio/mpeg",
        "flac": "audio/flac",
        "m4a": "audio/mp4",
        "ogg": "audio/ogg",
        "opus": "audio/opus",
    }.get(ext, "application/octet-stream")
    return FileResponse(path, media_type=mime, headers={"Accept-Ranges": "bytes"})
