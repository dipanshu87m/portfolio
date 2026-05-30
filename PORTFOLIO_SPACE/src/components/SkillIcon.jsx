import { RiMicrosoftFill } from 'react-icons/ri'
import { SiMeta, SiSonarqubecloud } from 'react-icons/si'
import { TbApi, TbBolt, TbBrain, TbLayersIntersect, TbShieldLock } from 'react-icons/tb'

function CdnBrandIcon({ slug, color, className = 'h-7 w-7' }) {
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/${color.replace('#', '')}`}
      alt=""
      className={className}
      loading="lazy"
      decoding="async"
    />
  )
}

function ReactBrandIcon({ Icon, color, className = 'h-7 w-7' }) {
  return <Icon className={className} style={{ color }} aria-hidden />
}

/** @type {Record<string, { icons: { kind: 'cdn', slug: string, color: string, size?: string } | { kind: 'react', Icon: import('react').ComponentType<{ className?: string; style?: React.CSSProperties }>, color: string, size?: string }[], glow: string }>} */
export const skillVisuals = {
  'Java 21': {
    icons: [{ kind: 'cdn', slug: 'openjdk', color: '#ED8B00' }],
    glow: 'rgba(237, 139, 0, 0.35)',
  },
  'Spring Boot 3.4': {
    icons: [{ kind: 'cdn', slug: 'springboot', color: '#6DB33F' }],
    glow: 'rgba(109, 179, 63, 0.35)',
  },
  'Spring AI': {
    icons: [{ kind: 'cdn', slug: 'spring', color: '#6DB33F' }],
    glow: 'rgba(109, 179, 63, 0.35)',
  },
  'REST APIs': {
    icons: [{ kind: 'react', Icon: TbApi, color: '#38BDF8' }],
    glow: 'rgba(56, 189, 248, 0.35)',
  },
  AOP: {
    icons: [{ kind: 'react', Icon: TbLayersIntersect, color: '#A78BFA' }],
    glow: 'rgba(167, 139, 250, 0.35)',
  },
  'Hibernate / JPA': {
    icons: [{ kind: 'cdn', slug: 'hibernate', color: '#BCAE79' }],
    glow: 'rgba(188, 174, 121, 0.35)',
  },
  'Feign Client': {
    icons: [{ kind: 'cdn', slug: 'spring', color: '#6DB33F' }],
    glow: 'rgba(109, 179, 63, 0.35)',
  },
  'Groq / Llama 3.3': {
    icons: [
      { kind: 'react', Icon: TbBolt, color: '#F55036', size: 'h-5 w-5' },
      { kind: 'react', Icon: SiMeta, color: '#0081FB', size: 'h-5 w-5' },
    ],
    glow: 'rgba(245, 80, 54, 0.35)',
  },
  'RAG Architecture': {
    icons: [{ kind: 'react', Icon: TbBrain, color: '#10A37F' }],
    glow: 'rgba(16, 163, 127, 0.35)',
  },
  'Open Policy Agent': {
    icons: [{ kind: 'react', Icon: TbShieldLock, color: '#00D4AA' }],
    glow: 'rgba(0, 212, 170, 0.35)',
  },
  MariaDB: {
    icons: [{ kind: 'cdn', slug: 'mariadb', color: '#003545' }],
    glow: 'rgba(0, 181, 226, 0.35)',
  },
  PostgreSQL: {
    icons: [{ kind: 'cdn', slug: 'postgresql', color: '#4169E1' }],
    glow: 'rgba(65, 105, 225, 0.35)',
  },
  Redis: {
    icons: [{ kind: 'cdn', slug: 'redis', color: '#FF4438' }],
    glow: 'rgba(255, 68, 56, 0.35)',
  },
  'Apache Kafka': {
    icons: [{ kind: 'cdn', slug: 'apachekafka', color: '#FFFFFF' }],
    glow: 'rgba(255, 255, 255, 0.2)',
  },
  'Microsoft Graph': {
    icons: [{ kind: 'react', Icon: RiMicrosoftFill, color: '#00A4EF' }],
    glow: 'rgba(0, 164, 239, 0.35)',
  },
  'Gmail API': {
    icons: [{ kind: 'cdn', slug: 'gmail', color: '#EA4335' }],
    glow: 'rgba(234, 67, 53, 0.35)',
  },
  Keycloak: {
    icons: [{ kind: 'cdn', slug: 'keycloak', color: '#00B1EB' }],
    glow: 'rgba(0, 177, 235, 0.35)',
  },
  Docker: {
    icons: [{ kind: 'cdn', slug: 'docker', color: '#2496ED' }],
    glow: 'rgba(36, 150, 237, 0.35)',
  },
  Kubernetes: {
    icons: [{ kind: 'cdn', slug: 'kubernetes', color: '#326CE5' }],
    glow: 'rgba(50, 108, 229, 0.35)',
  },
  'Helm / ArgoCD': {
    icons: [
      { kind: 'cdn', slug: 'helm', color: '#0F1689', size: 'h-5 w-5' },
      { kind: 'cdn', slug: 'argo', color: '#EF7B4D', size: 'h-5 w-5' },
    ],
    glow: 'rgba(239, 123, 77, 0.35)',
  },
  SonarQube: {
    icons: [{ kind: 'react', Icon: SiSonarqubecloud, color: '#4479A1' }],
    glow: 'rgba(68, 121, 161, 0.35)',
  },
  'Trivy / Snyk': {
    icons: [
      { kind: 'cdn', slug: 'trivy', color: '#00CAFE', size: 'h-5 w-5' },
      { kind: 'cdn', slug: 'snyk', color: '#4C4A73', size: 'h-5 w-5' },
    ],
    glow: 'rgba(0, 202, 254, 0.35)',
  },
  SkyWalking: {
    icons: [{ kind: 'cdn', slug: 'apache', color: '#D22128' }],
    glow: 'rgba(210, 33, 40, 0.35)',
  },
  Maven: {
    icons: [{ kind: 'cdn', slug: 'apachemaven', color: '#C71A36' }],
    glow: 'rgba(199, 26, 54, 0.35)',
  },
}

function SkillGraphic({ icon, className = 'h-7 w-7' }) {
  const sizeClass = icon.size ?? className
  if (icon.kind === 'cdn') {
    return (
      <CdnBrandIcon slug={icon.slug} color={icon.color} className={sizeClass} />
    )
  }
  return (
    <ReactBrandIcon Icon={icon.Icon} color={icon.color} className={sizeClass} />
  )
}

export function SkillIconBadge({ name }) {
  const visual = skillVisuals[name]
  if (!visual) return null

  const isDual = visual.icons.length > 1
  const primary = visual.icons[0].color
  const iconClass = isDual ? 'h-5 w-5' : 'h-7 w-7'

  return (
    <div
      className="relative flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 ease-out group-hover:scale-110"
      style={{
        background: `linear-gradient(145deg, color-mix(in srgb, ${primary} 22%, transparent), color-mix(in srgb, ${primary} 8%, transparent))`,
        boxShadow: `0 0 0 1px color-mix(in srgb, ${primary} 28%, transparent), 0 8px 24px color-mix(in srgb, ${visual.glow} 55%, transparent)`,
      }}
    >
      <div
        className={`flex items-center justify-center ${isDual ? 'gap-1' : ''}`}
        aria-hidden
      >
        {visual.icons.map((icon) => (
          <SkillGraphic
            key={icon.kind === 'cdn' ? icon.slug : icon.color}
            icon={icon}
            className={iconClass}
          />
        ))}
      </div>
    </div>
  )
}
