import { skills } from '../data/portfolio'

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl py-16 sm:py-20">
      <h2 className="font-display text-4xl tracking-[0.12em] text-white sm:text-5xl">
        SKILLS
      </h2>
      <div
        className="mt-3 h-px w-16 bg-gradient-to-r from-accent to-transparent"
        aria-hidden
      />
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map(({ name, abbr }) => {
          const isHighlighted = [
            'Spring AI',
            'Groq / Llama 3.3',
            'RAG Architecture',
            'Open Policy Agent',
            'Trivy / Snyk',
          ].includes(name)
          return (
            <article
              key={name}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-surface/90 p-4 shadow-card backdrop-blur-sm transition-all hover:border-accent/35 hover:shadow-card-hover"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-lg font-mono text-xs font-semibold ${
                  isHighlighted
                    ? 'bg-accent/15 text-accent ring-1 ring-accent/35'
                    : 'bg-bg-muted text-muted ring-1 ring-border'
                }`}
              >
                {abbr}
              </div>
              <h3 className="hyphens-auto text-center text-sm font-medium leading-snug text-white break-words">
                {name}
              </h3>
            </article>
          )
        })}
      </div>
    </section>
  )
}
