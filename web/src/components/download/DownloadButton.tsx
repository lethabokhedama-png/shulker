import { MdDownload } from 'react-icons/md'
import { useUIStore } from '@/store/uiStore'
import { Button } from '@/components/ui/Button'

export function DownloadButton() {
  const { setDownloadModal } = useUIStore()
  return (
    <Button variant="primary" size="md" onClick={() => setDownloadModal(true)}>
      <MdDownload size={18} />
      Download
    </Button>
  )
}
