import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { AuthWorkspace } from '../../components/auth/AuthWorkspace'
import { FormField } from '../../components/auth/FormField'
import { SubmitButton } from '../../components/auth/SubmitButton'

export function ForgotPasswordScreen() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | undefined>()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmedEmail = email.trim()
    let nextError: string | undefined

    if (!trimmedEmail) {
      nextError = 'Enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextError = 'Enter a valid email address.'
    }

    setError(nextError)
  }

  return (
    <AuthWorkspace>
      <div className="flex w-full flex-col">
        <header className="space-y-3">
          <h1 className="font-[family-name:var(--font-family-display)] text-[length:var(--text-h1)] font-bold leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-[var(--text-primary)] [@media(max-width:1023.98px)]:text-white">
            Forgot your password?
          </h1>
          <p className="max-w-[30rem] text-[length:var(--text-body)] leading-[var(--leading-normal)] text-[var(--text-secondary)] [@media(max-width:1023.98px)]:text-[var(--showcase-muted)]">
            Enter your email address to request a password reset.
          </p>
        </header>

        <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
          <FormField label="Email address" required errorMessage={error} className="[@media(max-width:1023.98px)]:[&_label]:text-slate-100 [@media(max-width:1023.98px)]:[&_p[role=alert]]:text-red-300">
            <input
              type="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="name@example.com"
              className="auth-input"
            />
          </FormField>

          <div className="pt-1">
            <SubmitButton>Send reset link</SubmitButton>
          </div>
        </form>

        <p className="mt-5 text-center text-sm leading-[var(--leading-normal)] text-[#475569] [@media(max-width:1023.98px)]:text-slate-300">
          <Link to="/login" className="auth-link min-h-0 align-baseline text-sm [@media(max-width:1023.98px)]:text-sky-300 [@media(max-width:1023.98px)]:hover:text-sky-200">
            ← Back to sign in
          </Link>
        </p>
      </div>
    </AuthWorkspace>
  )
}