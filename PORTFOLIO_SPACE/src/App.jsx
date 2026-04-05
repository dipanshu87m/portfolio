import { Navigation } from './components/Navigation'
import { SiteBackground } from './components/SiteBackground'
import { HeroSection } from './components/HeroSection'
import { WorkedWith } from './components/WorkedWith'
import { AboutSection } from './components/AboutSection'
import { SkillsSection } from './components/SkillsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ContactSection } from './components/ContactSection'
import { FooterBar } from './components/FooterBar'

export default function App() {
  return (
    <div className="relative min-h-svh text-ink">
      <SiteBackground />
      <div className="relative z-10">
        <Navigation />
        <main className="relative mx-auto max-w-7xl pb-[max(1rem,env(safe-area-inset-bottom))] pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:pl-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))]">
          <HeroSection />
          <WorkedWith />
          <AboutSection />
          <SkillsSection />

          <div
            className="my-6 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent sm:my-10"
            aria-hidden
          />

          <ProjectsSection />
          <ContactSection />
          <FooterBar />
        </main>
      </div>
    </div>
  )
}
