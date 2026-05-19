import { MdSearch, MdClose } from 'react-icons/md'

interface Props {
  value: string
  onChange: (v: string) => void
}

export function SearchBar({ value, onChange }: Props) {
  return (
    <div className="relative">
      <MdSearch
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-sub pointer-events-none"
      />
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search for songs, artists, albums..."
        className="w-full bg-card border border-border rounded-full pl-10 pr-4 py-2.5 text-text text-sm outline-none focus:border-accent transition-colors"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-sub hover:text-text"
        >
          <MdClose size={16} />
        </button>
      )}
    </div>
  )
}
