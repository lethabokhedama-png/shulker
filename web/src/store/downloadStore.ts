import { create } from 'zustand'
import type { DownloadJob } from '@/types/download'

interface DownloadStore {
  jobs: Record<string, DownloadJob>
  upsertJob: (job: DownloadJob) => void
  removeJob: (jobId: string) => void
}

export const useDownloadStore = create<DownloadStore>((set) => ({
  jobs: {},
  upsertJob: (job) => set(s => ({ jobs: { ...s.jobs, [job.job_id]: job } })),
  removeJob: (jobId) =>
    set(s => {
      const jobs = { ...s.jobs }
      delete jobs[jobId]
      return { jobs }
    }),
}))
