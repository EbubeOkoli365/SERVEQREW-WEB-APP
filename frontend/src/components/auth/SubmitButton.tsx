import type { ButtonHTMLAttributes, ReactNode } from 'react'

type SubmitButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  loading?: boolean
  children: ReactNode
}

export function SubmitButton({
  loading = false,
  disabled = false,
  className = '',
  children,
  ...props
}: SubmitButtonProps) {
  const isDisabled = disabled || loading

  return (
    <button
      type="submit"
      disabled={isDisabled}
      aria-busy={loading || undefined}
      {...props}
      className={`inline-flex min-h-12 w-full touch-target items-center justify-center gap-2 rounded-[var(--radius-control)] border border-transparent bg-[var(--accent)] px-4 py-3 text-[length:var(--text-button)] font-semibold leading-[1.25] text-[var(--text-inverse)] shadow-[var(--shadow-1)] transition-[background-color,transform,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-default)] hover:bg-[var(--accent-hover)] hover:shadow-[var(--shadow-2)] active:translate-y-px active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)] disabled:cursor-not-allowed disabled:border-[var(--border-subtle)] disabled:bg-[var(--disabled-bg)] disabled:text-[var(--disabled-text-readable)] disabled:shadow-none ${className}`.trim()}
    >
      {loading ? (
        <span
          aria-hidden="true"
          className="h-4 w-4 animate-spin rounded-full border-2 border-current/35 border-t-current"
        />
      ) : null}
      <span>{children}</span>
    </button>
  )
}