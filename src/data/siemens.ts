export const caseSections = [
  { id: 'problem', label: 'The problem' },
  { id: 'role', label: 'My role' },
  { id: 'architecture', label: 'The workflow' },
  { id: 'engineering', label: 'Engineering decisions' },
  { id: 'evaluation', label: 'Model evaluation' },
  { id: 'results', label: 'Results & learnings' },
]

export const roleGroups = [
  {
    title: 'Understand & design',
    items: [
      'Analysed the existing process and bottlenecks.',
      'Gathered process information and requirements from stakeholders.',
      'Designed the proposed AI workflow.',
    ],
  },
  {
    title: 'Build & validate',
    items: [
      'Developed the Python solution and processed different document types.',
      'Evaluated multiple Large Language Models and applied prompt engineering.',
      'Implemented structured JSON output and deterministic validation logic.',
      'Added error handling, warnings and human-in-the-loop checks.',
    ],
  },
  {
    title: 'Test & evaluate',
    items: [
      'Tested the end-to-end solution with representative requests.',
      'Evaluated processing time.',
    ],
  },
]

export const projectPillars = [
  {
    title: 'AI',
    description: 'The LLM interpreted less structured customer requests and extracted information.',
  },
  {
    title: 'Software',
    description:
      'Python orchestrated document processing, validation logic, error handling and the workflow.',
  },
  {
    title: 'Data',
    description: 'Generated information was structured and checked against trusted source data.',
  },
]

export const evaluationDimensions = [
  {
    title: 'Information / article recognition',
    description: 'Could the model identify the relevant information and articles?',
  },
  {
    title: 'Quantity extraction',
    description: 'Were the requested quantities extracted correctly?',
  },
  { title: 'JSON validity', description: 'Was the output valid structured JSON?' },
  {
    title: 'Hallucinations / incorrect output',
    description: 'Did the model introduce unsupported or incorrect information?',
  },
  { title: 'Processing time', description: 'How long did the model take to process the request?' },
]

export const learnings = [
  'AI is more reliable when combined with deterministic logic where appropriate.',
  'Understand the process before choosing the technology.',
  'Let stakeholder requirements influence technical design.',
  'Evaluate LLMs on more than answer quality.',
  'Keep human review available when uncertainty remains.',
  'A useful AI solution is more than just the model.',
]
