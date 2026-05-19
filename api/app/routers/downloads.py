from fastapi import APIRouter
from app.schemas.download import DownloadJob, DownloadRequest
from app.services.download_service import enqueue_download, get_job_status

router = APIRouter()


@router.post("/", response_model=DownloadJob, status_code=202)
async def start_download(req: DownloadRequest):
    return enqueue_download(req)


@router.get("/{job_id}", response_model=DownloadJob)
async def download_status(job_id: str):
    return get_job_status(job_id)
