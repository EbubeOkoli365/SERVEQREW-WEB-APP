import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type SharedTextActionProps = {
  children: ReactNode
  className?: string
}

type TextActionAsButton = SharedTextActionProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & {
    href?: undefined
  }

type TextActionAsLink = SharedTextActionProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'> & {
    href: string
  }

export type TextActionProps = TextActionAsButton | TextActionAsLink

const baseClassName =
  'inline-flex min-h-11 touch-target items-center rounded-[calc(var(--radius-control)-0.25rem)] px-1.5 text-[length:var(--text-label)] font-semibold text-[var(--brand)] underline-offset-4 transition-colors duration-[var(--duration-fast)] ease-[var(--ease-default)] hover:text-[var(--primary-structural)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus)] disabled:cursor-not-allowed disabled:text-[var(--disabled-text)] disabled:no-underline'

export function TextAction(props: TextActionProps) {
  const { className = '', children, ...rest } = props
  const classes = `${baseClassName} ${className}`.trim()

  if ('href' in props && typeof props.href === 'string') {
    const { href, ...anchorProps } = rest as Omit<TextActionAsLink, 'children' | 'className'>
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  const { type = 'button', ...buttonProps } = rest as Omit<TextActionAsButton, 'children' | 'className'>
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  )
}