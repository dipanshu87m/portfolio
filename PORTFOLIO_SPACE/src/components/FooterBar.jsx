import { profile } from '../data/portfolio'

export function FooterBar() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-7xl flex-col flex-wrap items-center justify-center gap-3 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-muted sm:flex-row sm:justify-between sm:gap-6 sm:pl-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))] sm:text-left">
        <span className="max-w-xs text-balance sm:max-w-none">
          Backend Engineer · Java · Spring Boot · Spring AI
        </span>
        <span>
          © {year} {profile.shortName.toUpperCase()}
        </span>
      </div>
      <p className="mt-6 text-center text-[10px] tracking-wider text-white/35">
        Built with React, Vite, and Tailwind CSS
      </p>
    </footer>
  )
}
