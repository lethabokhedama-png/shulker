import { useDownloadStore } from '@/store/downloadStore'
import { DownloadItem } from './DownloadItem'

export function DownloadQueue() {
  const jobs = useDownloadStore(s => Object.values(s.jobs))

  if (jobs.length === 0) return null

  return (
    <div className="fixed bottom-28 right-4 w-80 bg-surface border border-border rounded-2xl shadow-2xl z-40 overflow-hidden">
      <div className="px-4 py-3 border-b border-border">
        <h4 className="text-text text-sm font-semibold">Downloads</h4>
      </div>
      <div className="max-h-64 overflow-y-auto">
        {jobs.map(job => <DownloadItem key={job.job_id} job={job} />)}
      </div>
    </div>
  )
}
