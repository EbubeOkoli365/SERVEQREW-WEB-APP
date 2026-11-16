type MosaicBackgroundProps = {
  variant?: 'shell' | 'showcase' | 'mobile'
  className?: string
}

const mobileParticles = [
  { left: '6%', delay: '-2s', duration: '14s', size: 2, opacity: 0.45 },
  { left: '14%', delay: '-9s', duration: '18s', size: 3, opacity: 0.3 },
  { left: '22%', delay: '-5s', duration: '16s', size: 2, opacity: 0.38 },
  { left: '31%', delay: '-12s', duration: '20s', size: 2.5, opacity: 0.28 },
  { left: '39%', delay: '-7s', duration: '15s', size: 2, opacity: 0.42 },
  { left: '48%', delay: '-15s', duration: '19s', size: 3, opacity: 0.26 },
  { left: '57%', delay: '-3s', duration: '17s', size: 2, opacity: 0.36 },
  { left: '66%', delay: '-11s', duration: '21s', size: 2.5, opacity: 0.3 },
  { left: '74%', delay: '-6s', duration: '14.5s', size: 2, opacity: 0.4 },
  { left: '83%', delay: '-13s', duration: '18.5s', size: 3, opacity: 0.24 },
  { left: '91%', delay: '-4s', duration: '16.5s', size: 2, opacity: 0.34 },
  { left: '27%', delay: '-16s', duration: '22s', size: 1.8, opacity: 0.22 },
]

const mobileRain = [
  { left: '8%', delay: '-1s', duration: '2.8s', length: 18, opacity: 0.14 },
  { left: '17%', delay: '-2.2s', duration: '3.6s', length: 28, opacity: 0.1 },
  { left: '26%', delay: '-0.6s', duration: '3.1s', length: 22, opacity: 0.12 },
  { left: '35%', delay: '-3s', duration: '4s', length: 32, opacity: 0.08 },
  { left: '44%', delay: '-1.8s', duration: '3.3s', length: 20, opacity: 0.13 },
  { left: '53%', delay: '-2.6s', duration: '3.8s', length: 26, opacity: 0.1 },
  { left: '62%', delay: '-0.9s', duration: '3s', length: 24, opacity: 0.12 },
  { left: '71%', delay: '-3.4s', duration: '4.2s', length: 30, opacity: 0.08 },
  { left: '80%', delay: '-1.4s', duration: '3.4s', length: 21, opacity: 0.11 },
  { left: '89%', delay: '-2.8s', duration: '3.9s', length: 27, opacity: 0.09 },
  { left: '12%', delay: '-3.6s', duration: '4.4s', length: 34, opacity: 0.07 },
  { left: '58%', delay: '-2s', duration: '3.5s', length: 19, opacity: 0.12 },
]

export function MosaicBackground({ variant = 'shell', className = '' }: MosaicBackgroundProps) {
  if (variant === 'mobile') {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_18%_18%,rgba(2,132,199,0.22),transparent_55%),radial-gradient(900px_620px_at_82%_82%,rgba(56,189,248,0.13),transparent_58%),linear-gradient(180deg,#081026_0%,#0a1733_52%,#081026_100%)]" />
        <div className="motion-mobile-glow-a absolute -left-24 top-[8%] h-72 w-72 rounded-full bg-[rgba(2,132,199,0.16)] blur-3xl" />
        <div className="motion-mobile-glow-b absolute -right-20 bottom-[6%] h-[22rem] w-[22rem] rounded-full bg-[rgba(56,189,248,0.11)] blur-3xl" />
        <div className="motion-mobile-glow-c absolute left-1/3 top-[38%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(125,211,252,0.08)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_30%,transparent_70%,rgba(0,0,0,0.18))]" />

        <div className="absolute inset-0">
          {mobileRain.map((drop, index) => (
            <span
              key={`rain-${index}`}
              className="motion-rain absolute top-[-12%] w-px rounded-full bg-gradient-to-b from-transparent via-cyan-300/30 to-transparent"
              style={{
                left: drop.left,
                height: `${drop.length}px`,
                opacity: drop.opacity,
                animationDuration: `${drop.duration}`,
                animationDelay: drop.delay,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0">
          {mobileParticles.map((particle, index) => (
            <span
              key={`particle-${index}`}
              className="motion-particle absolute top-[-6%] rounded-full bg-cyan-200/70 shadow-[0_0_8px_rgba(56,189,248,0.35)]"
              style={{
                left: particle.left,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: particle.opacity,
                animationDuration: `${particle.duration}`,
                animationDelay: particle.delay,
              }}
            />
          ))}
        </div>

        <svg
          className="motion-shard motion-shard-a absolute left-[8%] top-[18%] h-10 w-6 text-cyan-300/20"
          viewBox="0 0 24 40"
          fill="currentColor"
        >
          <path d="M12 0L20 14L12 40L4 18Z" />
        </svg>
        <svg
          className="motion-shard motion-shard-b absolute right-[10%] top-[28%] h-8 w-5 text-sky-200/15"
          viewBox="0 0 24 40"
          fill="currentColor"
        >
          <path d="M12 1L22 16L13 39L2 20Z" />
        </svg>
        <svg
          className="motion-shard motion-shard-c absolute left-[72%] top-[62%] h-12 w-6 text-cyan-400/15"
          viewBox="0 0 24 40"
          fill="currentColor"
        >
          <path d="M11 0L21 13L12 40L3 15Z" />
        </svg>
        <svg
          className="motion-shard motion-shard-d absolute left-[18%] top-[68%] h-7 w-4 text-slate-200/10"
          viewBox="0 0 24 40"
          fill="currentColor"
        >
          <path d="M12 0L19 17L12 40L5 17Z" />
        </svg>
      </div>
    )
  }

  if (variant !== 'showcase') return null

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(1100px_700px_at_18%_18%,rgba(2,132,199,0.2),transparent_55%),radial-gradient(900px_620px_at_82%_82%,rgba(56,189,248,0.12),transparent_58%),linear-gradient(180deg,#081026_0%,#0a1733_52%,#081026_100%)]" />
      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[rgba(2,132,199,0.14)] blur-3xl motion-ambient-drift" />
      <div className="absolute -right-20 bottom-0 h-[24rem] w-[24rem] rounded-full bg-[rgba(56,189,248,0.1)] blur-3xl motion-ambient-drift-slow" />
      <div className="absolute left-1/3 top-1/3 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(255,255,255,0.04)] blur-2xl motion-ambient-glow" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_35%,transparent_72%,rgba(0,0,0,0.14))]" />
    </div>
  )
}