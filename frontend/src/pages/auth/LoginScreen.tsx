import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { AuthWorkspace } from '../../components/auth/AuthWorkspace'
import { FormField } from '../../components/auth/FormField'
import { PasswordField } from '../../components/auth/PasswordField'
import { SubmitButton } from '../../components/auth/SubmitButton'

export function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: { email?: string; password?: string } = {}
    const trimmedEmail = email.trim()

    if (!trimmedEmail) {
      nextErrors.email = 'Enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = 'Enter a valid email address.'
    }

    if (!password) {
      nextErrors.password = 'Enter your password.'
    }

    setErrors(nextErrors)
  }

  return (
    <AuthWorkspace>
      <div className="flex w-full flex-col">
        <header className="space-y-3">
          <h1 className="font-[family-name:var(--font-family-display)] text-[length:var(--text-h1)] font-bold leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-[var(--text-primary)] lg:text-[var(--text-primary)] [@media(max-width:1023.98px)]:text-white">
            Welcome back
          </h1>
          <p className="max-w-[30rem] text-[length:var(--text-body)] leading-[var(--leading-normal)] text-[var(--text-secondary)] [@media(max-width:1023.98px)]:text-[var(--showcase-muted)]">
            Sign in to continue exploring your campus marketplace.
          </p>
        </header>

        <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
          <FormField label="Email address" required showRequiredIndicator={false} errorMessage={errors.email} className="[@media(max-width:1023.98px)]:[&_label]:text-slate-100 [@media(max-width:1023.98px)]:[&_p[role=alert]]:text-red-300">
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

          <FormField label="Password" required showRequiredIndicator={false} errorMessage={errors.password} className="[@media(max-width:1023.98px)]:[&_label]:text-slate-100 [@media(max-width:1023.98px)]:[&_p[role=alert]]:text-red-300 [@media(max-width:1023.98px)]:[&_button]:text-slate-600 [@media(max-width:1023.98px)]:[&_button:hover]:text-slate-900">
            <PasswordField
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
            />
          </FormField>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <label className="inline-flex min-h-11 items-center gap-2.5 text-[length:var(--text-helper)] font-medium text-[var(--text-secondary)] [@media(max-width:1023.98px)]:text-slate-200">
              <input
                type="checkbox"
                name="rememberMe"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
                className="h-4 w-4 rounded border-[var(--border-input)] text-[var(--accent)] accent-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)]"
              />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="auth-link [@media(max-width:1023.98px)]:text-sky-300 [@media(max-width:1023.98px)]:hover:text-sky-200">
              Forgot password?
            </Link>
          </div>

          <div className="pt-1">
            <SubmitButton>Sign in</SubmitButton>
          </div>
        </form>

        <p className="mt-5 text-center text-sm leading-[var(--leading-normal)] text-[#475569] [@media(max-width:1023.98px)]:text-slate-300">
          New to ServeQrew?{' '}
          <Link to="/signup" className="auth-link min-h-0 align-baseline text-sm [@media(max-width:1023.98px)]:text-sky-300 [@media(max-width:1023.98px)]:hover:text-sky-200">
            Create an account
          </Link>
        </p>
      </div>
    </AuthWorkspace>
  )
}