import { useParams } from 'react-router-dom'

export default function Playlist() {
  const { id } = useParams()
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <h2 className="text-text text-2xl font-bold">Playlist</h2>
      <p className="text-sub text-sm mt-2">ID: {id}</p>
    </div>
  )
}
