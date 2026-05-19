import { useDownloadStore } from '@/store/downloadStore'
import { DownloadItem } from '@/components/download/DownloadItem'
import { DownloadButton } from '@/components/download/DownloadButton'
import { MdDownload } from 'react-icons/md'

export default function Downloads() {
  const jobs = useDownloadStore(s => Object.values(s.jobs))

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-text text-2xl font-bold">Downloads</h2>
        <DownloadButton />
      </div>
      {jobs.length === 0 ? (
        <div className="text-center mt-24">
          <MdDownload size={48} className="text-sub mx-auto mb-3" />
          <p className="text-text font-semibold mb-1">No downloads yet</p>
          <p className="text-sub text-sm">Paste a Spotify URL to get started</p>
        </div>
      ) : (
        <div className="space-y-2 max-w-lg">
          {jobs.map(job => <DownloadItem key={job.job_id} job={job} />)}
        </div>
      )}
    </div>
  )
}
