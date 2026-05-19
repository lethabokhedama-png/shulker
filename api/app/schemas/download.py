from enum import StrEnum
from pydantic import BaseModel


class AudioFormat(StrEnum):
    MP3  = "mp3"
    FLAC = "flac"
    M4A  = "m4a"
    OGG  = "ogg"


class DownloadRequest(BaseModel):
    url: str
    format: AudioFormat = AudioFormat.MP3
    bitrate: str = "320k"


class DownloadJob(BaseModel):
    job_id: str
    url: str
    format: str
    status: str
    progress: float = 0.0
    title: str | None = None
    error: str | None = None
