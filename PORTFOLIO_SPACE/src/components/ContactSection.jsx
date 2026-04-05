import { createElement } from 'react'
import { IconDownload, IconMail, IconPhone, IconWhatsApp } from './Icons'
import { profile } from '../data/portfolio'

function ContactCard({ href, icon, title, subtitle, external, download }) {
  const className =
    'flex items-center gap-4 rounded-xl border border-border bg-surface/95 px-5 py-4 shadow-card backdrop-blur-sm transition-all hover:border-accent/35 hover:shadow-card-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

  const body = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/25">
        {createElement(icon, { className: 'h-5 w-5' })}
      </span>
      <span className="min-w-0 text-left">
        <span className="block font-mono text-xs uppercase tracking-wider text-muted">
          {title}
        </span>
        <span className="block truncate text-sm font-medium text-white sm:text-base">
          {subtitle}
        </span>
      </span>
    </>
  )

  if (href.startsWith('http') || external) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {body}
      </a>
    )
  }
  return (
    <a href={href} className={className} download={download}>
      {body}
    </a>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl py-16 sm:py-20">
      <h2 className="text-center font-display text-4xl tracking-[0.12em] text-white sm:text-5xl">
        LET&apos;S TALK
      </h2>
      <div
        className="mx-auto mt-3 h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent"
        aria-hidden
      />
      <p className="mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed text-muted sm:text-base">
        I&apos;d love to hear from you — whether it&apos;s about a project,
        opportunity, or just to say hello 👋
      </p>
      <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
        {profile.phone ? (
          <ContactCard
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            icon={IconPhone}
            title="Phone"
            subtitle={profile.phone}
          />
        ) : null}
        {profile.whatsapp ? (
          <ContactCard
            href={profile.whatsapp}
            icon={IconWhatsApp}
            title="WhatsApp"
            subtitle={`Chat with ${profile.shortName}`}
            external
          />
        ) : null}
        <ContactCard
          href={`mailto:${profile.email}`}
          icon={IconMail}
          title="Email"
          subtitle={profile.email}
        />
        <ContactCard
          href={profile.resumeUrl}
          icon={IconDownload}
          title="Resume"
          subtitle="Download Resume"
          download
        />
      </div>
      <p className="mt-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted">
        Quick responses on WhatsApp &amp; Email
      </p>
    </section>
  )
}
