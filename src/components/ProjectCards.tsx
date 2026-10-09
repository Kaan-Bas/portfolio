import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { featuredProject, projects, type Project } from '../data/portfolio'
import { FeaturedWorkflow, ProjectVisual } from './Diagrams'
import { Tags } from './ui'

export function FeaturedProject() {
  return (
    <article className="featured-project">
      <div className="featured-main">
        <div className="project-overline">
          <span>FEATURED CASE STUDY</span>
          <span>2026</span>
        </div>
        <p className="company-label">{featuredProject.organization}</p>
        <h3>
          <Link to={`/projects/${featuredProject.slug}`}>
            {featuredProject.title}
            <ArrowUpRight className="featured-title-arrow" aria-hidden="true" />
          </Link>
        </h3>
        <p className="project-context">{featuredProject.context}</p>
        <p className="featured-description">{featuredProject.description}</p>
        <Tags items={featuredProject.tags} />
        <Link className="button button-light" to={`/projects/${featuredProject.slug}`}>
          View case study
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
      <div className="featured-result">
        <div className="result-label">
          <span className="status-dot" />
          EVALUATED IMPACT
        </div>
        <div className="metric">
          {featuredProject.metric}
          <span aria-hidden="true">↘</span>
        </div>
        <p>
          Reduction in processing time
          <br />
          <span>across the evaluated test cases</span>
        </p>
        <FeaturedWorkflow />
      </div>
      <div className="featured-bottom">
        <span>ONE CONNECTED SOLUTION</span>
        <div>
          {featuredProject.areas.map((area, i) => (
            <span key={area}>
              {i > 0 && <b aria-hidden="true">+</b>}
              {area}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <Link
        className="project-image-link"
        tabIndex={-1}
        aria-hidden="true"
        to={`/projects/${project.slug}`}
      >
        <ProjectVisual type={project.visual} />
      </Link>
      <div className="project-card-body">
        <div className="project-overline">
          <span>{project.organization}</span>
          <span>0{index + 2}</span>
        </div>
        <h3>
          <Link to={`/projects/${project.slug}`}>
            {project.title}
            <ArrowUpRight size={22} aria-hidden="true" />
          </Link>
        </h3>
        <p className="project-context">{project.context}</p>
        <p className="project-description">{project.description}</p>
        <Tags items={project.tags} />
        <div className="project-card-bottom">
          <span>{project.areas.join(' + ')}</span>
          <Link to={`/projects/${project.slug}`} aria-label={`View project: ${project.title}`}>
            View project
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export function SelectedProjects() {
  return (
    <div className="selected-projects">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  )
}
