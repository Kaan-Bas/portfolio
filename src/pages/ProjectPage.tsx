import { ArrowRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { focusUrl, projects, projectUrl } from '../data/portfolio'
import { BackToWork, Tags } from '../components/ui'
import { ProjectVisual, ProjectWorkflow } from '../components/Diagrams'
import { ProjectGallery } from '../components/ProjectGallery'
import { Contact } from '../components/Layout'
import NotFound from './NotFound'
import { useFocus } from '../hooks/useFocus'

export default function ProjectPage() {
  const { slug } = useParams()
  const { focus } = useFocus()
  const project = projects.find((item) => item.slug === slug)
  if (!project) return <NotFound />
  const nextProject = projects.find(
    (item) => item.slug !== slug && (focus === 'all' || item.focusAreas.includes(focus)),
  )
  const sections = [
    {
      id: 'overview',
      label: 'Het project',
      title: project.overviewTitle,
      content: (
        <>
          <p>{project.overview}</p>
          {project.features && (
            <>
              <h3 className="project-case-subheading">Functionaliteit</h3>
              <ul className="project-feature-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </>
          )}
        </>
      ),
    },
    {
      id: 'role',
      label: 'Mijn bijdrage',
      title: 'Mijn werk aan het project.',
      content: (
        <div className="role-groups">
          {project.contributions.map((contribution, index) => (
            <div className="role-group" key={contribution.title}>
              <span className="role-number">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{contribution.title}</h3>
                <p>{contribution.description}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    ...(project.workflow || project.visual
      ? [
          {
            id: 'workflow',
            label: 'De workflow',
            title: project.workflow ? 'De RAG-datastroom.' : 'Van input naar resultaat.',
            content: project.workflow ? (
              <ProjectWorkflow steps={project.workflow.steps} caption={project.workflow.caption} />
            ) : project.visual ? (
              <ProjectVisual type={project.visual} large />
            ) : null,
          },
        ]
      : []),
    {
      id: 'stack',
      label: 'Tech stack',
      title: 'Gebouwd met.',
      content: project.techStack ? (
        <div className="project-tech-grid">
          {project.techStack.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              <Tags items={group.technologies} />
            </div>
          ))}
        </div>
      ) : (
        <Tags items={project.tags} />
      ),
    },
    ...(project.testing
      ? [
          {
            id: 'evaluation',
            label: 'Tests & betrouwbaarheid',
            title: 'Hoe ik de applicatie test.',
            content: (
              <>
                <p>{project.testing.summary}</p>
                <p className="project-testing-note">{project.testing.note}</p>
              </>
            ),
          },
        ]
      : []),
    {
      id: 'insights',
      label: project.considerations ? 'Inzichten & vervolgstappen' : 'Inzichten',
      title: 'Wat dit project laat zien.',
      content: (
        <>
          <p>{project.takeaway}</p>
          {project.considerations && (
            <div className="project-case-followups">
              <h3>Waar ik verder aan wil werken.</h3>
              <dl>
                {project.considerations.map((item) => (
                  <div key={item.title}>
                    <dt>{item.title}</dt>
                    <dd>{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </>
      ),
    },
  ]

  return (
    <main id="main-content" className="project-case-page" tabIndex={-1}>
      <section className="case-hero container simple-project-hero">
        <BackToWork />
        <p className="eyebrow case-eyebrow">
          {project.organization}
          <span className="eyebrow-divider">/</span>{project.projectType}
        </p>
        <h1>
          {project.title}
          <span className="accent">.</span>
        </h1>
        <p className="case-lead">{project.description}</p>
        <div className="case-facts">
          <div>
            <span className="eyebrow">Context</span>
            <p>{project.context}</p>
          </div>
          <div>
            <span className="eyebrow">Focus</span>
            <p>{project.topics.join(' · ')}</p>
          </div>
        </div>
        <Tags items={project.previewTags} />
      </section>
      <div className="container case-gallery">
        <ProjectGallery images={project.images} title={project.title} variant="page" />
      </div>
      <div className="case-body container">
        <aside className="case-sidebar">
          <nav aria-label="Inhoud van de casestudy">
            <span className="eyebrow">In dit project</span>
            {sections.map((section, index) => (
              <Link to={`${projectUrl(project.slug, focus)}#${section.id}`} key={section.id}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {section.label}
              </Link>
            ))}
          </nav>
        </aside>
        <article className="case-content">
          {sections.map((section, index) => (
            <section
              className="case-section"
              id={section.id}
              key={section.id}
              tabIndex={-1}
              aria-labelledby={`${section.id}-title`}
            >
              <p className="eyebrow">
                <span>{String(index + 1).padStart(2, '0')}</span>
                {section.label}
              </p>
              <h2 id={`${section.id}-title`}>{section.title}</h2>
              {section.content}
            </section>
          ))}
          <div className="case-next">
            {nextProject && (
              <Link className="text-link" to={projectUrl(nextProject.slug, focus)}>
                {nextProject.title}
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            )}
            <Link className="text-link" to={focusUrl(focus)}>
              Alle projecten
            </Link>
          </div>
        </article>
      </div>
      <Contact />
    </main>
  )
}
