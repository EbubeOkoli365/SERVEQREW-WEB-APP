import type { ReactNode } from 'react'

type AuthWorkspaceProps = {
  children: ReactNode
}

export function AuthWorkspace({ children }: AuthWorkspaceProps) {
  return <div className="w-full">{children}</div>
}