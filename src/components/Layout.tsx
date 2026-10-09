import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navigation, profile } from '../data/portfolio'
import { ExternalLink } from './ui'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  const menu = useRef<HTMLElement>(null)
  const location = useLocation()
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggle.current?.focus()
      }
    }
    const onPointerDown = (event: PointerEvent) => {
      if (
        !menu.current?.contains(event.target as Node) &&
        !toggle.current?.contains(event.target as Node)
      )
        setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [menuOpen])
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link className="wordmark" to="/" onClick={() => setMenuOpen(false)}>
          {profile.name}
          <span aria-hidden="true">.</span>
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={menuOpen ? 'Navigatie sluiten' : 'Navigatie openen'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav
          ref={menu}
          id="primary-navigation"
          className={menuOpen ? 'nav-links is-open' : 'nav-links'}
          aria-label="Hoofdnavigatie"
        >
          {navigation.map(({ label, id }) => (
            <Link
              key={id}
              className={id === 'contact' ? 'nav-contact' : ''}
              to={`/#${id}`}
              aria-current={location.hash === `#${id}` ? 'location' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
              {id === 'contact' && <ArrowUpRight size={14} aria-hidden="true" />}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export function Contact() {
  return (
    <section className="contact-section" id="contact" tabIndex={-1}>
      <div className="container contact-inner">
        <div>
          <p className="eyebrow">
            <span className="status-dot" />
            Neem contact op
          </p>
          <h2>
            Goed werk begint
            <br />
            met een gesprek<span className="accent">.</span>
          </h2>
          <p>
            In gesprek over AI, software of data?
            <br />
            Ik zoek een startende engineeringfunctie waarin ik kan blijven leren en bruikbare
            oplossingen kan bouwen.
          </p>
        </div>
        <div className="contact-links">
          {profile.email ? (
            <a href={`mailto:${profile.email}`}>
              <span>
                <small>E-mail</small>
                {profile.email}
              </span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          ) : (
            <div className="contact-placeholder">
              <span>
                <small>E-mail</small>E-mailadres volgt
              </span>
            </div>
          )}
          <ExternalLink href={profile.linkedin}>
            <span>
              <small>Verbinden</small>LinkedIn
            </span>
          </ExternalLink>
          {profile.github && (
            <ExternalLink href={profile.github}>
              <span>
                <small>Code</small>GitHub
              </span>
            </ExternalLink>
          )}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link className="wordmark" to="/">
          {profile.name}
          <span aria-hidden="true">.</span>
        </Link>
        <p>AI. Software. Data. Eén samenhangende aanpak.</p>
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
      </div>
    </footer>
  )
}
