import { cloneElement, isValidElement, useId } from 'react'
import type { ReactElement, ReactNode } from 'react'

type FormFieldControlProps = {
  id?: string
  'aria-describedby'?: string
  'aria-invalid'?: boolean
}

type FormFieldProps = {
  id?: string
  label: string
  required?: boolean
  showRequiredIndicator?: boolean
  helperText?: string
  errorMessage?: string
  children: ReactNode
  className?: string
}

function mergeDescribedBy(...values: Array<string | undefined>) {
  const merged = values.filter(Boolean).join(' ').trim()
  return merged || undefined
}

export function FormField({
  id,
  label,
  required = false,
  showRequiredIndicator = true,
  helperText,
  errorMessage,
  children,
  className = '',
}: FormFieldProps) {
  const generatedId = useId()
  const controlId = id ?? generatedId
  const helperId = helperText ? `${controlId}-helper` : undefined
  const errorId = errorMessage ? `${controlId}-error` : undefined
  const describedBy = mergeDescribedBy(helperId, errorId)
  const invalid = Boolean(errorMessage)

  const control = isValidElement<FormFieldControlProps>(children)
    ? cloneElement(children as ReactElement<FormFieldControlProps>, {
        id: (children.props as FormFieldControlProps).id ?? controlId,
        'aria-describedby': mergeDescribedBy(
          (children.props as FormFieldControlProps)['aria-describedby'],
          describedBy,
        ),
        'aria-invalid': invalid || (children.props as FormFieldControlProps)['aria-invalid'],
      })
    : children

  return (
    <div className={`flex flex-col gap-2 ${className}`.trim()}>
      <label
        htmlFor={controlId}
        className="text-[length:var(--text-label)] font-medium leading-[var(--leading-normal)] text-[var(--text-primary)]"
      >
        {label}
        {required && showRequiredIndicator ? (
          <span aria-hidden="true" className="ml-1 text-[var(--error)]">
            *
          </span>
        ) : null}
      </label>

      {control}

      {helperText ? (
        <p
          id={helperId}
          className="text-[length:var(--text-helper)] leading-[var(--leading-normal)] text-[var(--text-secondary)]"
        >
          {helperText}
        </p>
      ) : null}

      {errorMessage ? (
        <p
          id={errorId}
          className="text-[length:var(--text-helper)] font-medium leading-[var(--leading-normal)] text-[var(--error)]"
        >
          {errorMessage}
        </p>
      ) : null}
    </div>
  )
}