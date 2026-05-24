export const profile = {
  name: 'Dipanshu Barfa',
  shortName: 'Dipanshu',
  imageUrl: null,
  title: 'Backend Engineer · Java · Spring Boot · Spring AI · LLM Integrations',
  tagline:
    'I build enterprise-grade backend systems and AI-powered features — from REST APIs and async Kafka pipelines to LLM integrations and Policy-as-Code — with a focus on shipping production-ready software in fast-moving teams.',
  email: 'barfadipanshu87@gmail.com',
  phone: '+91-8349487113',
  whatsapp: '',
  github: 'https://github.com/dipanshu87m',
  linkedin: 'https://linkedin.com/in/dipanshumbarfa',
  // Works on GitHub Pages project sites (subpath) and local dev
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
}

export const about =
  "I'm Dipanshu Barfa, a Backend Engineer based in Indore, India, with ~2 years of product-based startup experience at VisionWaves Technologies. I build enterprise-grade systems with Java 21 and Spring Boot 3 — shipping AI-powered email intelligence used across web, mobile, and voice clients, and designing a Policy-as-Code platform with Open Policy Agent for centralized RBAC/ABAC authorization at scale. I'm hands-on with LLM pipelines (Llama 3.3 / Groq), async Kafka architectures, multi-provider integrations (Microsoft Graph, Gmail, Exchange EWS), and DevSecOps tooling (Docker, Kubernetes, Trivy, Snyk). I own features end-to-end, mentor junior developers, and contribute to architectural decisions in fast-moving teams."

export const workedWith = [
  'VisionWaves',
  'Telus',
  'Aramco',
  'HumainOS',
  'ATLAS DataOps',
]

export const skills = [
  { name: 'Java 21', abbr: 'J21' },
  { name: 'Spring Boot 3.4', abbr: 'SB3' },
  { name: 'Spring AI', abbr: 'SAI' },
  { name: 'REST APIs', abbr: 'REST' },
  { name: 'AOP', abbr: 'AOP' },
  { name: 'Hibernate / JPA', abbr: 'JPA' },
  { name: 'Feign Client', abbr: 'Feign' },
  { name: 'Groq / Llama 3.3', abbr: 'LLM' },
  { name: 'RAG Architecture', abbr: 'RAG' },
  { name: 'Open Policy Agent', abbr: 'OPA' },
  { name: 'MariaDB', abbr: 'Maria' },
  { name: 'PostgreSQL', abbr: 'Pg' },
  { name: 'Redis', abbr: 'Redis' },
  { name: 'Apache Kafka', abbr: 'Kf' },
  { name: 'Microsoft Graph', abbr: 'Graph' },
  { name: 'Gmail API', abbr: 'Gmail' },
  { name: 'Keycloak', abbr: 'KC' },
  { name: 'Docker', abbr: 'Dk' },
  { name: 'Kubernetes', abbr: 'K8s' },
  { name: 'Helm / ArgoCD', abbr: 'Helm' },
  { name: 'SonarQube', abbr: 'SQ' },
  { name: 'Trivy / Snyk', abbr: 'Sec' },
  { name: 'SkyWalking', abbr: 'APM' },
  { name: 'Maven', abbr: 'Mv' },
]

export const projects = [
  {
    title: 'Email Singularity — AI Email Intelligence',
    description:
      'Production AI email platform powering mail summaries, day-overview dashboards, inbox prioritization, and conversation threading — enabling users to triage inboxes without reading every email across Office 365, on-prem Exchange, and Google Workspace.',
    tech: [
      'Java 21',
      'Spring Boot 3.4',
      'Spring AI',
      'Kafka',
      'Redis',
      'MariaDB',
      'Groq / Llama 3.3',
    ],
    bullets: [
      'Built 15+ production REST APIs for mail summary, prioritization, and thread aggregation.',
      'Engineered multi-step LLM pipeline for categorization, tone detection, priority scoring, and action-item extraction across 25+ prompts.',
      'Implemented config-driven strategy pattern for Microsoft Graph, EWS, and Gmail multi-provider sync.',
      'Built Kafka async pipeline decoupling ingestion from AI enrichment; integrated S3 + RAG for attachment Q&A.',
    ],
  },
  {
    title: 'OPA Policy Manager & Governance SDK',
    description:
      'Enterprise Policy-as-Code platform with a reusable Governance SDK enabling Spring Boot microservices to enforce OPA-based authorization via annotations — adopted by 10+ service teams with tamper-evident compliance audit trails.',
    tech: [
      'Java 21',
      'Spring Boot',
      'OPA / Rego',
      'Kafka',
      'MySQL',
      'Docker',
      'Kubernetes',
    ],
    bullets: [
      'Developed Governance SDK with @OpaAuthorize annotations and fail-closed 403 handling for consuming services.',
      'Built AOP interceptor forwarding HTTP context to OPA for real-time policy evaluation before business logic.',
      'Implemented Kafka Decision Records capturing OPA input/output and entity snapshots for compliance audits.',
      'Contributed to Policy Manager APIs: lifecycle management, OPA bundle generation, and multi-tenant dataset isolation.',
    ],
  },
  {
    title: 'Talk to Data — AI Conversational DataOps',
    description:
      'Enterprise conversational AI layer on Visionwaves\' ATLAS DataOps platform — letting data teams query pipelines, databases, Spark jobs, NiFi flows, and metadata in plain English, turning natural language into SQL, Spark code, and operational insights.',
    tech: [
      'Java 21',
      'Spring Boot',
      'Spring AI',
      'Redis',
      'MariaDB',
      'MCP Protocol',
      'WebSocket',
    ],
    bullets: [
      'Designed NL-to-SQL Ops Agent with read-only DB access, SQL validation, and table whitelisting for secure production queries.',
      'Implemented 4-level Redis vector caching (exact + semantic + embedding + SQL results), cutting LLM API costs by 60–80%.',
      'Integrated MCP with NiFi, Spark History, and OpenMetadata for unified conversational tooling across 6 chat domains.',
      'Deployed production-ready service on Kubernetes with Docker, Helm, Vault secrets, and Spring Actuator monitoring.',
    ],
  },
  {
    title: 'Enttribe One Platform — Multi-Tenant SaaS',
    description:
      'Enterprise-grade multi-tenant SaaS foundation powering identity, RBAC, org management, notifications, and configuration for large B2B deployments — the shared utility layer for products serving clients including Telus, Aramco, and HumainOS.',
    tech: [
      'Java 21',
      'Spring Boot 3',
      'Keycloak',
      'Redis',
      'Kafka',
      'MariaDB',
      'Angular / NX',
    ],
    bullets: [
      'Developed REST APIs covering user management, RBAC, tenant configuration, notifications, and org/geography management.',
      'Implemented multi-tenant data isolation using tenant-scoped entities and AOP-based customer filtering with Liquibase migrations.',
      'Delivered multi-channel notification infrastructure (email, SMS, push/FCM, WhatsApp) with templates and device registration.',
      'Supported production deployments via Docker, Helm charts, Jenkins onboarding pipelines, and Istio on Kubernetes.',
    ],
  },
]
