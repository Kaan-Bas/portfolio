// Pas hier je persoonlijke gegevens en contactlinks aan. Lege links tonen een gelabelde placeholder.
export const profile = {
  name: 'Kaan Bas',
  headline: {
    firstLine: 'Praktische oplossingen bouwen',
    secondLine: 'met ',
    emphasis: 'AI, software & data.',
  },
  introduction:
    'Recent afgestudeerd in HBO-ICT: Software Engineering aan de Hogeschool van Amsterdam, met praktijkervaring in AI Engineering, machine learning, data en softwareontwikkeling.',
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

export const pillars = [
  {
    id: 'ai',
    number: '01',
    title: 'AI Engineering',
    description: 'Informatie interpreteren. Praktisch werk automatiseren.',
    skills: ['LLMs', 'AI-agents', 'Prompt Engineering', 'Automatisering', 'Human-in-the-Loop'],
  },
  {
    id: 'software',
    number: '02',
    title: 'Software Engineering',
    description: 'Technische ideeën omzetten in bruikbare applicaties.',
    skills: ['Python', 'Java', 'JavaScript', 'REST APIs', 'Git / CI/CD', 'Applicatieontwikkeling'],
  },
  {
    id: 'data',
    number: '03',
    title: 'Data & Machine Learning',
    description: 'Patronen vinden. Data structureren en ervan leren.',
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
  areas: string[]
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
  areas: ['AI Engineering', 'Software', 'Proces- en dataverwerking'],
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
    areas: ['AI Engineering', 'Data & Machine Learning'],
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
        title: 'AI en data verbinden',
        description:
          'Data over gebruikers, interesses en content verwerkt voor gebruik binnen het aanbevelingssysteem en de chatbot.',
      },
    ],
    takeaway:
      'Een project op het snijvlak van AI en data: informatie over gebruikers en content toepassen in zowel een chatbot als een aanbevelingssysteem.',
  },
  {
    slug: 'waternet-pipe-failure-prediction',
    organization: 'Waternet',
    title: 'Voorspellen van leidingstoringen',
    context: 'Minor Data Driven Business – AI Engineering',
    description:
      'Data over waterinfrastructuur voorbereid en geanalyseerd en een classificatiemodel ontwikkeld in Python/scikit-learn om leidingstoringen te voorspellen op basis van historische storingsdata.',
    tags: ['Python', 'pandas', 'scikit-learn', 'Machine Learning', 'Data-analyse', 'Classificatie'],
    areas: ['Data & Machine Learning'],
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
      'Een praktisch project met data en machine learning, waarin datavoorbereiding en analyse samenkwamen in een classificatiemodel voor een infrastructuurvraagstuk.',
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
    title: 'AI & machine learning',
    skills: [
      'Large Language Models',
      'AI-agents',
      'Prompt Engineering',
      'Machine Learning',
      'Human-in-the-Loop',
      'Modelevaluatie',
    ],
  },
  {
    area: 'software',
    title: 'Softwareontwikkeling',
    skills: ['Python', 'Java', 'JavaScript', 'REST APIs', 'JSON', 'Git', 'GitLab CI/CD'],
  },
  {
    area: 'data',
    title: 'Data',
    skills: ['SQL', 'NoSQL', 'pandas', 'NumPy', 'scikit-learn', 'Data-analyse', 'Power BI'],
  },
  {
    area: 'automation',
    title: 'Automatisering & werkwijzen',
    skills: ['Power Automate', 'Agile / Scrum'],
  },
]

export const about = [
  'Ik ben recent afgestudeerd in HBO-ICT: Software Engineering aan de Hogeschool van Amsterdam. Tijdens mijn studie groeide mijn interesse in AI en data. Daarom volgde ik de minor Data Driven Business – AI Engineering.',
  'Ik vind het interessant om te begrijpen hoe een proces werkt, te onderzoeken wat technologie kan verbeteren en dat vervolgens om te zetten in een praktische oplossing. Ik leer graag nieuwe technologieën en werk het liefst op het snijvlak van AI, software en data, met een bijzondere interesse in toegepaste AI en automatisering.',
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
