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
          Siemens Buildings<span className="eyebrow-divider">/</span>Graduation project · 2026
        </p>
        <h1>
          AI-Powered
          <br />
          Quotation Automation<span className="accent">.</span>
        </h1>
        <p className="case-lead">
          An AI-driven workflow designed to reduce manual work in an existing quotation process by
          extracting structured information from unstructured customer requests and validating the
          result against reliable product data.
        </p>
        <div className="case-facts">
          <div>
            <span className="eyebrow">Role</span>
            <p>AI Engineer / Graduation Intern</p>
          </div>
          <div>
            <span className="eyebrow">Focus</span>
            <p>
              Applied AI · LLM-based information extraction
              <br />
              Process automation · Data validation
            </p>
          </div>
          <div className="case-hero-metric">
            <strong>
              68.8%
              <ArrowDown size={24} aria-hidden="true" />
            </strong>
            <p>
              Reduction in processing time
              <br />
              <small>across the evaluated test cases</small>
            </p>
          </div>
        </div>
        <Tags items={featuredProject.tags} />
      </section>

      <div className="case-body container">
        <aside className="case-sidebar">
          <nav aria-label="Case study contents">
            <span className="eyebrow">Inside the project</span>
            {caseSections.map((section, index) => (
              <Link to={`#${section.id}`} key={section.id}>
                <span>0{index + 1}</span>
                {section.label}
              </Link>
            ))}
          </nav>
          <div className="case-sidebar-note">
            <ShieldCheck size={19} aria-hidden="true" />
            <p>Extraction supported by validation and human oversight.</p>
          </div>
        </aside>
        <article className="case-content">
          <section className="case-section" id="problem" tabIndex={-1}>
            <p className="eyebrow">
              <span>01</span>The business problem
            </p>
            <h2>
              One process.
              <br />
              Many kinds of input.
            </h2>
            <p>
              Customer requests could arrive as emails, PDFs, Excel files or Word documents. The
              information in these requests had to be interpreted and processed manually as part of
              the quotation workflow.
            </p>
            <div className="document-formats">
              {[
                { name: 'Email', icon: Mail },
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
              Before building the solution, I analysed the current quotation workflow. I discussed
              the existing process, bottlenecks and user needs with relevant stakeholders, including
              the Sales Team Lead.
            </p>
            <div className="editorial-note">
              <span>START WITH THE PROCESS</span>
              <p>
                The technical design followed an understanding of the workflow and the people using
                it.
              </p>
            </div>
          </section>

          <section className="case-section" id="role" tabIndex={-1}>
            <p className="eyebrow">
              <span>02</span>My contribution
            </p>
            <h2>
              From process analysis
              <br />
              to an evaluated prototype.
            </h2>
            <p>
              I worked on the graduation project end to end: understanding the process, designing
              the workflow, implementing the Python solution and evaluating it with representative
              requests.
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
              <span>03</span>The architecture
            </p>
            <h2>
              Flexible interpretation.
              <br />
              Explicit checks.
            </h2>
            <p>
              The pipeline combined LLM-based extraction with deterministic Python validation,
              trusted source data and human review for uncertain results.
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
              <span>04</span>An engineering decision
            </p>
            <h2>
              Why not trust
              <br />
              the LLM directly?
            </h2>
            <p>
              The LLM was useful for extracting information from inconsistent or less structured
              input. But generated output should not automatically be trusted in a quotation-related
              process.
            </p>
            <p>
              I therefore combined LLM extraction with deterministic Python validation and reliable
              source data. Warnings and human-in-the-loop checks kept uncertain results visible and
              available for review.
            </p>
            <div className="trust-chain">
              <div>
                <span>INTERPRET</span>
                <strong>LLM extraction</strong>
              </div>
              <ArrowRight aria-hidden="true" />
              <div>
                <span>CHECK</span>
                <strong>Python + source data</strong>
              </div>
              <ArrowRight aria-hidden="true" />
              <div>
                <span>OVERSEE</span>
                <strong>Warnings + human review</strong>
              </div>
            </div>
            <p className="engineering-conclusion">
              Each part had a clear responsibility: interpret the request, check the information and
              make uncertainty visible.
            </p>
          </section>

          <section className="case-section" id="evaluation" tabIndex={-1}>
            <p className="eyebrow">
              <span>05</span>Model evaluation
            </p>
            <h2>
              Choose the model
              <br />
              for the whole workflow.
            </h2>
            <p>
              I compared multiple Large Language Models and selected the most suitable model based
              on the evaluation. The comparison considered the quality and structure of the output,
              incorrect information and processing time.
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
              <span>06</span>Results & learnings
            </p>
            <h2>
              Less manual processing.
              <br />
              Validation retained.
            </h2>
            <div className="result-panel">
              <p className="eyebrow">EVALUATED PROTOTYPE</p>
              <strong>
                68.8%
                <ArrowDown aria-hidden="true" />
              </strong>
              <h3>Processing-time reduction</h3>
              <p>Across the evaluated test cases</p>
              <div className="result-panel-divider" />
              <p className="result-explanation">
                The prototype demonstrated significant potential for reducing manual processing
                while retaining validation and human oversight.
              </p>
            </div>
            <h3 className="learnings-title">What I learned</h3>
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
              This case study describes the project at a high level. Confidential Siemens data,
              internal systems, source code and customer information are intentionally not included.
            </p>
          </div>
          <div className="case-next">
            <Link className="text-link" to="/#work">
              Explore more work
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
