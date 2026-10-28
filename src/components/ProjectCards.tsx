import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { featuredProject, projects, projectUrl, type Project } from '../data/portfolio'
import { Tags } from './ui'
import { ProjectGallery } from './ProjectGallery'
import { useFocus } from '../hooks/useFocus'

export function FeaturedProject() {
  const { focus } = useFocus()
  const path = projectUrl(featuredProject.slug, focus)
  return (
    <article className="featured-project">
      <div className="featured-main">
        <div className="project-overline">
          <span>UITGELICHT PROJECT</span>
        </div>
        <div className="featured-copy">
          <p className="company-label">{featuredProject.cardLabel}</p>
          <h3>
            <Link to={path}>{featuredProject.title}</Link>
          </h3>
          <p className="featured-description">{featuredProject.description}</p>
        </div>
        <div className="featured-actions">
          <Tags items={featuredProject.previewTags} areas={featuredProject.focusAreas} />
          <div className="featured-cta">
            <Link className="button button-primary" to={path}>
              Bekijk de casestudy
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
      <div className="featured-preview">
        <ProjectGallery images={featuredProject.images} title={featuredProject.organization} />
        <div className="featured-result">
          <div className="result-label">
            <span className="status-dot" />
            GEMETEN RESULTAAT
          </div>
          <div className="metric">{featuredProject.metric}</div>
          <p>
            Minder verwerkingstijd
            <br />
            <span>bij de geëvalueerde testcases</span>
          </p>
        </div>
      </div>
    </article>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  const { focus } = useFocus()
  const path = projectUrl(project.slug, focus)
  return (
    <article className="project-card">
      <ProjectGallery images={project.images} title={project.title} />
      <div className="project-card-body">
        <div className="project-overline">
          <span>{project.cardLabel ?? project.organization}</span>
        </div>
        <h3>
          <Link to={path}>{project.title}</Link>
        </h3>
        <p className="project-description">{project.description}</p>
        <Tags items={project.previewTags} areas={project.focusAreas} />
        <div className="project-card-bottom">
          <Link to={path} aria-label={`Bekijk project: ${project.title}`}>
            Bekijk project
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export function SelectedProjects({ items = projects }: { items?: Project[] }) {
  return (
    <div
      className={`selected-projects${items.length === 1 ? ' is-single' : ''}`}
      id="project-list"
    >
      {items.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}

