import { workedWith } from '../data/portfolio'

export function WorkedWith() {
  return (
    <section
      className="mx-auto max-w-6xl border-t border-border py-14 sm:py-16"
      aria-label="Products and platforms"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
        Products &amp; Platforms
      </p>
      <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
        {workedWith.map((name) => (
          <div
            key={name}
            className="flex min-h-[52px] min-w-[120px] flex-1 items-center justify-center rounded-xl border border-border bg-surface/90 px-4 py-3 shadow-card backdrop-blur-sm transition-all hover:border-accent/40 sm:min-w-[140px]"
          >
            <span className="font-mono text-sm font-medium tracking-wide text-white">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
