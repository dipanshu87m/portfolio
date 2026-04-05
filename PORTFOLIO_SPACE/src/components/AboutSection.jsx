import { about } from '../data/portfolio'

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl py-16 sm:py-20">
      <h2 className="font-display text-4xl tracking-[0.12em] text-white sm:text-5xl">
        ABOUT
      </h2>
      <div
        className="mt-3 h-px w-16 bg-gradient-to-r from-accent to-transparent"
        aria-hidden
      />
      <p className="mt-10 max-w-3xl text-lg leading-relaxed text-white/75 sm:text-xl">
        {about}
      </p>
    </section>
  )
}
