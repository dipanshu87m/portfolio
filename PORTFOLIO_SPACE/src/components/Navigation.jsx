import { IconGitHub, IconLinkedIn, IconMail } from './Icons'
import { LogoMark } from './LogoMark'
import { profile } from '../data/portfolio'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: "Let's Talk" },
]

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-md p-2 text-white/55 transition-colors hover:bg-white/5 hover:text-accent sm:min-h-0 sm:min-w-0"
      aria-label={label}
    >
      {children}
    </a>
  )
}

export function Navigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.09] bg-bg/92 shadow-[0_10px_40px_rgba(8,10,14,0.55)] backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-bg/78">
      <nav
        className="mx-auto grid max-w-7xl grid-cols-1 gap-4 pb-3 pl-[max(1.25rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))] pt-[max(1.5rem,env(safe-area-inset-top))] sm:pl-[max(2rem,env(safe-area-inset-left))] sm:pr-[max(2rem,env(safe-area-inset-right))] lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-8 lg:pb-4 lg:pl-[max(2.5rem,env(safe-area-inset-left))] lg:pr-[max(2.5rem,env(safe-area-inset-right))] lg:pt-[max(2rem,env(safe-area-inset-top))]"
        aria-label="Primary"
      >
        {/* Industry default: mark top-left */}
        <div className="flex justify-start">
          <LogoMark />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:gap-x-7 sm:gap-y-2 lg:justify-center">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="inline-flex min-h-11 touch-manipulation items-center px-1 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/65 transition-colors hover:text-accent active:text-accent sm:min-h-0 sm:px-0 sm:py-2.5"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-center gap-1 lg:justify-end">
          <a
            href={profile.resumeUrl}
            className="mr-2 inline-flex min-h-11 touch-manipulation items-center px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent transition-colors hover:text-accent-hover sm:min-h-0"
            download
          >
            Resume
          </a>
          <span className="hidden h-4 w-px bg-border sm:block mx-2" aria-hidden />
          <SocialLink href={profile.github} label="GitHub">
            <IconGitHub className="h-4 w-4" />
          </SocialLink>
          <SocialLink href={profile.linkedin} label="LinkedIn">
            <IconLinkedIn className="h-4 w-4" />
          </SocialLink>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-md p-2 text-white/55 transition-colors hover:bg-white/5 hover:text-accent sm:min-h-0 sm:min-w-0"
            aria-label="Email"
          >
            <IconMail className="h-4 w-4" />
          </a>
        </div>
      </nav>
    </header>
  )
}
