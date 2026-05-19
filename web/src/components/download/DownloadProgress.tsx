interface Props {
  progress: number
  status: string
}

export function DownloadProgress({ progress, status }: Props) {
  return (
    <div className="space-y-0.5">
      <div className="h-1 rounded-full bg-border overflow-hidden">
        <div
          className="h-full bg-accent transition-all duration-300"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <p className="text-sub text-xs">{status === 'queued' ? 'Queued' : `${Math.round(progress * 100)}%`}</p>
    </div>
  )
}
