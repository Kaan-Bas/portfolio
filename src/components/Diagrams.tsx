import {
  ArrowDown,
  ArrowRight,
  Braces,
  Check,
  Code2,
  Database,
  FileText,
  GitBranch,
  Layers3,
  Mail,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  UserRound,
} from 'lucide-react'
import type { ReactNode } from 'react'

export function ProjectVisual({
  type,
  large = false,
}: {
  type: 'recommendation' | 'water'
  large?: boolean
}) {
  return (
    <figure
      className={`project-visual ${type} ${large ? 'visual-large' : ''}`}
      data-area={type === 'water' ? 'data' : 'ai'}
      aria-label={
        type === 'water'
          ? 'Conceptuele workflow: historische data, analyse, classificatie en voorspelling van leidingstoringen'
          : 'Conceptuele workflow: data over gebruikers, interesses en content verbonden met aanbevelingen en chatbotondersteuning'
      }
    >
      <div className="visual-caption">
        <span>{type === 'water' ? 'DATA → VOORSPELLING' : 'DATA → RELEVANTIE'}</span>
        <span>CONCEPTUELE WORKFLOW</span>
      </div>
      {type === 'recommendation' ? (
        <div className="recommendation-diagram">
          <div className="source-stack">
            <span>
              <UserRound size={16} aria-hidden="true" />
              Gebruikers
            </span>
            <span>
              <Sparkles size={16} aria-hidden="true" />
              Interesses
            </span>
            <span>
              <Layers3 size={16} aria-hidden="true" />
              Content
            </span>
          </div>
          <div className="visual-connector" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="visual-node">
            <GitBranch size={25} aria-hidden="true" />
            <span>
              Hybride
              <br />
              aanbevelingen
            </span>
          </div>
          <div className="visual-connector single" aria-hidden="true">
            <i />
          </div>
          <div className="visual-node end-node">
            <Sparkles size={24} aria-hidden="true" />
            <span>
              LLM
              <br />
              chatbot
            </span>
          </div>
        </div>
      ) : (
        <div className="water-diagram">
          <svg viewBox="0 0 410 150" aria-hidden="true">
            <g fill="none" stroke="var(--software-ink)" strokeWidth="2">
              <path d="M5 38h81v76h92V38h96v76h131M86 76h67V15h180v61h73M35 76v66h91M224 38V5M333 76v60" />
            </g>
            <g fill="var(--surface)" stroke="var(--diagram-line)" strokeWidth="2">
              {[
                [86, 38],
                [86, 114],
                [178, 114],
                [178, 38],
                [274, 38],
                [274, 114],
                [153, 76],
                [333, 76],
              ].map(([cx, cy]) => (
                <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="6" />
              ))}
            </g>
            <circle
              cx="274"
              cy="38"
              r="16"
              fill="var(--accent-surface)"
              stroke="var(--accent)"
              strokeWidth="1"
            />
            <circle cx="274" cy="38" r="5" fill="var(--accent)" />
            <path d="M284 24l19-14h66" stroke="var(--accent)" fill="none" />
            <text x="305" y="8" fontSize="9" fill="var(--accent)" fontFamily="monospace">
              CLASSIFICATIE
            </text>
          </svg>
          <div className="water-flow">
            <span>Historische data</span>
            <ArrowRight size={14} aria-hidden="true" />
            <span>Analyse</span>
            <ArrowRight size={14} aria-hidden="true" />
            <span>Voorspelling</span>
          </div>
        </div>
      )}
    </figure>
  )
}

