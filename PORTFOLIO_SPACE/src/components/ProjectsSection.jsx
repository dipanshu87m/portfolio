import { projects } from '../data/portfolio'

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl py-4 sm:py-10">
      <h2 className="font-display text-4xl tracking-[0.12em] text-white sm:text-5xl">
        PROJECTS
      </h2>
      <div
        className="mt-3 h-px w-16 bg-gradient-to-r from-accent to-transparent"
        aria-hidden
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="flex flex-col rounded-xl border border-border bg-surface/95 p-6 shadow-card backdrop-blur-sm transition-all hover:border-accent/30 hover:shadow-card-hover sm:p-8"
          >
            <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
              {p.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
              {p.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-border bg-bg px-2.5 py-1 font-mono text-[11px] text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-white/70 sm:text-[15px]">
              {p.bullets.map((b) => (
                <li key={b} className="marker:text-accent">
                  {b}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
