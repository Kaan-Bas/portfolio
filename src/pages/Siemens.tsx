import {
  ArrowDown,
  ArrowRight,
  Check,
  FileSpreadsheet,
  FileText,
  Mail,
  ShieldCheck,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { featuredProject } from '../data/portfolio'
import {
  caseSections,
  evaluationDimensions,
  learnings,
  projectPillars,
  roleGroups,
} from '../data/siemens'
import { ArchitectureDiagram } from '../components/Diagrams'
import { Contact } from '../components/Layout'
import { BackToWork, Tags } from '../components/ui'

export default function Siemens() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="case-hero container">
        <BackToWork />
        <p className="eyebrow case-eyebrow">
          Siemens Buildings<span className="eyebrow-divider">/</span>Afstudeerproject · 2026
        </p>
        <h1>
          Offertes automatiseren
          <br />
          met AI<span className="accent">.</span>
        </h1>
        <p className="case-lead">
          Een AI-workflow om handmatig werk in een bestaand offerteproces te verminderen. De
          oplossing haalt gestructureerde informatie uit ongestructureerde klantaanvragen en
          valideert het resultaat aan de hand van betrouwbare productdata.
        </p>
        <div className="case-facts">
          <div>
            <span className="eyebrow">Rol</span>
            <p>AI Engineer / Afstudeerstagiair</p>
          </div>
          <div>
            <span className="eyebrow">Focus</span>
            <p>
              Toegepaste AI · Informatie-extractie met LLMs
              <br />
              Procesautomatisering · Datavalidatie
            </p>
          </div>
          <div className="case-hero-metric">
            <strong>
              68,8%
              <ArrowDown size={24} aria-hidden="true" />
            </strong>
            <p>
              Minder verwerkingstijd
              <br />
              <small>bij de geëvalueerde testcases</small>
            </p>
          </div>
        </div>
        <Tags items={featuredProject.tags} />
      </section>

      <div className="case-body container">
        <aside className="case-sidebar">
          <nav aria-label="Inhoud van de casestudy">
            <span className="eyebrow">In dit project</span>
            {caseSections.map((section, index) => (
              <Link to={`#${section.id}`} key={section.id}>
                <span>0{index + 1}</span>
                {section.label}
              </Link>
            ))}
          </nav>
          <div className="case-sidebar-note">
            <ShieldCheck size={19} aria-hidden="true" />
            <p>Informatie-extractie met validatie en menselijke controle.</p>
          </div>
        </aside>
        <article className="case-content">
          <section className="case-section" id="problem" tabIndex={-1}>
            <p className="eyebrow">
              <span>01</span>Het procesvraagstuk
            </p>
            <h2>
              Eén proces.
              <br />
              Verschillende soorten input.
            </h2>
            <p>
              Klantaanvragen konden binnenkomen als e-mails, pdf's, Excel-bestanden of
              Word-documenten. De informatie moest handmatig worden geïnterpreteerd en verwerkt
              binnen het offerteproces.
            </p>
            <div className="document-formats">
              {[
                { name: 'E-mail', icon: Mail },
                { name: 'PDF', icon: FileText },
                { name: 'Excel', icon: FileSpreadsheet },
                { name: 'Word', icon: FileText },
              ].map(({ name, icon: Icon }) => (
                <span key={name}>
                  <Icon size={22} aria-hidden="true" />
                  {name}
                </span>
              ))}
            </div>
            <p>
              Voordat ik de oplossing bouwde, analyseerde ik het bestaande offerteproces. Ik besprak
              het proces, de knelpunten en de behoeften van gebruikers met betrokken stakeholders,
              waaronder de Sales Team Lead.
            </p>
            <div className="editorial-note">
              <span>BEGIN BIJ HET PROCES</span>
              <p>
                Het technische ontwerp volgde uit inzicht in het proces en de mensen die ermee
                werken.
              </p>
            </div>
          </section>

          <section className="case-section" id="role" tabIndex={-1}>
            <p className="eyebrow">
              <span>02</span>Mijn bijdrage
            </p>
            <h2>
              Van procesanalyse
              <br />
              tot een geëvalueerd prototype.
            </h2>
            <p>
              Ik werkte aan het volledige afstudeerproject: het proces begrijpen, de workflow
              ontwerpen, de Python-oplossing bouwen en deze evalueren met representatieve aanvragen.
            </p>
            <div className="role-groups">
              {roleGroups.map((group, index) => (
                <div className="role-group" key={group.title}>
                  <span className="role-number">0{index + 1}</span>
                  <div>
                    <h3>{group.title}</h3>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="case-section architecture-section" id="architecture" tabIndex={-1}>
            <p className="eyebrow">
              <span>03</span>De architectuur
            </p>
            <h2>
              Flexibel interpreteren.
              <br />
              Gericht controleren.
            </h2>
            <p>
              De pipeline combineerde informatie-extractie met LLMs, deterministische
              Python-validatie, betrouwbare brondata en menselijke controle bij onzekere resultaten.
            </p>
            <ArchitectureDiagram />
            <div className="project-pillar-grid">
              {projectPillars.map((pillar, index) => (
                <div key={pillar.title}>
                  <span className="eyebrow">0{index + 1}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="case-section" id="engineering" tabIndex={-1}>
            <p className="eyebrow">
              <span>04</span>Een technische keuze
            </p>
            <h2>
              Waarom het LLM
              <br />
              niet direct vertrouwen?
            </h2>
            <p>
              Het LLM was bruikbaar om informatie te halen uit wisselende of minder gestructureerde
              input. Gegenereerde uitvoer moet in een offerteproces echter niet automatisch worden
              vertrouwd.
            </p>
            <p>
              Daarom combineerde ik LLM-extractie met deterministische Python-validatie en
              betrouwbare brondata. Waarschuwingen en human-in-the-loop-controles maakten onzekere
              resultaten zichtbaar, zodat ze konden worden beoordeeld.
            </p>
            <div className="trust-chain">
              <div>
                <span>INTERPRETEREN</span>
                <strong>LLM-extractie</strong>
              </div>
              <ArrowRight aria-hidden="true" />
              <div>
                <span>CONTROLEREN</span>
                <strong>Python + brondata</strong>
              </div>
              <ArrowRight aria-hidden="true" />
              <div>
                <span>BEOORDELEN</span>
                <strong>Waarschuwingen + menselijke controle</strong>
              </div>
            </div>
            <p className="engineering-conclusion">
              Elk onderdeel had een duidelijke taak: de aanvraag interpreteren, de informatie
              controleren en onzekerheid zichtbaar maken.
            </p>
          </section>

          <section className="case-section" id="evaluation" tabIndex={-1}>
            <p className="eyebrow">
              <span>05</span>Modelevaluatie
            </p>
            <h2>
              Kies het model
              <br />
              voor de hele workflow.
            </h2>
            <p>
              Ik vergeleek meerdere Large Language Models en selecteerde op basis van de evaluatie
              het meest geschikte model. Daarbij keek ik naar de kwaliteit en structuur van de
              uitvoer, onjuiste informatie en verwerkingstijd.
            </p>
            <div className="evaluation-list">
              {evaluationDimensions.map((dimension, index) => (
                <div key={dimension.title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{dimension.title}</h3>
                    <p>{dimension.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="case-section results-section" id="results" tabIndex={-1}>
            <p className="eyebrow">
              <span>06</span>Resultaat & inzichten
            </p>
            <h2>
              Minder handmatig werk.
              <br />
              Met behoud van validatie.
            </h2>
            <div className="result-panel">
              <p className="eyebrow">GEËVALUEERD PROTOTYPE</p>
              <strong>
                68,8%
                <ArrowDown aria-hidden="true" />
              </strong>
              <h3>Minder verwerkingstijd</h3>
              <p>Bij de geëvalueerde testcases</p>
              <div className="result-panel-divider" />
              <p className="result-explanation">
                Het prototype liet zien dat handmatige verwerking aanzienlijk kan worden verminderd,
                met behoud van validatie en menselijke controle.
              </p>
            </div>
            <h3 className="learnings-title">Wat ik heb geleerd</h3>
            <ul className="learnings">
              {learnings.map((learning) => (
                <li key={learning}>
                  <Check size={17} aria-hidden="true" />
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </section>
          <div className="confidentiality">
            <ShieldCheck size={21} aria-hidden="true" />
            <p>
              Deze casestudy beschrijft het project op hoofdlijnen. Vertrouwelijke Siemens-data,
              interne systemen, broncode en klantinformatie zijn bewust niet opgenomen.
            </p>
          </div>
          <div className="case-next">
            <Link className="text-link" to="/#work">
              Bekijk meer projecten
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <span>AI + Software + Data</span>
          </div>
        </article>
      </div>
      <Contact />
    </main>
  )
}
