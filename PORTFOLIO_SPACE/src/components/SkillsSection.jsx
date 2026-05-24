import { skills } from '../data/portfolio'
import { SkillIconBadge, skillVisuals } from './SkillIcon'

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
        {skills.map(({ name }) => {
          const visual = skillVisuals[name]
          const accent = visual?.icons[0]?.color ?? '#a5c9e1'

          return (
            <article
              key={name}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-surface/90 p-4 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--skill-accent)_40%,transparent)] hover:shadow-card-hover"
              style={{
                ['--skill-accent']: accent,
              }}
            >
              <SkillIconBadge name={name} />
              <h3 className="hyphens-auto text-center text-sm font-medium leading-snug text-white break-words transition-colors duration-300 group-hover:text-accent">
                {name}
              </h3>
            </article>
          )
        })}
      </div>
    </section>
  )
}
