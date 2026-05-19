import type { DownloadJob } from '@/types/download'
import { DownloadProgress } from './DownloadProgress'
import { useDownloadStore } from '@/store/downloadStore'
import { MdClose, MdCheckCircle, MdError } from 'react-icons/md'

export function DownloadItem({ job }: { job: DownloadJob }) {
  const { removeJob } = useDownloadStore()

  return (
    <div className="px-4 py-3 border-b border-border last:border-0">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-text text-xs flex-1 truncate">
          {job.title || new URL(job.url || 'https://x.com').pathname.split('/').pop() || 'Track'}
        </span>
        {job.status === 'complete' && <MdCheckCircle className="text-accent shrink-0" size={14} />}
        {job.status === 'failed'   && <MdError className="text-red-500 shrink-0" size={14} />}
        <button onClick={() => removeJob(job.job_id)} className="text-sub hover:text-text shrink-0">
          <MdClose size={12} />
        </button>
      </div>
      {(job.status === 'downloading' || job.status === 'queued') && (
        <DownloadProgress progress={job.progress} status={job.status} />
      )}
      {job.error && <p className="text-red-400 text-xs mt-1">{job.error}</p>}
    </div>
  )
}
