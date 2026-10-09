export const caseSections = [
  { id: 'problem', label: 'Het probleem' },
  { id: 'role', label: 'Mijn rol' },
  { id: 'architecture', label: 'De workflow' },
  { id: 'engineering', label: 'Technische keuzes' },
  { id: 'evaluation', label: 'Modelevaluatie' },
  { id: 'results', label: 'Resultaat & inzichten' },
]

export const roleGroups = [
  {
    title: 'Begrijpen & ontwerpen',
    items: [
      'Het bestaande proces en de knelpunten geanalyseerd.',
      'Procesinformatie en eisen opgehaald bij stakeholders.',
      'De voorgestelde AI-workflow ontworpen.',
    ],
  },
  {
    title: 'Bouwen & valideren',
    items: [
      'De Python-oplossing ontwikkeld en verschillende documenttypen verwerkt.',
      'Meerdere Large Language Models geëvalueerd en prompt engineering toegepast.',
      'Gestructureerde JSON-uitvoer en deterministische validatielogica geïmplementeerd.',
      'Foutafhandeling, waarschuwingen en human-in-the-loop-controles toegevoegd.',
    ],
  },
  {
    title: 'Testen & evalueren',
    items: [
      'De volledige oplossing getest met representatieve aanvragen.',
      'De verwerkingstijd geëvalueerd.',
    ],
  },
]

export const projectPillars = [
  {
    title: 'AI',
    description:
      'Het LLM interpreteerde minder gestructureerde klantaanvragen en haalde er informatie uit.',
  },
  {
    title: 'Software',
    description:
      'Python stuurde de documentverwerking, validatielogica, foutafhandeling en workflow aan.',
  },
  {
    title: 'Data',
    description:
      'Gegenereerde informatie werd gestructureerd en gecontroleerd aan de hand van betrouwbare brondata.',
  },
]

export const evaluationDimensions = [
  {
    title: 'Herkenning van informatie en artikelen',
    description: 'Kon het model de relevante informatie en artikelen herkennen?',
  },
  {
    title: 'Extractie van aantallen',
    description: 'Werden de gevraagde aantallen correct uit de aanvraag gehaald?',
  },
  { title: 'Geldigheid van JSON', description: 'Was de uitvoer geldige, gestructureerde JSON?' },
  {
    title: 'Hallucinaties en onjuiste uitvoer',
    description: 'Voegde het model niet-onderbouwde of onjuiste informatie toe?',
  },
  {
    title: 'Verwerkingstijd',
    description: 'Hoe lang had het model nodig om de aanvraag te verwerken?',
  },
]

export const learnings = [
  'AI wordt betrouwbaarder door waar passend deterministische logica toe te voegen.',
  'Begrijp het proces voordat je de technologie kiest.',
  'Laat eisen van stakeholders meewegen in het technische ontwerp.',
  'Evalueer LLMs op meer dan alleen de kwaliteit van het antwoord.',
  'Houd menselijke controle beschikbaar wanneer er onzekerheid blijft.',
  'Een bruikbare AI-oplossing is meer dan alleen het model.',
]
