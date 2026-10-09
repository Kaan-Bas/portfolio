import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main id="main-content" className="not-found container" tabIndex={-1}>
      <p className="eyebrow">FOUT 404</p>
      <div className="not-found-number" aria-hidden="true">
        404<span>+</span>
      </div>
      <h1>Deze pagina is niet gevonden.</h1>
      <p>
        De pagina die je zoekt is niet beschikbaar.
        <br />
        Bekijk mijn projecten of ga terug naar de homepage.
      </p>
      <Link className="button button-primary" to="/">
        Terug naar de homepage
        <ArrowRight size={17} aria-hidden="true" />
      </Link>
    </main>
  )
}
