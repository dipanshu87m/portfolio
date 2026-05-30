import { useEffect, useState } from 'react'
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

function SocialLink({ href, label, children, onClick }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      onClick={onClick}
      className="inline-flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-md p-2 text-white/55 transition-colors hover:bg-white/5 hover:text-accent lg:min-h-0 lg:min-w-0"
      aria-label={label}
    >
      {children}
    </a>
  )
}

function NavLink({ href, label, onClick, className = '' }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex min-h-11 touch-manipulation items-center px-1 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/65 transition-colors hover:text-accent active:text-accent lg:min-h-0 lg:px-0 lg:py-2.5 ${className}`}
    >
      {label}
    </a>
  )
}

function MenuIcon({ open }) {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      {open ? (
        <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
      ) : (
        <>
          <path strokeLinecap="round" d="M4 7h16" />
          <path strokeLinecap="round" d="M4 12h16" />
          <path strokeLinecap="round" d="M4 17h16" />
        </>
      )}
    </svg>
  )
}

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.09] bg-bg/92 shadow-[0_10px_40px_rgba(8,10,14,0.55)] backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-bg/78">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 pl-[max(1.25rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))] pt-[max(1rem,env(safe-area-inset-top))] pb-3 sm:pl-[max(2rem,env(safe-area-inset-left))] sm:pr-[max(2rem,env(safe-area-inset-right))] lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-8 lg:pb-4 lg:pl-[max(2.5rem,env(safe-area-inset-left))] lg:pr-[max(2.5rem,env(safe-area-inset-right))] lg:pt-[max(2rem,env(safe-area-inset-top))]"
        aria-label="Primary"
      >
        <div className="flex min-w-0 shrink-0 justify-start">
          <LogoMark />
        </div>

        <div className="hidden lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:gap-x-7 lg:gap-y-2">
          {links.map(({ href, label }) => (
            <NavLink key={href} href={href} label={label} />
          ))}
        </div>

        <div className="hidden lg:flex lg:items-center lg:justify-end lg:gap-1">
          <a
            href={profile.resumeUrl}
            className="mr-2 inline-flex min-h-11 touch-manipulation items-center px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent transition-colors hover:text-accent-hover lg:min-h-0"
            download={profile.resumeFileName}
          >
            Resume
          </a>
          <span className="mx-2 hidden h-4 w-px bg-border sm:block" aria-hidden />
          <SocialLink href={profile.github} label="GitHub">
            <IconGitHub className="h-4 w-4" />
          </SocialLink>
          <SocialLink href={profile.linkedin} label="LinkedIn">
            <IconLinkedIn className="h-4 w-4" />
          </SocialLink>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-md p-2 text-white/55 transition-colors hover:bg-white/5 hover:text-accent lg:min-h-0 lg:min-w-0"
            aria-label="Email"
          >
            <IconMail className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 shrink-0 touch-manipulation items-center justify-center rounded-md p-2 text-white/75 transition-colors hover:bg-white/5 hover:text-accent lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </nav>

      {menuOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 top-[calc(3.75rem+env(safe-area-inset-top))] z-40 bg-black/50 lg:hidden"
            onClick={closeMenu}
            aria-label="Close menu overlay"
          />
          <div
            id="mobile-nav-panel"
            className="relative z-50 border-t border-white/[0.09] bg-bg/98 px-[max(1.25rem,env(safe-area-inset-left))] pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl sm:px-[max(2rem,env(safe-area-inset-left))] lg:hidden"
          >
            <div className="flex flex-col">
              {links.map(({ href, label }) => (
                <NavLink
                  key={href}
                  href={href}
                  label={label}
                  onClick={closeMenu}
                  className="w-full justify-center border-b border-white/[0.06] py-3.5 last:border-b-0"
                />
              ))}
            </div>
            <div className="mt-4 flex flex-col items-center gap-3 border-t border-white/10 pt-4">
              <a
                href={profile.resumeUrl}
                onClick={closeMenu}
                className="inline-flex min-h-11 touch-manipulation items-center px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent transition-colors hover:text-accent-hover"
                download={profile.resumeFileName}
              >
                Resume
              </a>
              <div className="flex items-center gap-1">
                <SocialLink href={profile.github} label="GitHub" onClick={closeMenu}>
                  <IconGitHub className="h-4 w-4" />
                </SocialLink>
                <SocialLink href={profile.linkedin} label="LinkedIn" onClick={closeMenu}>
                  <IconLinkedIn className="h-4 w-4" />
                </SocialLink>
                <a
                  href={`mailto:${profile.email}`}
                  onClick={closeMenu}
                  className="inline-flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-md p-2 text-white/55 transition-colors hover:bg-white/5 hover:text-accent"
                  aria-label="Email"
                >
                  <IconMail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </header>
  )
}
