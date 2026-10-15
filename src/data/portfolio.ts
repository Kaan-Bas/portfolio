import { idcpImages, loods5Images, siemensImages, type ProjectImage } from './projectImages'

// Pas hier je persoonlijke gegevens en contactlinks aan. Lege links tonen een gelabelde placeholder.
export const profile = {
  name: 'Kaan Bas',
  headline: 'Technologie vertalen naar impact',
  introduction:
    'Afgestudeerd in HBO-ICT met een sterke interesse in AI & Data. Gedreven om technologie te vertalen naar praktische en slimme oplossingen.',
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
    introduction:
      'Tijdens mijn afstudeerstage bij Siemens ontwikkelde ik een LLM-workflow voor offerteverwerking, met Python-validatie en menselijke controle. Mijn focus ligt op praktische AI-toepassingen.',
    workDescription: 'LLM-extractie, procesautomatisering en gebruikersondersteuning met AI.',
  },
  {
    id: 'data',
    title: 'Data & Machine Learning',
    introduction:
      'Tijdens mijn AI Engineering-minor analyseerde ik historische storingsdata en ontwikkelde ik een classificatiemodel voor Waternet. Bij IDCP werkte ik aan een hybride aanbevelingssysteem in Python.',
    workDescription: 'Datavoorbereiding, analyse, classificatie en aanbevelingssystemen in Python.',
  },
  {
    id: 'software',
    title: 'Software Engineering',
    introduction:
      'Afgestudeerd in HBO-ICT: Software Engineering. Tijdens mijn stage bij Endeavour maakte ik deel uit van het team achter de Loods 5-webshop. Ik werkte aan frontend- en backendontwikkeling, API-endpoints en database- en CMS-koppelingen.',
    workDescription:
      'Frontend- en backendontwikkeling, API-endpoints en database- en CMS-koppelingen, toegepast aan de Loods 5-webshop.',
  },
] as const

export const pillars = [
  {
    id: 'ai',
    number: '01',
    title: 'AI Engineering',
    description:
      'Generatieve AI en AI-agents toepassen om informatie te verwerken en processen te automatiseren.',
    linkLabel: 'Bekijk AI-projecten',
  },
  {
    id: 'software',
    number: '02',
    title: 'Software Engineering',
    description:
      'Front-end- en back-endontwikkeling, API-integraties en CI/CD voor het bouwen van applicaties.',
    linkLabel: 'Bekijk softwareervaring',
  },
  {
    id: 'data',
    number: '03',
    title: 'Data & Machine Learning',
    description:
      'Werken met databases, data verwerken en analyseren, en machine learning toepassen.',
    linkLabel: 'Bekijk dataprojecten',
  },
] as const

export interface Project {
  slug: string
  organization: string
  title: string
  context: string
  projectType: 'Minorproject' | 'Stageproject'
  description: string
  images?: readonly ProjectImage[]
  tags: string[]
  previewTags: string[]
  focusAreas: FocusArea[]
  topics: string[]
  visual?: 'recommendation' | 'water'
  overviewTitle: string
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
  images: siemensImages,
}

export const endeavourProject: Project = {
  slug: 'loods5-webshop',
  organization: 'Endeavour',
  title: 'Loods 5-webshop',
  projectType: 'Stageproject',
  context: 'Software Developer · Stage · 2024–2025',
  description:
    'Als onderdeel van het team bij Endeavour werkte ik aan de Loods 5-webshop. Mijn stagewerk omvatte frontend- en backendontwikkeling, API-endpoints en het koppelen van database- en CMS-data aan de frontend.',
  images: loods5Images,
  tags: ['Frontend', 'Backend', 'REST APIs', 'Database / CMS'],
  previewTags: ['Frontend', 'Backend', 'REST APIs', 'Database / CMS'],
  focusAreas: ['software'],
  topics: ['Frontend', 'Backend', 'API-endpoints'],
  overviewTitle: 'Bijdragen aan de Loods 5-webshop in een team.',
  overview:
    'Tijdens mijn stage bij Endeavour werkte ik als Software Developer mee aan de Loods 5-webshop. Ik maakte deel uit van het team en werkte aan frontend- en backendontwikkeling, API-endpoints en de koppeling van database- en CMS-data aan de frontend.',
  contributions: [
    {
      title: 'Frontend- en backendontwikkeling',
      description:
        'Bijgedragen aan de webshopontwikkeling aan zowel de frontend- als de backendkant.',
    },
    {
      title: 'API-endpoints',
      description: 'API-endpoints ontwikkeld tijdens mijn stage bij Endeavour.',
    },
    {
      title: 'Database- en CMS-koppelingen',
      description: 'Database- en CMS-data gekoppeld aan de frontend.',
    },
  ],
  takeaway:
    'Dit project laat zien hoe ik als onderdeel van een team werkte aan frontend, backend, API-endpoints en koppelingen tussen database- en CMS-data en de frontend.',
}

export const projects: Project[] = [
  {
    slug: 'idcp-chatbot-recommendation',
    organization: 'IDCP',
    images: idcpImages,
    title: 'LLM-chatbot & hybride aanbevelingssysteem',
    projectType: 'Minorproject',
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
    overviewTitle: 'Gebruikersondersteuning en aanbevelingen verbinden.',
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
    projectType: 'Minorproject',
    context: 'Minor Data Driven Business – AI Engineering',
    description:
      'Data over waterinfrastructuur voorbereid en geanalyseerd en een classificatiemodel ontwikkeld in Python/scikit-learn om leidingstoringen te voorspellen op basis van historische storingsdata.',
    tags: ['Python', 'pandas', 'scikit-learn', 'Machine Learning', 'Data-analyse', 'Classificatie'],
    focusAreas: ['data'],
    topics: ['Data-analyse', 'Classificatie'],
    previewTags: ['Python', 'scikit-learn', 'Data-analyse'],
    visual: 'water',
    overviewTitle: 'Van historische data naar het voorspellen van storingen.',
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
  endeavourProject,
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
    description: endeavourProject.description,
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
