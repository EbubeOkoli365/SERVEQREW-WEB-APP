import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { AuthWorkspace } from '../../components/auth/AuthWorkspace'
import { FormField } from '../../components/auth/FormField'
import { PasswordField } from '../../components/auth/PasswordField'
import { SubmitButton } from '../../components/auth/SubmitButton'

export function SignupScreen() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<{
    fullName?: string
    email?: string
    password?: string
  }>({})

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: {
      fullName?: string
      email?: string
      password?: string
    } = {}
    const trimmedName = fullName.trim()
    const trimmedEmail = email.trim()

    if (!trimmedName) nextErrors.fullName = 'Enter your full name.'
    if (!trimmedEmail) {
      nextErrors.email = 'Enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (!password) nextErrors.password = 'Enter a password.'

    setErrors(nextErrors)
  }

  return (
    <AuthWorkspace>
      <div className="flex w-full flex-col">
        <header className="space-y-3">
          <h1 className="font-[family-name:var(--font-family-display)] text-[length:var(--text-h1)] font-bold leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-[var(--text-primary)] [@media(max-width:1023.98px)]:text-white">
            Join ServeQrew
          </h1>
          <p className="max-w-[30rem] text-[length:var(--text-body)] leading-[var(--leading-normal)] text-[var(--text-secondary)] [@media(max-width:1023.98px)]:text-[var(--showcase-muted)]">
            Create your account and discover opportunities across your campus community.
          </p>
        </header>

        <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
          <FormField label="Full name" required errorMessage={errors.fullName} className="[@media(max-width:1023.98px)]:[&_label]:text-slate-100 [@media(max-width:1023.98px)]:[&_p[role=alert]]:text-red-300">
            <input
              type="text"
              name="fullName"
              autoComplete="name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Your full name"
              className="auth-input"
            />
          </FormField>

          <FormField label="Email address" required errorMessage={errors.email} className="[@media(max-width:1023.98px)]:[&_label]:text-slate-100 [@media(max-width:1023.98px)]:[&_p[role=alert]]:text-red-300">
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

          <FormField label="Password" required errorMessage={errors.password} className="[@media(max-width:1023.98px)]:[&_label]:text-slate-100 [@media(max-width:1023.98px)]:[&_p[role=alert]]:text-red-300 [@media(max-width:1023.98px)]:[&_button]:text-slate-600 [@media(max-width:1023.98px)]:[&_button:hover]:text-slate-900">
            <PasswordField
              name="password"
              autoComplete="new-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Create a password"
            />
          </FormField>

          <div className="pt-1">
            <SubmitButton>Create account</SubmitButton>
          </div>
        </form>

        <p className="mt-5 text-center text-sm leading-[var(--leading-normal)] text-[#475569] [@media(max-width:1023.98px)]:text-slate-300">
          Already have an account?{' '}
          <Link to="/login" className="auth-link min-h-0 align-baseline text-sm [@media(max-width:1023.98px)]:text-sky-300 [@media(max-width:1023.98px)]:hover:text-sky-200">
            Sign in
          </Link>
        </p>
      </div>
    </AuthWorkspace>
  )
}
