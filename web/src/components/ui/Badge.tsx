import { cn } from '@/lib/utils'

export function Badge({ label, className }: { label: string; className?: string }) {
  return (
    <span className={cn('text-xs px-2 py-0.5 rounded-full bg-card text-sub', className)}>
      {label}
    </span>
  )
}
