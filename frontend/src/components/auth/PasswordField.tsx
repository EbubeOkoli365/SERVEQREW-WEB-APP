import { forwardRef, useState } from 'react'
import type { InputHTMLAttributes } from 'react'

export type PasswordFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  function PasswordField({ className = '', disabled, ...props }, ref) {
    const [visible, setVisible] = useState(false)

    return (
      <div className="relative">
        <input
          ref={ref}
          type={visible ? 'text' : 'password'}
          autoComplete={props.autoComplete ?? 'current-password'}
          disabled={disabled}
          {...props}
          className={`auth-input pr-[4.5rem] ${className}`.trim()}
        />
        <button
          type="button"
          onClick={() => setVisible((value) => !value)}
          disabled={disabled}
          aria-label={visible ? 'Hide password' : 'Show password'}
          aria-pressed={visible}
          className="absolute right-2 top-1/2 inline-flex min-h-8 -translate-y-1/2 items-center justify-center rounded-md px-2.5 py-1 text-[length:var(--text-helper)] font-medium text-[var(--text-secondary)] transition-[color,background-color] duration-[var(--duration-fast)] ease-[var(--ease-default)] hover:bg-[var(--surface-alt)] hover:text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)] disabled:cursor-not-allowed disabled:text-[var(--disabled-text)]"
        >
          {visible ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  },
)