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

export function IntersectionGraphic() {
  return (
    <figure
      className="intersection-graphic"
      aria-label="AI engineering, software engineering en data komen samen in praktische oplossingen"
    >
      <div className="graphic-topline">
        <span>DRIE VAKGEBIEDEN. ÉÉN AANPAK.</span>
        <span className="graphic-plus" aria-hidden="true">
          +
        </span>
      </div>
      <svg
        className="intersection-svg"
        viewBox="0 0 460 380"
        role="img"
        aria-labelledby="intersection-title"
      >
        <title id="intersection-title">Het snijvlak van AI, software en data</title>
        <defs>
          <pattern id="dot-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#3b3032" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="460" height="380" fill="url(#dot-grid)" />
        <circle
          cx="230"
          cy="150"
          r="113"
          fill="#54272e"
          fillOpacity=".48"
          stroke="#b85a65"
          strokeWidth="1.3"
        />
        <circle
          cx="169"
          cy="243"
          r="113"
          fill="#302a2b"
          fillOpacity=".5"
          stroke="#8b7274"
          strokeWidth="1.3"
        />
        <circle
          cx="291"
          cy="243"
          r="113"
          fill="#3d262b"
          fillOpacity=".4"
          stroke="#a16b73"
          strokeWidth="1.3"
        />
        <circle cx="230" cy="216" r="36" fill="var(--accent-solid)" />
        <path d="M218 216h24m-12-12v24" stroke="var(--ink)" strokeWidth="1.7" />
        <circle cx="230" cy="37" r="4" fill="var(--accent)" />
        <circle cx="67" cy="292" r="4" fill="var(--accent)" />
        <circle cx="393" cy="292" r="4" fill="var(--accent)" />
        <text x="230" y="108" textAnchor="middle" className="diagram-svg-label">
          AI Engineering
        </text>
        <text x="145" y="270" textAnchor="middle" className="diagram-svg-label">
          Software
        </text>
        <text x="315" y="270" textAnchor="middle" className="diagram-svg-label">
          Data & ML
        </text>
        <path d="M230 252v53" stroke="#bb747c" strokeDasharray="3 4" />
        <rect
          x="151"
          y="304"
          width="158"
          height="32"
          rx="16"
          fill="var(--surface-raised)"
          stroke="var(--line)"
        />
        <text x="230" y="324" textAnchor="middle" className="diagram-svg-small">
          Praktische oplossingen
        </text>
      </svg>
      <figcaption>
        <span className="status-dot" /> Samenhangend denken. Bruikbare resultaten.
      </figcaption>
    </figure>
  )
}

export function FeaturedWorkflow() {
  return (
    <div
      className="featured-workflow"
      aria-label="Klantaanvraag, LLM-extractie, Python-validatie en menselijke controle"
    >
      <span className="diagram-kicker">VAN AANVRAAG NAAR GESTRUCTUREERD RESULTAAT</span>
      <div className="mini-flow">
        <div>
          <FileText aria-hidden="true" />
          <span>Aanvraag</span>
        </div>
        <ArrowRight className="flow-arrow" aria-hidden="true" />
        <div>
          <Sparkles aria-hidden="true" />
          <span>Extractie</span>
        </div>
        <ArrowRight className="flow-arrow" aria-hidden="true" />
        <div>
          <ShieldCheck aria-hidden="true" />
          <span>Validatie</span>
        </div>
        <ArrowRight className="flow-arrow" aria-hidden="true" />
        <div>
          <UserRound aria-hidden="true" />
          <span>Controle</span>
        </div>
      </div>
    </div>
  )
}

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
            <g fill="none" stroke="#855d62" strokeWidth="2">
              <path d="M5 38h81v76h92V38h96v76h131M86 76h67V15h180v61h73M35 76v66h91M224 38V5M333 76v60" />
            </g>
            <g fill="#211d1e" stroke="#b18086" strokeWidth="2">
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
