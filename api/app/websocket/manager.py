import socketio

sio = socketio.AsyncServer(
    async_mode="asgi",
    cors_allowed_origins="*",
    logger=False,
    engineio_logger=False,
)


@sio.event
async def connect(sid, environ):
    pass


@sio.event
async def disconnect(sid):
    pass


async def emit_download_progress(job_id: str, payload: dict) -> None:
    await sio.emit("download:progress", {"job_id": job_id, **payload})


async def emit_download_complete(job_id: str, track: dict) -> None:
    await sio.emit("download:complete", {"job_id": job_id, "track": track})


async def emit_download_error(job_id: str, error: str) -> None:
    await sio.emit("download:error", {"job_id": job_id, "error": error})
