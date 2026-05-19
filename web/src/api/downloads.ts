import client from './client'
import type { DownloadJob, DownloadRequest } from '@/types/download'

export const downloadsApi = {
  start: (req: DownloadRequest) =>
    client.post<DownloadJob>('/downloads/', req).then(r => r.data),
  status: (jobId: string) =>
    client.get<DownloadJob>(`/downloads/${jobId}`).then(r => r.data),
}
