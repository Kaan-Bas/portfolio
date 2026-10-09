// Edit personal details and contact links here. Empty links render as labelled placeholders.
export const profile = {
  name: 'Kaan Bas',
  headline: {
    firstLine: 'Building practical solutions',
    secondLine: 'with ',
    emphasis: 'AI, software & data.',
  },
  introduction:
    'Recent HBO-ICT: Software Engineering graduate with practical experience in AI Engineering, machine learning, data and software development.',
  email: 'kaan.bas762@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kaan-bas-62225a420',
  github: 'https://github.com/Kaan-Bas',
  siteUrl: 'https://kaan-bas-engineering.peachybow5.chatgpt.site',
}

export const navigation = ['Work', 'About', 'Experience', 'Skills', 'Contact'] as const

export const pillars = [
  {
    id: 'ai',
    number: '01',
    title: 'AI Engineering',
    description: 'Interpreting information. Automating practical work.',
    skills: ['LLMs', 'AI Agents', 'Prompt Engineering', 'Automation', 'Human-in-the-Loop'],
  },
  {
    id: 'software',
    number: '02',
    title: 'Software Engineering',
    description: 'Turning technical ideas into usable applications.',
    skills: ['Python', 'Java', 'JavaScript', 'REST APIs', 'Git / CI/CD', 'Application Development'],
  },
  {
    id: 'data',
    number: '03',
    title: 'Data & Machine Learning',
    description: 'Finding patterns. Structuring and learning from data.',
    skills: ['SQL', 'pandas', 'NumPy', 'scikit-learn', 'Data Analysis', 'Machine Learning'],
  },
] as const

export interface Project {
  slug: string
  organization: string
  title: string
  context: string
  description: string
  tags: string[]
  areas: string[]
  visual: 'recommendation' | 'water'
  overview: string
  contributions: { title: string; description: string }[]
  takeaway: string
}

export const featuredProject = {
  slug: 'siemens-ai-quotation-automation',
  organization: 'Siemens Buildings',
  title: 'AI-Powered Quotation Automation',
  context: 'Graduation Internship — AI Engineer',
  description:
    'Designed and built a Python/LLM pipeline that processes unstructured customer requests, converts them into structured information and validates the generated output against trusted source data.',
  tags: [
    'Python',
    'LLMs',
    'Prompt Engineering',
    'Structured JSON',
    'Validation',
    'Human-in-the-Loop',
    'Process Automation',
  ],
  areas: ['AI Engineering', 'Software', 'Process / Data handling'],
  metric: '68.8%',
}

export const projects: Project[] = [
  {
    slug: 'idcp-chatbot-recommendation',
    organization: 'IDCP',
    title: 'LLM Chatbot & Hybrid Recommendation System',
    context: 'Data Driven Business – AI Engineering Minor',
    description:
      'Worked in an Agile/Scrum team on an LLM-based chatbot for user support and developed a hybrid machine-learning recommendation system in Python.',
    tags: [
      'Python',
      'LLMs',
      'Machine Learning',
      'Recommendation Systems',
      'Data Processing',
      'Agile/Scrum',
    ],
    areas: ['AI Engineering', 'Data & Machine Learning'],
    visual: 'recommendation',
    overview:
      'This minor project brought together conversational AI and machine-learning recommendations. Data about users, their interests and available content was processed and used within the recommendation system and chatbot.',
    contributions: [
      {
        title: 'LLM-based user support',
        description:
          'Worked with an Agile/Scrum team on a chatbot that used an LLM for user support.',
      },
      {
        title: 'Hybrid recommendations',
        description: 'Developed a hybrid machine-learning recommendation system in Python.',
      },
      {
        title: 'Connecting AI and data',
        description:
          'Processed user, interest and content data for use within the recommendation system and chatbot.',
      },
    ],
    takeaway:
      'A project at the intersection of AI and data: using information about users and content within both a chatbot and a recommendation system.',
  },
  {
    slug: 'waternet-pipe-failure-prediction',
    organization: 'Waternet',
    title: 'Pipe Failure Prediction',
    context: 'Data Driven Business – AI Engineering Minor',
    description:
      'Prepared and analysed water infrastructure data and developed a classification model in Python/scikit-learn for predicting pipe failures from historical failure data.',
    tags: [
      'Python',
      'pandas',
      'scikit-learn',
      'Machine Learning',
      'Data Analysis',
      'Classification',
    ],
    areas: ['Data & Machine Learning'],
    visual: 'water',
    overview:
      'This project focused on using historical failure data to predict pipe failures. The work combined preparing and analysing water infrastructure data with developing a machine-learning classification model.',
    contributions: [
      {
        title: 'Data preparation',
        description:
          'Prepared water infrastructure data for analysis and classification in Python.',
      },
      {
        title: 'Exploratory analysis',
        description: 'Analysed historical failure data using Python and pandas.',
      },
      {
        title: 'Failure classification',
        description:
          'Developed a classification model using scikit-learn to predict pipe failures from historical failure data.',
      },
    ],
    takeaway:
      'A practical data and machine-learning project, connecting data preparation and analysis to a classification model for an infrastructure problem.',
  },
]

export const experience = [
  {
    company: 'Siemens',
    role: 'AI Engineer',
    type: 'Graduation Internship',
    date: '2026',
    description:
      'Analysed an existing quotation process and developed an AI-driven automation solution combining LLM extraction, structured data and deterministic validation.',
  },
  {
    company: 'Endeavour',
    role: 'Software Developer',
    type: 'Internship',
    date: '2024–2025',
    description:
      'Worked on frontend and backend development, connecting database/CMS data to the frontend and developing API endpoints.',
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
    title: 'AI & Machine Learning',
    skills: [
      'Large Language Models',
      'AI Agents',
      'Prompt Engineering',
      'Machine Learning',
      'Human-in-the-Loop',
      'Model Evaluation',
    ],
  },
  {
    title: 'Software Development',
    skills: ['Python', 'Java', 'JavaScript', 'REST APIs', 'JSON', 'Git', 'GitLab CI/CD'],
  },
  {
    title: 'Data',
    skills: ['SQL', 'NoSQL', 'pandas', 'NumPy', 'scikit-learn', 'Data Analysis', 'Power BI'],
  },
  { title: 'Automation & Ways of Working', skills: ['Power Automate', 'Agile / Scrum'] },
]

export const about = [
  'I recently graduated from HBO-ICT: Software Engineering at Hogeschool van Amsterdam. During my studies, a growing interest in AI and data led me to the Data Driven Business – AI Engineering minor.',
  'I enjoy understanding how a process works, exploring what technology can improve it, and then turning that idea into something practical. I like learning new technologies and working across AI, software and data, with a particular interest in applied AI and automation.',
]

export const interests = [
  'Applied AI',
  'Generative AI',
  'LLM applications',
  'AI agents',
  'Automation',
  'Software integrations',
  'Machine learning',
  'Data analysis',
]
