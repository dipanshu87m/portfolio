export const profile = {
  name: 'Dipanshu Barfa',
  shortName: 'Dipanshu',
  imageUrl: null,
  title: 'Software Engineer | Java | Spring Boot | Microservices',
  tagline:
    'I build secure, scalable payment platforms and microservices — from design and APIs to deployment — with a focus on clean code and strong security.',
  email: 'dipanshubarfa@gmail.com',
  phone: '',
  whatsapp: '',
  github: 'https://github.com/dipanshubarfa',
  linkedin: 'https://linkedin.com/in/dipanshu-barfa',
  // Works on GitHub Pages project sites (subpath) and local dev
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
}

export const about =
  "I'm Dipanshu Barfa. With 3.7+ years as a Software Engineer, I focus on secure, scalable payment systems and multi-tenant SaaS platforms. My work spans PCI DSS–aligned environments, NFC-based wallet flows, and hardened backend APIs using Keycloak, AES encryption, SSL/TLS, microservices, API gateways, HMAC authentication, Thales Payshield HSM, and role-based access control. I work primarily in Java and J2EE with REST APIs, and I care about clean code, robust security, and owning features end-to-end from analysis to deployment."

export const workedWith = [
  'ClickUp',
  'Dropbox',
  'PAYCHEX',
  'elastic',
  'stripe',
]

export const skills = [
  { name: 'Java', abbr: 'Ja' },
  { name: 'Spring Boot', abbr: 'SB' },
  { name: 'Spring MVC', abbr: 'MVC' },
  { name: 'Spring Core', abbr: 'SC' },
  { name: 'Microservices', abbr: 'µS' },
  { name: 'Hibernate', abbr: 'Hb' },
  { name: 'JPA', abbr: 'JPA' },
  { name: 'Struts', abbr: 'St' },
  { name: 'Apache Kafka', abbr: 'Kf' },
  { name: 'Maven', abbr: 'Mv' },
  { name: 'PostgreSQL', abbr: 'Pg' },
  { name: 'MySQL', abbr: 'SQL' },
  { name: 'Docker', abbr: 'Dk' },
  { name: 'Jenkins', abbr: 'Jk' },
  { name: 'Eclipse', abbr: 'Ec' },
  { name: 'Tomcat', abbr: 'Tc' },
  { name: 'Git', abbr: 'Gt' },
  { name: 'JUnit', abbr: 'JU' },
  { name: 'SonarQube', abbr: 'SQ' },
  { name: 'Thales Payshield HSM', abbr: 'HSM' },
  { name: 'AES', abbr: 'AES' },
  { name: 'TDES', abbr: '3DES' },
  { name: 'SSL', abbr: 'SSL' },
  { name: 'TLS', abbr: 'TLS' },
  { name: 'HCE', abbr: 'HCE' },
]

export const projects = [
  {
    title: 'Payment Middleware Platform',
    description:
      'Middleware for SPOS terminals using AES cryptography, integrating with backend switches via TDES. Integrates with TMS for key management and Thales HSM for derivation, storage, translation, and MAC verification.',
    tech: [
      'Java',
      'Spring Boot',
      'JPA',
      'REST',
      'PostgreSQL',
      'Thales Payshield HSM',
    ],
    bullets: [
      'Built backend APIs and product features for terminal and switch flows.',
      'Implemented DUKPT with Thales Payshield 10K HSM.',
      'Integrated merchant onboarding and switch systems; owned E2E testing.',
      'Resolved Sonar findings and QA-reported defects.',
    ],
  },
  {
    title: 'POS Billing System',
    description:
      'POS stack with POS Lib and POS Controller: discovery, auto-reconnect, retries, and transaction processing, integrated via POS Bridge with payment applications.',
    tech: ['Java 8', 'Spring', 'Web Services', 'JavaFX'],
    bullets: [
      'Requirements analysis and feature delivery across stack layers.',
      'Designed and implemented JavaFX UI and backend services.',
      'Maintained Sonar hygiene and overall code quality.',
    ],
  },
  {
    title: 'Loyalty Platform',
    description:
      'Enterprise microservices platform for user management, integrated with issuance and acquiring for earn/burn and redemption, plus responsive dashboards and admin modules.',
    tech: ['Java', 'Spring Boot', 'REST', 'React.js', 'Microservices'],
    bullets: [
      'Participated in requirements and technical design.',
      'Implemented REST APIs and unit tests; performed code reviews.',
    ],
  },
  {
    title: 'Terminal Management System',
    description:
      'Microservices platform integrating issuance and acquiring; REST APIs and Hibernate-backed services for transaction processing with a global processor for OLTP.',
    tech: ['Java', 'Spring Boot', 'Hibernate', 'REST', 'Microservices'],
    bullets: [
      'Hibernate-based services for data processing.',
      'RESTful APIs for transaction flows and processor integration.',
    ],
  },
]
