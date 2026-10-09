import { ArrowRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/portfolio'
import { BackToWork, Tags } from '../components/ui'
import { ProjectVisual } from '../components/Diagrams'
import { Contact } from '../components/Layout'
import NotFound from './NotFound'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  if (!project) return <NotFound />
  const nextProject = projects.find((item) => item.slug !== slug)!
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="case-hero container simple-project-hero">
        <BackToWork />
        <p className="eyebrow case-eyebrow">
          {project.organization}
          <span className="eyebrow-divider">/</span>Minor project
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
        <ProjectVisual type={project.visual} large />
        <div className="simple-project-overview">
          <div>
            <p className="eyebrow">The project</p>
            <h2>
              {project.visual === 'water'
                ? 'From historical data to failure prediction.'
                : 'Connecting user support and recommendations.'}
            </h2>
            <Tags items={project.areas} />
          </div>
          <p>{project.overview}</p>
        </div>
        <section className="contributions-section">
          <p className="eyebrow">My work</p>
          <h2>Putting the pieces together.</h2>
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
          <p className="eyebrow">A connected profile in practice</p>
          <p>{project.takeaway}</p>
        </div>
        <div className="case-next">
          <Link className="text-link" to={`/projects/${nextProject.slug}`}>
            {nextProject.title}
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <Link className="text-link" to="/#work">
            All work
          </Link>
        </div>
      </div>
      <Contact />
    </main>
  )
}
