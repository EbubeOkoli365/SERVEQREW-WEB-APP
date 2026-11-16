import { MosaicBackground } from './MosaicBackground'

type FeatureProps = {
  icon: 'compass' | 'users' | 'spark'
  text: string
}

function FeatureIcon({ icon }: { icon: FeatureProps['icon'] }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  if (icon === 'users') {
    return (
      <svg {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="3" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a3 3 0 0 1 0 5.74" />
      </svg>
    )
  }

  if (icon === 'spark') {
    return (
      <svg {...common}>
        <path d="M12 3l1.8 4.6L18.5 9.5l-4.7 1.9L12 16l-1.8-4.6-4.7-1.9 4.7-1.9L12 3z" />
        <path d="M19 14.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8z" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M14.8 9.2l-1.7 4-4 1.7 1.7-4 4-1.7z" />
    </svg>
  )
}

function FeatureItem({ icon, text }: FeatureProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sky-300/90 backdrop-blur-sm">
        <FeatureIcon icon={icon} />
      </span>
      <p className="text-[0.9375rem] font-medium leading-[1.5] text-white/88">{text}</p>
    </div>
  )
}

export function AuthShowcasePanel() {
  return (
    <aside
      aria-label="ServeQrew marketplace"
      className="relative flex h-full min-h-[100svh] flex-col overflow-hidden bg-[var(--showcase-bg)] text-[var(--showcase-text)]"
    >
      <MosaicBackground variant="showcase" />
      <div className="relative z-10 flex h-full flex-col justify-between px-10 py-10 xl:px-14 xl:py-12">
        <div className="motion-showcase-enter">
          <img
            src="/ServeQrewLogo.jpg"
            alt="ServeQrew"
            width={1280}
            height={720}
            decoding="async"
            className="h-10 w-auto object-contain mix-blend-lighten"
          />
        </div>

        <div className="max-w-lg motion-showcase-enter [animation-delay:80ms]">
          <p className="font-[family-name:var(--font-family-display)] text-[clamp(2rem,2.4vw,2.75rem)] font-bold leading-[1.08] tracking-[var(--tracking-tight)] text-white">
            Your campus marketplace, in one place.
          </p>
          <p className="mt-5 max-w-md text-[1.0625rem] leading-[1.7] text-[var(--showcase-muted)]">
            Discover services, opportunities, and trusted connections across your campus community with a simple, welcoming experience.
          </p>
          <div className="mt-10 space-y-4">
            <FeatureItem icon="compass" text="Explore campus services and opportunities" />
            <FeatureItem icon="users" text="Connect with people in your community" />
            <FeatureItem icon="spark" text="Start with an account that feels familiar" />
          </div>
        </div>

        <div className="h-4" aria-hidden="true" />
      </div>
    </aside>
  )
}