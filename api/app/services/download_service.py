import uuid
from app.schemas.download import DownloadJob, DownloadRequest
from app.tasks.download_tasks import download_track


def enqueue_download(req: DownloadRequest) -> DownloadJob:
    job_id = str(uuid.uuid4())
    download_track.apply_async(
        args=[job_id, req.url, req.format, req.bitrate],
        task_id=job_id,
    )
    return DownloadJob(job_id=job_id, url=req.url, format=req.format, status="queued")


def get_job_status(job_id: str) -> DownloadJob:
    from app.tasks import celery_app
    result = celery_app.AsyncResult(job_id)
    status_map = {
        "PENDING": "queued",
        "STARTED": "downloading",
        "SUCCESS": "complete",
        "FAILURE": "failed",
    }
    return DownloadJob(
        job_id=job_id,
        url="",
        format="mp3",
        status=status_map.get(result.state, result.state),
        error=str(result.result) if result.state == "FAILURE" else None,
    )
