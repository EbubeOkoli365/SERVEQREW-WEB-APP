import type { ReactNode } from 'react'
import { MosaicBackground } from './MosaicBackground'

type AuthShellProps = {
  showcase: ReactNode
  children: ReactNode
}

export function AuthShell({ showcase, children }: AuthShellProps) {
  return (
    <div className="min-h-[100dvh] min-h-[100svh] bg-[var(--workspace-bg)] text-[var(--text-primary)] lg:bg-[var(--workspace-bg)]">
      <div className="grid min-h-[100dvh] min-h-[100svh] grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="hidden lg:block">{showcase}</div>

        <div className="relative flex min-h-[100dvh] min-h-[100svh] flex-col overflow-hidden bg-[var(--showcase-bg)] text-[var(--showcase-text)] lg:min-h-0 lg:overflow-visible lg:bg-[var(--workspace-bg)] lg:text-[var(--text-primary)]">
          <MosaicBackground variant="mobile" className="lg:hidden" />

          <header
            aria-label="ServeQrew"
            className="relative z-10 flex shrink-0 items-center px-6 pt-[calc(0.75rem+env(safe-area-inset-top,0px))] pb-2 sm:px-8 lg:hidden"
          >
            <div className="mx-auto w-full max-w-[28rem]">
              <p className="font-[family-name:var(--font-family-display)] text-[1.375rem] font-bold leading-none tracking-[var(--tracking-tight)] text-white drop-shadow-[0_1px_12px_rgba(2,132,199,0.18)]">
                ServeQrew
              </p>
            </div>
          </header>

          <main
            aria-label="Authentication workspace"
            className="relative z-10 flex min-h-0 flex-1 flex-col lg:bg-[var(--workspace-bg)] lg:border-l lg:border-[var(--border-subtle)]/60"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden opacity-[0.045] [background-image:radial-gradient(circle,rgba(15,23,42,0.45)_0.75px,transparent_0.75px)] [background-size:24px_24px] lg:block"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 hidden h-px bg-[var(--border-subtle)]/70 lg:block"
            />
            <div className="relative z-10 flex flex-1 flex-col overflow-y-auto px-6 pt-5 pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] pl-[max(1.5rem,env(safe-area-inset-left,0px))] pr-[max(1.5rem,env(safe-area-inset-right,0px))] lg:overflow-visible lg:px-12 lg:py-14 lg:pb-[max(var(--space-6),var(--safe-bottom))] lg:pl-[3rem] lg:pr-[3rem] xl:px-20 xl:pl-[5rem] xl:pr-[5rem]">
              <div className="flex w-full flex-1 items-start justify-center lg:items-center lg:justify-start">
                <div className="auth-mobile-surface w-full max-w-[28rem] rounded-[1.375rem] border border-white/10 bg-[rgba(8,20,46,0.62)] px-5 py-6 shadow-[0_18px_48px_rgba(2,8,23,0.45),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-[10px] sm:px-6 sm:py-7 lg:rounded-none lg:border-none lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none lg:backdrop-blur-none">
                  {children}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}