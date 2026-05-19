import { useState, useEffect, useCallback } from 'react'
import { searchApi } from '@/api/search'
import type { Track } from '@/types/track'

export function useSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Track[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!query.trim()) { setResults([]); return }
    const id = setTimeout(async () => {
      setLoading(true)
      try {
        const data = await searchApi.query(query)
        setResults(data.tracks)
      } finally {
        setLoading(false)
      }
    }, 300)
    return () => clearTimeout(id)
  }, [query])

  return { query, setQuery, results, loading }
}
