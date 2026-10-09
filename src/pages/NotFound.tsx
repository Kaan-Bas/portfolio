import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main id="main-content" className="not-found container" tabIndex={-1}>
      <p className="eyebrow">ERROR 404</p>
      <div className="not-found-number" aria-hidden="true">
        404<span>+</span>
      </div>
      <h1>This page took a different route.</h1>
      <p>
        The page you’re looking for could not be found.
        <br />
        There’s still plenty of work to explore.
      </p>
      <Link className="button button-primary" to="/">
        Back to the homepage
        <ArrowRight size={17} aria-hidden="true" />
      </Link>
    </main>
  )
}
