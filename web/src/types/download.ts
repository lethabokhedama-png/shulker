export type AudioFormat = 'mp3' | 'flac' | 'm4a' | 'ogg'

export interface DownloadRequest {
  url: string
  format: AudioFormat
  bitrate: string
}

export interface DownloadJob {
  job_id: string
  url: string
  format: string
  status: 'queued' | 'downloading' | 'complete' | 'failed'
  progress: number
  title?: string
  error?: string
}
