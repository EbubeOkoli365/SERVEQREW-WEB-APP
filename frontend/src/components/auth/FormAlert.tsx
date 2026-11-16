import type { ReactNode } from 'react'

type FormAlertTone = 'error' | 'success' | 'info'

type FormAlertProps = {
  tone: FormAlertTone
  title?: string
  children?: ReactNode
  className?: string
}

const toneStyles: Record<FormAlertTone, { container: string; title: string; body: string; role: 'alert' | 'status'; live: 'assertive' | 'polite' }> = {
  error: {
    container: 'border-[var(--error)] bg-[var(--error-soft)] text-[var(--error)]',
    title: 'text-[var(--error)]',
    body: 'text-[var(--error)]',
    role: 'alert',
    live: 'assertive',
  },
  success: {
    container: 'border-[var(--success)] bg-[var(--success-soft)] text-[var(--success)]',
    title: 'text-[var(--success)]',
    body: 'text-[var(--success)]',
    role: 'status',
    live: 'polite',
  },
  info: {
    container: 'border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--text-primary)]',
    title: 'text-[var(--text-primary)]',
    body: 'text-[var(--text-secondary)]',
    role: 'status',
    live: 'polite',
  },
}

export function FormAlert({ tone, title, children, className = '' }: FormAlertProps) {
  const styles = toneStyles[tone]

  return (
    <div
      role={styles.role}
      aria-live={styles.live}
      aria-atomic="true"
      className={`flex gap-3 rounded-[var(--radius-surface)] border px-4 py-3 ${styles.container} ${className}`.trim()}
    >
      <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-current" />
      <div className="min-w-0">
        {title ? (
          <p className={`text-[length:var(--text-label)] font-semibold leading-[var(--leading-normal)] ${styles.title}`}>
            {title}
          </p>
        ) : null}
        {children ? (
          <div className={`text-[length:var(--text-helper)] leading-[var(--leading-normal)] ${styles.body}`}>
            {children}
          </div>
        ) : null}
      </div>
    </div>
  )
}