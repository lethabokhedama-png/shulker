import { useState } from 'react'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import { useDownloadStore } from '@/store/downloadStore'
import { downloadsApi } from '@/api/downloads'
import type { AudioFormat } from '@/types/download'

interface Props {
  open: boolean
  onClose: () => void
}

export function DownloadModal({ open, onClose }: Props) {
  const [url, setUrl] = useState('')
  const [format, setFormat] = useState<AudioFormat>('mp3')
  const [loading, setLoading] = useState(false)
  const { upsertJob } = useDownloadStore()

  const handleDownload = async () => {
    if (!url.trim()) return
    setLoading(true)
    try {
      const job = await downloadsApi.start({ url: url.trim(), format, bitrate: '320k' })
      upsertJob(job)
      setUrl('')
      onClose()
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal open={open} onClose={onClose} title="Download Music">
      <div className="space-y-4">
        <div>
          <label className="text-sub text-xs mb-1.5 block">Spotify URL</label>
          <input
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="https://open.spotify.com/track/..."
            className="w-full bg-card border border-border rounded-lg px-3 py-2.5 text-text text-sm outline-none focus:border-accent transition-colors"
            onKeyDown={e => e.key === 'Enter' && handleDownload()}
          />
        </div>
        <div>
          <label className="text-sub text-xs mb-1.5 block">Format</label>
          <div className="flex gap-2">
            {(['mp3', 'flac', 'm4a'] as AudioFormat[]).map(f => (
              <button
                key={f}
                onClick={() => setFormat(f)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  format === f
                    ? 'bg-accent text-black border-accent'
                    : 'border-border text-sub hover:text-text'
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <Button
          variant="primary"
          size="lg"
          className="w-full"
          onClick={handleDownload}
          disabled={loading || !url.trim()}
        >
          {loading ? 'Starting…' : 'Download'}
        </Button>
      </div>
    </Modal>
  )
}
