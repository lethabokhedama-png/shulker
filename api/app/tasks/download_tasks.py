import asyncio
import uuid
from pathlib import Path

from app.core.config import settings
from app.tasks import celery_app


@celery_app.task(bind=True, name="tasks.download")
def download_track(self, job_id: str, url: str, fmt: str, bitrate: str):
    from spotdl import Spotdl
    from spotdl.types.options import DownloaderOptionalOptions

    output_dir = Path(settings.MUSIC_DIR)
    output_dir.mkdir(parents=True, exist_ok=True)

    opts: DownloaderOptionalOptions = {
        "format": fmt,
        "bitrate": bitrate,
        "output": str(output_dir / "{artist}/{album}/{title}.{output-ext}"),
        "save_file": None,
        "overwrite": "skip",
    }

    spotdl = Spotdl(
        client_id="",
        client_secret="",
        downloader_settings=opts,
    )

    songs, _ = spotdl.search([url])
    spotdl.download_songs(songs)

    return {"job_id": job_id, "status": "complete", "count": len(songs)}
