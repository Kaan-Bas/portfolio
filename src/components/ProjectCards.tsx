import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { experience, featuredProject, projects, projectUrl, type Project } from '../data/portfolio'
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
          <span>2026</span>
        </div>
        <p className="company-label">{featuredProject.organization}</p>
        <h3>
          <Link to={path}>
            {featuredProject.title}
            <ArrowUpRight className="featured-title-arrow" aria-hidden="true" />
          </Link>
        </h3>
        <p className="project-context">{featuredProject.context}</p>
        <p className="featured-description">{featuredProject.description}</p>
        <Tags items={featuredProject.previewTags} />
        <Link className="button button-primary" to={path}>
          Bekijk de casestudy
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
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
      <div className="featured-bottom">
        <div>
          {featuredProject.topics.map((topic, i) => (
            <span key={topic}>
              {i > 0 && <b aria-hidden="true">·</b>}
              {topic}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { focus } = useFocus()
  const path = projectUrl(project.slug, focus)
  return (
    <article className="project-card">
      <ProjectGallery images={project.images} title={project.organization} />
      <div className="project-card-body">
        <div className="project-overline">
          <span>{project.organization}</span>
          <span>0{index + 2}</span>
        </div>
        <h3>
          <Link to={path}>
            {project.title}
            <ArrowUpRight size={22} aria-hidden="true" />
          </Link>
        </h3>
        <p className="project-context">{project.context}</p>
        <p className="project-description">{project.description}</p>
        <Tags items={project.previewTags} />
        <div className="project-card-bottom">
          <span>{project.topics.join(' · ')}</span>
          <Link to={path} aria-label={`Bekijk project: ${project.title}`}>
            Bekijk project
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export function SelectedProjects({ items = projects }: { items?: Project[] }) {
  return (
    <div className={`selected-projects${items.length === 1 ? ' is-single' : ''}`}>
      {items.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  )
}

export function SoftwareExperience() {
  const internship = experience.find((item) => item.company === 'Endeavour')!
  return (
    <article className="software-experience">
      <div className="project-overline">
        <span>
          {internship.type} · {internship.company}
        </span>
        <span>{internship.date}</span>
      </div>
      <p className="company-label">{internship.role}</p>
      <h3>Frontend, backend en API-ontwikkeling</h3>
      <p>{internship.description}</p>
      <Tags items={['Frontend', 'Backend', 'REST APIs', 'Database / CMS']} />
      <Link className="text-link" to="/?focus=software#experience">
        Bekijk mijn werkervaring
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </article>
  )
}
