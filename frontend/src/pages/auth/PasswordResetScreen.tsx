import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { AuthWorkspace } from '../../components/auth/AuthWorkspace'
import { FormField } from '../../components/auth/FormField'
import { PasswordField } from '../../components/auth/PasswordField'
import { SubmitButton } from '../../components/auth/SubmitButton'

export function PasswordResetScreen() {
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [errors, setErrors] = useState<{ newPassword?: string; confirmNewPassword?: string }>({})

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: { newPassword?: string; confirmNewPassword?: string } = {}

    if (!newPassword) nextErrors.newPassword = 'Enter a new password.'
    if (!confirmNewPassword) {
      nextErrors.confirmNewPassword = 'Confirm your new password.'
    } else if (newPassword && confirmNewPassword !== newPassword) {
      nextErrors.confirmNewPassword = 'Passwords must match.'
    }

    setErrors(nextErrors)
  }

  return (
    <AuthWorkspace>
      <div className="flex w-full flex-col">
        <header className="space-y-3">
          <h1 className="font-[family-name:var(--font-family-display)] text-[length:var(--text-h1)] font-bold leading-[var(--leading-tight)] tracking-[var(--tracking-tight)] text-[var(--text-primary)] [@media(max-width:1023.98px)]:text-white">
            Set a new password
          </h1>
          <p className="max-w-[30rem] text-[length:var(--text-body)] leading-[var(--leading-normal)] text-[var(--text-secondary)] [@media(max-width:1023.98px)]:text-[var(--showcase-muted)]">
            Enter and confirm a new password for your account.
          </p>
        </header>

        <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
          <FormField label="New password" required errorMessage={errors.newPassword} className="[@media(max-width:1023.98px)]:[&_label]:text-slate-100 [@media(max-width:1023.98px)]:[&_p[role=alert]]:text-red-300 [@media(max-width:1023.98px)]:[&_button]:text-slate-600 [@media(max-width:1023.98px)]:[&_button:hover]:text-slate-900">
            <PasswordField
              name="newPassword"
              autoComplete="new-password"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
              placeholder="Enter a new password"
            />
          </FormField>

          <FormField label="Confirm new password" required errorMessage={errors.confirmNewPassword} className="[@media(max-width:1023.98px)]:[&_label]:text-slate-100 [@media(max-width:1023.98px)]:[&_p[role=alert]]:text-red-300 [@media(max-width:1023.98px)]:[&_button]:text-slate-600 [@media(max-width:1023.98px)]:[&_button:hover]:text-slate-900">
            <PasswordField
              name="confirmNewPassword"
              autoComplete="new-password"
              value={confirmNewPassword}
              onChange={(event) => setConfirmNewPassword(event.target.value)}
              placeholder="Re-enter new password"
            />
          </FormField>

          <div className="pt-1">
            <SubmitButton>Update password</SubmitButton>
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