export function ProjectArchitecture({
  source,
  branches,
  caption,
}: {
  source: { title: string; description: string }
  branches: readonly { title: string; steps: readonly { title: string; description: string }[] }[]
  caption: string
}) {
  return (
    <figure
      className="project-architecture"
      aria-label="Architectuur van de CRM-applicatie en aanbevelingsprototypes"
    >
      <div className="project-architecture-source">
        <Database size={22} aria-hidden="true" />
        <h3>{source.title}</h3>
        <p>{source.description}</p>
      </div>
      <div className="project-architecture-branches">
        {branches.map((branch) => (
          <div className="project-architecture-branch" key={branch.title}>
            <ArrowDown size={18} aria-hidden="true" />
            <h3>{branch.title}</h3>
            <ol>
              {branch.steps.map((step) => (
                <li key={step.title}>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

export function ProjectWorkflow({
  steps,
  caption,
  label = 'Gegevensstroom van het project',
}: {
  steps: readonly { title: string; description: string }[]
  caption: string
  label?: string
}) {
  return (
    <figure className="project-workflow" aria-label={label}>
      <ol className="project-workflow-steps" aria-label="Stappen van de gegevensstroom">
        {steps.map((step, index) => (
          <li key={step.title}>
            <span className="project-workflow-number" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="project-workflow-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <ArrowDown className="project-workflow-arrow" size={15} aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

function FlowNode({
  icon,
  title,
  subtitle,
  className = '',
}: {
  icon: ReactNode
  title: string
  subtitle?: string
  className?: string
}) {
  return (
    <div className={`architecture-node ${className}`}>
      <span className="node-icon">{icon}</span>
      <div>
        <strong>{title}</strong>
        {subtitle && <small>{subtitle}</small>}
      </div>
    </div>
  )
}

function Connector() {
  return (
    <div className="architecture-connector" aria-hidden="true">
      <ArrowDown size={18} />
    </div>
  )
}

export function ArchitectureDiagram() {
  return (
    <figure className="architecture" aria-labelledby="architecture-caption">
      <div className="architecture-topline">
        <span>WORKFLOWARCHITECTUUR</span>
        <span>LLM + PYTHON + MENSELIJKE CONTROLE</span>
      </div>
      <div className="architecture-flow">
        <FlowNode icon={<Mail />} title="Klantaanvraag" subtitle="E-mail · PDF · Excel · Word" />
        <Connector />
        <FlowNode
          icon={<FileText />}
          title="Documentverwerking / parsing"
          subtitle="De aanvraag voorbereiden op extractie"
        />
        <Connector />
        <FlowNode
          icon={<Sparkles />}
          title="Informatie-extractie met een LLM"
          subtitle="Minder gestructureerde informatie interpreteren"
          className="ai-node"
        />
        <Connector />
        <FlowNode
          icon={<Braces />}
          title="Gestructureerde JSON"
          subtitle="Een consistent formaat voor de volgende stap"
        />
        <Connector />
        <div className="validation-row">
          <FlowNode
            icon={<ShieldCheck />}
            title="Python-validatie"
            subtitle="Deterministische controles"
            className="validation-node"
          />
          <div className="source-connection" aria-hidden="true">
            ↔
          </div>
          <FlowNode
            icon={<Database />}
            title="Betrouwbare brondata"
            subtitle="Betrouwbare productinformatie"
            className="source-node"
          />
        </div>
        <div className="branch-connector" aria-hidden="true">
          <span />
          <span />
        </div>
        <div className="result-branches">
          <FlowNode
            icon={<Check />}
            title="Geldig resultaat"
            subtitle="Voldoet aan de validatiecontroles"
            className="valid-node"
          />
          <FlowNode
            icon={<TriangleAlert />}
            title="Waarschuwing / menselijke controle"
            subtitle="Onzekere resultaten vragen om controle"
            className="review-node"
          />
        </div>
        <div className="merge-connector" aria-hidden="true">
          <span />
          <span />
        </div>
        <FlowNode
          icon={<Code2 />}
          title="Offerteoverzicht"
          subtitle="Gestructureerde uitvoer met validatie en controle"
        />
      </div>
      <figcaption id="architecture-caption">
        Projectarchitectuur op hoofdlijnen. Het LLM extraheert; Python controleert; mensen
        beoordelen onzekerheid.
      </figcaption>
    </figure>
  )
}
