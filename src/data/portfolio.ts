// Pas hier je persoonlijke gegevens en contactlinks aan. Lege links tonen een gelabelde placeholder.
export const profile = {
  name: 'Kaan Bas',
  headline: 'Toegepaste AI & machine learning.',
  introduction:
    'Recent afgestudeerd in HBO-ICT: Software Engineering. Ervaring met LLM-toepassingen bij Siemens en machine-learningprojecten tijdens de minor Data Driven Business – AI Engineering.',
  email: 'kaan.bas762@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kaan-bas-62225a420',
  github: 'https://github.com/Kaan-Bas',
  siteUrl: 'https://kaan-bas-engineering.peachybow5.chatgpt.site',
}

export const navigation = [
  { label: 'Projecten', id: 'work' },
  { label: 'Over mij', id: 'about' },
  { label: 'Ervaring', id: 'experience' },
  { label: 'Vaardigheden', id: 'skills' },
  { label: 'Contact', id: 'contact' },
] as const

export type FocusArea = 'ai' | 'data' | 'software'
export type FocusFilter = 'all' | FocusArea

export function focusUrl(focus: FocusFilter, section: (typeof navigation)[number]['id'] = 'work') {
  return `/${focus === 'all' ? '' : `?focus=${focus}`}#${section}`
}

export function projectUrl(slug: string, focus: FocusFilter) {
  return `/projects/${slug}${focus === 'all' ? '' : `?focus=${focus}`}`
}

// De vakgebiedkeuze bepaalt welke projecten, ervaring en vaardigheden zichtbaar zijn.
export const focusAreas = [
  {
    id: 'ai',
    title: 'AI Engineering',
    summary: 'LLM-toepassingen & procesautomatisering',
    proof: 'Siemens · offerteautomatisering',
    introduction:
      'Tijdens mijn afstudeerstage bij Siemens ontwikkelde ik een LLM-workflow voor offerteverwerking, met Python-validatie en menselijke controle. Mijn focus ligt op praktische AI-toepassingen.',
    workDescription: 'LLM-extractie, procesautomatisering en gebruikersondersteuning met AI.',
  },
  {
    id: 'data',
    title: 'Data & Machine Learning',
    summary: 'Data-analyse & voorspellende modellen',
    proof: 'Waternet · leidingstoringen voorspellen',
    introduction:
      'Tijdens mijn AI Engineering-minor analyseerde ik historische storingsdata en ontwikkelde ik een classificatiemodel voor Waternet. Bij IDCP werkte ik aan een hybride aanbevelingssysteem in Python.',
    workDescription: 'Datavoorbereiding, analyse, classificatie en aanbevelingssystemen in Python.',
  },
  {
    id: 'software',
    title: 'Software Engineering',
    summary: 'Frontend, backend & API-ontwikkeling',
    proof: 'Endeavour · softwareontwikkelstage',
    introduction:
      'Afgestudeerd in HBO-ICT: Software Engineering. Tijdens mijn stage bij Endeavour werkte ik aan frontend- en backendontwikkeling, API-endpoints en de koppeling van database- en CMS-data aan de frontend.',
    workDescription:
      'Praktijkervaring met frontend, backend, API-endpoints en database- en CMS-koppelingen.',
  },
] as const

export const pillars = [
  {
    id: 'ai',
    number: '01',
    title: 'AI Engineering',
    description:
      'LLM-extractie, validatie en procesautomatisering tijdens mijn afstudeerstage bij Siemens.',
    linkLabel: 'Bekijk AI-projecten',
    skills: ['LLMs', 'AI-agents', 'Prompt Engineering', 'Automatisering', 'Human-in-the-Loop'],
  },
  {
    id: 'software',
    number: '02',
    title: 'Software Engineering',
    description:
      'Frontend- en backendontwikkeling, API-endpoints en database- en CMS-koppelingen bij Endeavour.',
    linkLabel: 'Bekijk softwareervaring',
    skills: ['Python', 'Java', 'JavaScript', 'REST APIs', 'Git / CI/CD', 'Applicatieontwikkeling'],
  },
  {
    id: 'data',
    number: '03',
    title: 'Data & Machine Learning',
    description:
      'Historische storingsdata analyseren en een classificatiemodel ontwikkelen voor Waternet.',
    linkLabel: 'Bekijk dataprojecten',
    skills: ['SQL', 'pandas', 'NumPy', 'scikit-learn', 'Data-analyse', 'Machine Learning'],
  },
] as const

