export const profile = {
  name: 'Dipanshu Barfa',
  shortName: 'Dipanshu',
  imageUrl: null,
  title: 'Backend Engineer | Java | Spring Boot | Spring AI',
  tagline:
    'Backend Engineer with 2 years of experience building production systems in Java and Spring Boot. I design REST APIs, AI-powered product features, event-driven microservices, and Policy-as-Code authorization for enterprise deployments.',
  email: 'barfadipanshu87@gmail.com',
  phone: '+91-8349487113',
  whatsapp: 'https://wa.me/918349487113',
  github: 'https://github.com/dipanshu87m',
  linkedin: 'https://linkedin.com/in/dipanshumbarfa',
  // Put your PDF at: public/resume.pdf — it will be served at /portfolio/resume.pdf
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
  resumeFileName: 'Dipanshu_Barfa_Resume_2026.pdf',
}

export const about =
  'I am Dipanshu Barfa, a Backend Engineer based in Indore, India, with 2 years of experience at VisionWaves Technologies, a product-based startup. I build enterprise-grade systems with Java and Spring Boot, including AI-powered email intelligence used across web, mobile, and voice clients, and a Policy-as-Code platform with Open Policy Agent for centralized RBAC and ABAC authorization at scale. My work spans LLM pipelines with Llama and Groq, asynchronous Kafka architectures, multi-provider integrations with Microsoft Graph, Gmail, and Exchange EWS, and DevSecOps practices with Docker, Kubernetes, Trivy, and Snyk. I own features end to end, mentor junior engineers, and contribute to architecture and delivery in agile teams.'

export const workedWith = [
  'Email Singularity',
  'One Platform',
  'Talk to Data',
  'OPA Policy Manager',
  'ATLAS DataOps',
]

export const skills = [
  { name: 'Java' },
  { name: 'Spring Boot' },
  { name: 'Spring AI' },
  { name: 'REST APIs' },
  { name: 'AOP' },
  { name: 'Hibernate / JPA' },
  { name: 'Feign Client' },
  { name: 'Groq / Llama' },
  { name: 'RAG Architecture' },
  { name: 'Open Policy Agent' },
  { name: 'MariaDB' },
  { name: 'PostgreSQL' },
  { name: 'Redis' },
  { name: 'Apache Kafka' },
  { name: 'Microsoft Graph' },
  { name: 'Gmail API' },
  { name: 'Keycloak' },
  { name: 'Docker' },
  { name: 'Kubernetes' },
  { name: 'Helm / ArgoCD' },
  { name: 'SonarQube' },
  { name: 'Trivy / Snyk' },
  { name: 'SkyWalking' },
  { name: 'Maven' },
]

export const projects = [
  {
    title: 'Email Singularity — AI Email Intelligence',
    description:
      'Production AI email intelligence platform that delivers mail summaries, day-overview dashboards, inbox prioritization, and conversation threading. Supports Office 365, on-premises Exchange, and Google Workspace through a unified multi-provider architecture.',
    tech: [
      'Java',
      'Spring Boot',
      'Spring AI',
      'Kafka',
      'Redis',
      'MariaDB',
      'Groq / Llama',
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
      'Enterprise Policy-as-Code platform with a reusable Governance SDK that enables Spring Boot microservices to enforce OPA-based authorization through annotations. Adopted by 10+ service teams with tamper-evident compliance audit trails.',
    tech: [
      'Java',
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
      'Conversational AI layer on the ATLAS DataOps platform that lets data teams query pipelines, databases, Spark jobs, NiFi flows, and metadata in natural language, returning validated SQL, Spark transformations, and operational insights.',
    tech: [
      'Java',
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
      'Enterprise multi-tenant SaaS foundation providing identity management, RBAC, organization administration, notifications, and tenant configuration. Serves as the shared platform layer for large B2B products deployed for enterprise clients including Telus, Aramco, and HumainOS.',
    tech: [
      'Java',
      'Spring Boot',
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
