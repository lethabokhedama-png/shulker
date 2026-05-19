import { useEffect } from 'react'
import { getSocket } from '@/lib/websocket'
import { useDownloadStore } from '@/store/downloadStore'
import type { DownloadJob } from '@/types/download'

export function useDownloads() {
  const { upsertJob } = useDownloadStore()

  useEffect(() => {
    const socket = getSocket()
    socket.on('download:progress', (data: DownloadJob) => upsertJob(data))
    socket.on('download:complete', (data: { job_id: string; track: DownloadJob }) =>
      upsertJob({ ...data.track, job_id: data.job_id, status: 'complete', progress: 1 })
    )
    socket.on('download:error', (data: { job_id: string; error: string }) =>
      upsertJob({ job_id: data.job_id, url: '', format: '', status: 'failed', progress: 0, error: data.error })
    )
    return () => {
      socket.off('download:progress')
      socket.off('download:complete')
      socket.off('download:error')
    }
  }, [upsertJob])
}