export interface Project {
  slug: string
  organization: string
  title: string
  context: string
  description: string
  tags: string[]
  previewTags: string[]
  focusAreas: FocusArea[]
  topics: string[]
  visual: 'recommendation' | 'water'
  overview: string
  contributions: { title: string; description: string }[]
  takeaway: string
}

export const featuredProject = {
  slug: 'siemens-ai-quotation-automation',
  organization: 'Siemens Buildings',
  title: 'Offertes automatiseren met AI',
  context: 'Afstudeerstage — AI Engineer',
  description:
    'Een Python/LLM-pipeline ontworpen en gebouwd die ongestructureerde klantaanvragen verwerkt, omzet naar gestructureerde informatie en de gegenereerde uitvoer valideert aan de hand van betrouwbare brondata.',
  tags: [
    'Python',
    'LLMs',
    'Prompt Engineering',
    'Gestructureerde JSON',
    'Validatie',
    'Human-in-the-Loop',
    'Procesautomatisering',
  ],
  previewTags: ['Python', 'LLMs', 'Validatie', 'Human-in-the-Loop'],
  topics: ['LLM-extractie', 'Procesautomatisering', 'Validatie'],
  metric: '68,8%',
}

export const projects: Project[] = [
  {
    slug: 'idcp-chatbot-recommendation',
    organization: 'IDCP',
    title: 'LLM-chatbot & hybride aanbevelingssysteem',
    context: 'Minor Data Driven Business – AI Engineering',
    description:
      'Binnen een Agile/Scrum-team gewerkt aan een LLM-chatbot voor gebruikersondersteuning en een hybride aanbevelingssysteem ontwikkeld met machine learning in Python.',
    tags: [
      'Python',
      'LLMs',
      'Machine Learning',
      'Aanbevelingssystemen',
      'Dataverwerking',
      'Agile/Scrum',
    ],
    focusAreas: ['ai', 'data'],
    topics: ['LLM-toepassingen', 'Aanbevelingssystemen'],
    previewTags: ['Python', 'LLMs', 'Machine Learning'],
    visual: 'recommendation',
    overview:
      'Dit minorproject combineerde een AI-chatbot met aanbevelingen op basis van machine learning. Data over gebruikers, hun interesses en beschikbare content werd verwerkt en gebruikt binnen het aanbevelingssysteem en de chatbot.',
    contributions: [
      {
        title: 'Gebruikersondersteuning met een LLM',
        description:
          'Binnen een Agile/Scrum-team gewerkt aan een chatbot die een LLM gebruikte voor gebruikersondersteuning.',
      },
      {
        title: 'Hybride aanbevelingen',
        description: 'Een hybride aanbevelingssysteem ontwikkeld met machine learning in Python.',
      },
      {
        title: 'Gebruikers- en contentdata verwerken',
        description:
          'Data over gebruikers, interesses en content verwerkt voor gebruik binnen het aanbevelingssysteem en de chatbot.',
      },
    ],
    takeaway:
      'Praktijkervaring met LLM-gebruikersondersteuning en een hybride aanbevelingssysteem op basis van gebruikersinteresses en content.',
  },
  {
    slug: 'waternet-pipe-failure-prediction',
    organization: 'Waternet',
    title: 'Voorspellen van leidingstoringen',
    context: 'Minor Data Driven Business – AI Engineering',
    description:
      'Data over waterinfrastructuur voorbereid en geanalyseerd en een classificatiemodel ontwikkeld in Python/scikit-learn om leidingstoringen te voorspellen op basis van historische storingsdata.',
    tags: ['Python', 'pandas', 'scikit-learn', 'Machine Learning', 'Data-analyse', 'Classificatie'],
    focusAreas: ['data'],
    topics: ['Data-analyse', 'Classificatie'],
    previewTags: ['Python', 'scikit-learn', 'Data-analyse'],
    visual: 'water',
    overview:
      'Dit project richtte zich op het voorspellen van leidingstoringen met historische storingsdata. Het werk combineerde de voorbereiding en analyse van data over waterinfrastructuur met de ontwikkeling van een classificatiemodel op basis van machine learning.',
    contributions: [
      {
        title: 'Datavoorbereiding',
        description:
          'Data over waterinfrastructuur voorbereid voor analyse en classificatie in Python.',
      },
      {
        title: 'Verkennende data-analyse',
        description: 'Historische storingsdata geanalyseerd met Python en pandas.',
      },
      {
        title: 'Storingen classificeren',
        description:
          'Een classificatiemodel ontwikkeld met scikit-learn om leidingstoringen te voorspellen op basis van historische storingsdata.',
      },
    ],
    takeaway:
      'Historische storingsdata voorbereiden, analyseren en gebruiken voor een classificatiemodel: de stappen van een praktisch machine-learningproject.',
  },
]

