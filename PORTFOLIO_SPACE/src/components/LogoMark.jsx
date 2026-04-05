import { profile } from '../data/portfolio'

export function LogoMark() {
  return (
    <a
      href="#top"
      className="group/brand relative inline-flex touch-manipulation items-center gap-2.5 rounded-md py-2 pl-1 pr-2 transition-all duration-300 ease-out hover:bg-white/[0.06] active:scale-[0.99] sm:gap-3.5 sm:pr-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      aria-label={`${profile.name} — home`}
    >
      <span className="relative inline-flex flex-col items-start">
        <span className="flex items-baseline leading-none">
          <span className="relative inline-block pb-1.5">
            <span className="font-display text-[1.95rem] text-white transition-transform duration-300 ease-out group-hover/brand:-translate-y-0.5 sm:text-[2.2rem]">
              D
            </span>
            <span
              className="absolute bottom-0 left-0 h-[3px] w-[0.52em] rounded-full bg-accent shadow-none transition-all duration-300 ease-out group-hover/brand:w-[1.15em] group-hover/brand:bg-accent-hover group-hover/brand:shadow-[0_0_14px_rgba(165,201,225,0.65)]"
              aria-hidden
            />
          </span>
          <span className="font-display text-[1.95rem] text-accent transition-all duration-300 ease-out sm:text-[2.2rem] -ml-[0.2em] group-hover/brand:text-white group-hover/brand:drop-shadow-[0_0_14px_rgba(165,201,225,0.55)]">
            8
          </span>
        </span>
      </span>

      <span
        className="hidden h-7 w-px bg-white/20 sm:block sm:h-8"
        aria-hidden
      />

      <span className="font-sans text-base font-bold tracking-tight text-white transition-all duration-300 ease-out sm:text-lg group-hover/brand:translate-x-0.5 group-hover/brand:text-accent">
        {profile.shortName}
      </span>
    </a>
  )
}
