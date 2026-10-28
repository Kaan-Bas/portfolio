import { folioImages, idcpImages, loods5Images, siemensImages, type ProjectImage } from './projectImages'

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
      'Generatieve AI, Retrieval-Augmented Generation (RAG) en AI-agents toepassen om informatie te verwerken en processen te automatiseren.',
    linkLabel: 'Bekijk AI-projecten',
  },
  {
    id: 'software',
    number: '02',
    title: 'Software Engineering',
    description:
      'Front-end- en back-endontwikkeling, API-integraties en CI/CD voor het bouwen van applicaties.',
    linkLabel: 'Bekijk softwareprojecten',
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

interface ProjectDetailItem {
  title: string
  description: string
}

export interface Project {
  slug: string
  organization: string
  cardLabel?: string
  title: string
  context: string
  projectType: 'Minorproject' | 'Stageproject' | 'Eigen project'
  description: string
  images?: readonly ProjectImage[]
  tags: string[]
  previewTags: string[]
  focusAreas: FocusArea[]
  topics: string[]
  visual?: 'recommendation' | 'water'
  overviewTitle: string
  overview: string
  contributions: ProjectDetailItem[]
  features?: string[]
  workflow?: { steps: ProjectDetailItem[]; caption: string }
  agents?: ProjectDetailItem[]
  agentWorkflow?: { steps: ProjectDetailItem[]; caption: string }
  techStack?: { title: string; technologies: string[] }[]
  testing?: { summary: string; note: string }
  considerations?: ProjectDetailItem[]
  takeaway: string
}

export const featuredProject = {
  slug: 'siemens-ai-quotation-automation',
  organization: 'Siemens Buildings',
  cardLabel: 'Siemens - afstudeerstagiair',
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
  focusAreas: ['ai'] as const,
  topics: ['LLM-extractie', 'Procesautomatisering', 'Validatie'],
  metric: '68,8%',
  images: siemensImages,
}

export const endeavourProject: Project = {
  slug: 'loods5-webshop',
  organization: 'Endeavour',
  cardLabel: 'Endeavour - stagiair',
  title: 'Loods 5-webshop',
  projectType: 'Stageproject',
  context: 'Software Developer · Stage · 2024–2025',
  description:
    'Als onderdeel van het team bij Endeavour werkte ik aan de Loods 5-webshop. Mijn stagewerk omvatte frontend- en backendontwikkeling, API-endpoints en het koppelen van database- en CMS-data aan de frontend.',
  images: loods5Images,
  tags: ['React', 'TypeScript', 'SCSS', 'PHP', 'Laravel', 'REST APIs', 'Strapi CMS', 'MySQL'],
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
  techStack: [
    { title: 'Frontend', technologies: ['React', 'TypeScript', 'SCSS'] },
    { title: 'Backend & API', technologies: ['PHP', 'Laravel', 'REST APIs'] },
    { title: 'CMS & database', technologies: ['Strapi CMS', 'MySQL'] },
  ],
  takeaway:
    'Dit project laat zien hoe ik als onderdeel van een team werkte aan frontend, backend, API-endpoints en koppelingen tussen database- en CMS-data en de frontend.',
}

export const projects: Project[] = [
  {
    slug: 'idcp-chatbot-recommendation',
    organization: 'IDCP',
    cardLabel: 'IDCP - MINOR',
    images: idcpImages,
    title: 'LLM-chatbot & hybride aanbevelingssysteem',
    projectType: 'Minorproject',
    context: 'Minor Data Driven Business – AI Engineering',
    description:
      'Binnen een Agile/Scrum-team gewerkt aan een LLM-chatbot voor gebruikersondersteuning en een hybride aanbevelingssysteem ontwikkeld met machine learning in Python.',
    tags: [
      'Python',
      'LLM',
      'Machine Learning',
      'Aanbevelingssystemen',
      'Dataverwerking',
      'Agile/Scrum',
    ],
    focusAreas: ['ai', 'data'],
    topics: ['LLM-toepassingen', 'Aanbevelingssystemen'],
    previewTags: ['Python', 'LLM', 'Machine Learning'],
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
    cardLabel: 'WATERNET - MINOR',
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
  {
    slug: 'folio-pdf-knowledge-assistant',
    images: folioImages,
    organization: 'Persoonlijk project',
    title: 'Folio',
    projectType: 'Eigen project',
    context: 'Persoonlijk full-stack AI-project',
    description:
      'Een Agentic AI & Document Intelligence Platform voor documentchat en vier gespecialiseerde AI-agents. RAG maakt PDF’s doorzoekbaar met bronverwijzingen; tool calling ondersteunt documentvergelijking, retourbeoordeling, factuurcontrole en klantenservice met fictieve bedrijfsgegevens.',
    tags: [
      'Python',
      'RAG',
      'LLM',
      'AI-agents',
      'Tool calling',
      'React',
      'TypeScript',
      'Lokale embeddings',
      'FAISS',
      'BM25',
      'Google Gemini',
    ],
    previewTags: ['Python', 'RAG', 'LLM', 'AI-agents', 'Tool calling', 'React'],
    focusAreas: ['ai', 'software'],
    topics: ['RAG', 'AI-agents & tool calling', 'Full-stack development'],
    overviewTitle: 'Documenten doorzoeken, vergelijken en beoordelen.',
    overview:
      'Folio is een zelfstandig ontwikkeld Agentic AI & Document Intelligence Platform. Gebruikers kunnen vragen stellen over documenten, voorwaarden vergelijken en fictieve retourverzoeken, facturen en klantvragen onderzoeken. Ik ontwikkelde de React/TypeScript-interface en de Python-backend, met gedeelde diensten voor documentverwerking, retrieval en bronvalidatie. Document Chat gebruikt een vaste RAG-route; de vier gespecialiseerde agents laten het taalmodel kiezen welke toegestane tools nodig zijn. Bronnen, toolresultaten en menselijke review maken de uitkomsten controleerbaar.',
    features: [
      'Document Chat: vragen stellen over een PDF, met tekstcitaten en paginalinks. Bij onvoldoende context volgt een melding.',
      'Agentbibliotheek: documentvergelijking, retourbeoordeling, factuurverwerking en klantenservice, gegroepeerd per toepassingsgebied.',
      'Inzicht in de uitvoering: conclusies bovenaan, met uitklapbare bronnen, toolstatussen en factuurcontroles.',
      'Menselijke review: conceptantwoorden bewerken, resultaten lokaal als beoordeeld markeren en factuurresultaten exporteren naar JSON.',
      'Documentbeheer: uploads valideren en resultaten aan de juiste documentversie koppelen. Late responses van vervangen documenten worden genegeerd.',
    ],
    workflow: {
      steps: [
        {
          title: 'PDF-upload',
          description: 'Een PDF kiezen of slepen, met validatie vóór de verwerking start.',
        },
        {
          title: 'Tekst per pagina',
          description:
            'PyMuPDF extraheert tekst per pagina, met behoud van de oorspronkelijke paginanummers.',
        },
        {
          title: 'Chunking',
          description:
            'De tekst wordt verdeeld in chunks van standaard 1.200 tekens met 200 tekens overlap, binnen de paginagrenzen.',
        },
        {
          title: 'Lokale embeddings',
          description:
            'Het E5-model draait lokaal op de CPU, met passage: voor documenttekst en query: voor zoekvragen.',
        },
        {
          title: 'FAISS vector search',
          description:
            'FAISS IndexFlatIP zoekt met genormaliseerde vectoren de fragmenten die bij de vraag passen.',
        },
        {
          title: 'Hybride contextselectie',
          description:
            'Document Chat combineert FAISS en BM25 via Reciprocal Rank Fusion, met naburige chunks en een begrensd contextbudget.',
        },
        {
          title: 'LLM-antwoord',
          description:
            'De vraag en geselecteerde context gaan naar de LLM. De Gemini-adapter vraagt gestructureerde output volgens een Pydantic-schema.',
        },
        {
          title: 'Antwoord met bronnen',
          description:
            'Alleen opgehaalde chunk-ID’s worden geaccepteerd en gekoppeld aan de oorspronkelijke tekst en PDF-pagina’s.',
        },
      ],
      caption:
        'De RAG-pipeline is expliciet in Python geïmplementeerd, zonder LangChain of LlamaIndex. Embeddings en vector search draaien lokaal; geselecteerde context wordt voor antwoordgeneratie naar de LLM-API verstuurd. De hybride contextselectie hoort bij Document Chat; agentsearch gebruikt de gedeelde vectorzoekfunctie.',
    },
    agents: [
      {
        title: 'Documentvergelijking',
        description:
          'Vergelijkt twee PDF-versies op gewijzigde, toegevoegde, verwijderde en ongewijzigde voorwaarden. Bevindingen verwijzen naar beide documenten; ontbrekend bewijs leidt tot onzekerheid, niet automatisch tot een wijzigingslabel.',
      },
      {
        title: 'Retourbeoordeling',
        description:
          'Combineert beleidsbronnen, fictieve bestelgegevens en datumberekeningen voor een conceptadvies over een retourverzoek. De agent kiest welke tools nodig zijn en neemt geen terugbetalingsbesluit.',
      },
      {
        title: 'Factuurverwerking',
        description:
          'Extraheert fictieve testfacturen met onderbouwende tekstcitaten. Python controleert bedragen met Decimal en vergelijkt fictieve inkooporders. Resultaten ondersteunen lokale review en JSON-export, zonder financiële goedkeuring of betaling.',
      },
      {
        title: 'Klantenservice',
        description:
          'Onderzoekt een fictieve klantvraag met beleidsbronnen, order- en productgegevens en supportrichtlijnen. Geeft voorstellen voor categorie, prioriteit en escalatie, plus een bewerkbaar conceptantwoord dat pas na menselijke review kan worden gekopieerd.',
      },
    ],
    agentWorkflow: {
      steps: [
        {
          title: 'Opdracht & tools',
          description:
            'Elke agent krijgt een gerichte opdracht en een eigen afgebakende set tools.',
        },
        {
          title: 'Model kiest de stap',
          description:
            'De LLM vraagt een tool aan of levert een eindantwoord; niet iedere opdracht gebruikt dezelfde tools.',
        },
        {
          title: 'Python controleert',
          description:
            'De backend controleert de allowlist, argumenten, documentrevisie, het toolbudget en de deadline.',
        },
        {
          title: 'Toolresultaat terug naar het model',
          description:
            'Python voert de tool uit, registreert de status en geeft het resultaat als onbetrouwbare data terug voor de volgende modelstap.',
        },
        {
          title: 'Concept met bronnen',
          description:
            'De backend valideert output en bronverwijzingen. De gebruiker bekijkt onzekerheden en beoordeelt het concept.',
        },
      ],
      caption:
        'De model-, controle- en toolstappen herhalen zich tot een eindantwoord of uitvoeringslimiet. De agents draaien afzonderlijk; er is geen multi-agentorkestratie. Tools wijzigen geen bestellingen, versturen geen berichten en voeren geen betalingen uit.',
    },
    contributions: [
      {
        title: 'Full-stack platform en gedeelde diensten',
        description:
          'Ik ontwikkelde de React/TypeScript-interface en FastAPI-backend met Pydantic-contracten. Documentverwerking, embeddings, retrieval en LLM-integratie zijn aparte modules die de werkinterfaces delen. Model- en embeddingadapters zijn via interfaces gekoppeld aan de services.',
      },
      {
        title: 'RAG met herleidbare bronnen',
        description:
          'De documentpipeline combineert PDF-extractie, paginagebonden chunking, lokale E5-embeddings en FAISS-retrieval. Voor Document Chat implementeerde ik hybride contextselectie met BM25 en Reciprocal Rank Fusion. De backend accepteert alleen opgehaalde bron-ID’s en koppelt die aan de oorspronkelijke tekst en paginanummers.',
      },
      {
        title: 'Modelgestuurde tools met uitvoeringsgrenzen',
        description:
          'Ik bouwde een gedeelde Python-loop voor de vier gespecialiseerde agents. De LLM selecteert tools; Python valideert de argumenten en voert toegestane aanroepen uit. Elke agent heeft een eigen allowlist, documentafbakening, toolbudget en deadline. Toolresultaten komen met een uitvoeringsstatus terug bij het model.',
      },
      {
        title: 'Python-controles en menselijke review',
        description:
          'Factuurvelden worden onderbouwd met letterlijke tekstcitaten; onvoldoende onderbouwde waarden blijven null. Python Decimal controleert bedragen en vergelijkt fictieve inkooporders, zonder herschreven modelbedragen te accepteren. In de interface blijven bronnen en afwijkingen zichtbaar en kunnen gebruikers concepten bewerken en lokaal beoordelen.',
      },
    ],
    techStack: [
      { title: 'Frontend', technologies: ['React', 'TypeScript', 'Vite', 'Eigen CSS'] },
      { title: 'Backend', technologies: ['Python', 'FastAPI', 'Pydantic', 'pydantic-settings'] },
      { title: 'PDF-verwerking', technologies: ['PyMuPDF', 'Eigen chunkingfunctie'] },
      {
        title: 'Embeddings & retrieval',
        technologies: [
          'sentence-transformers',
          'intfloat/multilingual-e5-small',
          'FAISS IndexFlatIP',
          'BM25',
          'Reciprocal Rank Fusion',
        ],
      },
      {
        title: 'LLM & agents',
        technologies: [
          'Google Gemini',
          'google-genai Python-SDK',
          'Function calling',
          'Gestructureerde output',
        ],
      },
      { title: 'Deterministische tools', technologies: ['Decimal', 'datetime'] },
      {
        title: 'Tests',
        technologies: ['pytest', 'HTTP-mocks', 'Vitest', 'React Testing Library', 'jsdom'],
      },
    ],
    testing: {
      summary:
        'Bij de projectcontrole van 28 oktober 2026 zijn 284 backendtests en 83 frontendtests geslaagd, samen met de frontend-productiebuild. De tests dekken onder meer documentverwerking, hybride retrieval, bronvalidatie, toolkeuzes, uitvoeringslimieten, factuurcontroles en reviewinteracties.',
      note: 'Externe LLM-aanroepen en modelinferentie worden gemockt; een deel van de tests gebruikt echte FAISS-indexen en de echte SDK met gemockt HTTP-verkeer. Bij deze controle zijn geen live LLM-requests uitgevoerd. Deze resultaten tonen geen gemeten antwoordkwaliteit of volledige bescherming tegen promptinjectie aan.',
    },
    considerations: [
      {
        title: 'Retrieval en agentresultaten evalueren',
        description:
          'Ik wil een vaste evaluatieset opbouwen voor retrieval, antwoorden en agentresultaten. Bronvalidatie controleert herkomst, maar garandeert geen inhoudelijke juistheid of volledige documentvergelijking. Voor kwaliteit, latentie en kosten staan hier geen gemeten resultaten.',
      },
      {
        title: 'Meer PDF-inhoud verwerken',
        description:
          'Folio verwerkt PDF’s met een tekstlaag, zonder OCR. Complexe opmaak en tabellen kunnen structuur verliezen. OCR, chunking op zinnen of tokens en reranking zijn mogelijke vervolgstappen.',
      },
      {
        title: 'Documentisolatie en duurzame opslag',
        description:
          'Document Chat en de bedrijfsagents delen één actieve PDF per backendproces; vergelijking gebruikt een onafhankelijk documentpaar. Er zijn geen accounts, gebruikersisolatie of permanente opslag. Documenten per gebruiker scheiden en menselijke correcties duurzaam bewaren zijn vervolgstappen.',
      },
    ],
    takeaway:
      'Folio combineert full-stack development, documentretrieval en agentic AI in één zelfstandig project. De engineering zit in de samenhang tussen de gebruikersinterface, API-contracten, modelgestuurde toolkeuze en deterministische controles. Bronverwijzingen, uitvoeringsgrenzen en menselijke review zijn onderdeel van het ontwerp. De bedrijfsprocessen gebruiken fictieve gegevens en hebben geen koppeling met echte bestellingen, betalingen of tickets.',
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

export const skillGroups: { area: FocusArea; title: string; skills: string[] }[] = [
  {
    area: 'ai',
    title: 'AI Engineering',
    skills: [
      'Python',
      'Large Language Models',
      'Retrieval-Augmented Generation (RAG)',
      'AI-agents',
      'Tool calling',
      'Prompt Engineering',
      'Embeddings',
      'Semantisch zoeken (FAISS)',
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
]

export const about = [
  'Ik ben recent afgestudeerd in HBO-ICT: Software Engineering aan de Hogeschool van Amsterdam. Tijdens mijn studie groeide mijn interesse in AI en data. Daarom volgde ik de minor Data Driven Business – AI Engineering.',
  'Ik verdiep me graag in een proces of vraagstuk voordat ik aan een oplossing begin. Mijn grootste interesse ligt bij praktische AI-toepassingen, automatisering en machine learning. Ik leer graag nieuwe technologieën en zoek een startende functie waarin ik me gericht verder kan ontwikkelen.',
]