export const experience = [
  {
    company: 'Siemens',
    role: 'AI Engineer',
    type: 'Afstudeerstage',
    date: '2026',
    description:
      'Een bestaand offerteproces geanalyseerd en een AI-oplossing voor automatisering ontwikkeld die LLM-extractie, gestructureerde data en deterministische validatie combineert.',
  },
  {
    company: 'Endeavour',
    role: 'Software Developer',
    type: 'Stage',
    date: '2024–2025',
    description:
      'Gewerkt aan frontend- en backendontwikkeling, data uit een database/CMS gekoppeld aan de frontend en API-endpoints ontwikkeld.',
  },
]

export const education = {
  institution: 'Hogeschool van Amsterdam',
  degree: 'HBO-ICT: Software Engineering',
  period: '2020–2026',
  minor: 'Data Driven Business – AI Engineering',
  minorPeriod: '2025–2026',
}

export const skillGroups = [
  {
    area: 'ai',
    title: 'AI Engineering',
    skills: [
      'Python',
      'Large Language Models',
      'AI-agents',
      'Prompt Engineering',
      'JSON',
      'Human-in-the-Loop',
      'Modelevaluatie',
    ],
  },
  {
    area: 'software',
    title: 'Software Engineering',
    skills: ['Python', 'Java', 'JavaScript', 'REST APIs', 'JSON', 'Git', 'GitLab CI/CD'],
  },
  {
    area: 'data',
    title: 'Data & Machine Learning',
    skills: [
      'Python',
      'SQL',
      'NoSQL',
      'pandas',
      'NumPy',
      'scikit-learn',
      'Machine Learning',
      'Data-analyse',
      'Power BI',
    ],
  },
  {
    area: 'automation',
    title: 'Automatisering & werkwijzen',
    skills: ['Power Automate', 'Agile / Scrum'],
  },
]

export const about = [
  'Ik ben recent afgestudeerd in HBO-ICT: Software Engineering aan de Hogeschool van Amsterdam. Tijdens mijn studie groeide mijn interesse in AI en data. Daarom volgde ik de minor Data Driven Business – AI Engineering.',
  'Ik verdiep me graag in een proces of vraagstuk voordat ik aan een oplossing begin. Mijn grootste interesse ligt bij praktische AI-toepassingen, automatisering en machine learning. Ik leer graag nieuwe technologieën en zoek een startende functie waarin ik me gericht verder kan ontwikkelen.',
]

export const interests = [
  'Toegepaste AI',
  'Generatieve AI',
  'LLM-applicaties',
  'AI-agents',
  'Automatisering',
  'Software-integraties',
  'Machine learning',
  'Data-analyse',
]
