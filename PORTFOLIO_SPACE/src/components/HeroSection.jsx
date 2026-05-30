import portraitImage from '../../images/my_profile.jpeg'
import { profile } from '../data/portfolio'

export function HeroSection() {
  const src = profile.imageUrl ?? portraitImage

  return (
    <section
      id="top"
      className="relative mx-auto max-w-6xl pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-36 xl:pt-40"
    >
      <div className="flex flex-col items-center gap-10 sm:gap-12 lg:flex-row lg:items-start lg:justify-center lg:gap-10 xl:gap-12">
        <div className="w-full max-w-2xl text-center lg:flex-1 lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            Hi, I&apos;m
          </p>
          <h1 className="font-display mt-4 text-[clamp(2.25rem,9vw,5.5rem)] leading-[0.95] tracking-[0.04em] text-white sm:tracking-[0.06em]">
            {profile.name.toUpperCase()}
          </h1>
          <p className="mt-5 text-[11px] font-medium uppercase leading-relaxed tracking-[0.14em] text-accent sm:mt-6 sm:text-sm sm:tracking-[0.2em] md:text-base">
            {profile.title}
          </p>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg lg:mx-0">
            {profile.tagline}
          </p>
          <div className="mt-12 flex justify-center lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-accent/60 bg-transparent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-all hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_40px_rgba(165,201,225,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Let&apos;s Talk
              <span aria-hidden className="text-accent">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="relative shrink-0 lg:-translate-x-6 lg:mt-1 xl:-translate-x-10">
          <div className="group/photo hero-portrait relative h-[min(52vw,220px)] w-[min(52vw,220px)] sm:h-[252px] sm:w-[252px] lg:h-[272px] lg:w-[272px] p-[2px] shadow-card transition-[box-shadow] duration-500 ease-out group-hover/photo:shadow-[0_0_0_1px_rgba(165,201,225,0.45),0_0_32px_rgba(165,201,225,0.28),0_0_64px_rgba(165,201,225,0.12)]">
            <div className="hero-portrait-inner relative h-full w-full bg-surface ring-1 ring-white/20 transition-[box-shadow] duration-500 ease-out group-hover/photo:ring-accent/50 group-hover/photo:shadow-[inset_0_0_0_1px_rgba(165,201,225,0.25)]">
              <img
                src={src}
                alt={profile.name}
                width={544}
                height={544}
                decoding="async"
                fetchPriority="high"
                className="object-[center_25%]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-accent/0 transition-colors duration-500 ease-out group-hover/photo:bg-accent/10"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
