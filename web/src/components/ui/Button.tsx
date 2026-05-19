import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'ghost', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full font-medium transition-all duration-150 cursor-pointer',
          variant === 'primary' && 'bg-accent text-black hover:bg-[var(--color-accent-h)] hover:scale-105',
          variant === 'ghost'   && 'text-sub hover:text-text',
          variant === 'outline' && 'border border-border text-text hover:bg-card',
          size === 'sm' && 'h-7 px-3 text-xs gap-1.5',
          size === 'md' && 'h-9 px-4 text-sm gap-2',
          size === 'lg' && 'h-12 px-6 text-base gap-2',
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'
