from pathlib import Path
from mutagen import File as MutagenFile
from app.schemas.track import Track
import hashlib


def read_track_metadata(path: Path) -> Track:
    audio = MutagenFile(path, easy=True)
    tags = audio.tags or {}
    track_id = hashlib.md5(str(path).encode()).hexdigest()[:12]
    duration = int(audio.info.length) if audio.info else 0

    return Track(
        id=track_id,
        title=tags.get("title", [path.stem])[0],
        artist=tags.get("artist", ["Unknown Artist"])[0],
        album=tags.get("album", ["Unknown Album"])[0],
        duration=duration,
        path=str(path),
        genre=tags.get("genre", [None])[0],
        year=int(tags.get("date", [0])[0][:4]) if tags.get("date") else None,
    )
