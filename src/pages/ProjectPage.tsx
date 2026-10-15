import { ArrowRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { focusUrl, projects, projectUrl } from '../data/portfolio'
import { BackToWork, Tags } from '../components/ui'
import { ProjectVisual } from '../components/Diagrams'
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
  return (
    <main id="main-content" tabIndex={-1}>
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
        <p className="simple-project-context">{project.context}</p>
        <Tags items={project.tags} />
      </section>
      <div className="container simple-project-body">
        <ProjectGallery images={project.images} title={project.title} variant="page" />
        <div className="simple-project-overview">
          <div>
            <p className="eyebrow">Het project</p>
            <h2>{project.overviewTitle}</h2>
            <Tags items={project.topics} />
          </div>
          <p>{project.overview}</p>
        </div>
        {project.visual && (
          <div className="project-page-workflow">
            <ProjectVisual type={project.visual} large />
          </div>
        )}
        <section className="contributions-section">
          <p className="eyebrow">Mijn bijdrage</p>
          <h2>Mijn werk aan het project.</h2>
          <div className="contributions-grid">
            {project.contributions.map((contribution, index) => (
              <article key={contribution.title}>
                <span className="eyebrow">0{index + 1}</span>
                <h3>{contribution.title}</h3>
                <p>{contribution.description}</p>
              </article>
            ))}
          </div>
        </section>
        <div className="project-takeaway">
          <p className="eyebrow">Wat dit project laat zien</p>
          <p>{project.takeaway}</p>
        </div>
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
      </div>
      <Contact />
    </main>
  )
}
