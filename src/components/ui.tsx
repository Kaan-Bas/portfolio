import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { focusUrl } from '../data/portfolio'
import { useFocus } from '../hooks/useFocus'

export function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span>
          {eyebrow}
        </p>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

export function Tags({ items, className = '' }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={`tags ${className}`} aria-label="Technologieën en aandachtsgebieden">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export function ExternalLink({
  href,
  children,
  className = '',
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  if (!href)
    return (
      <span className={`link-placeholder ${className}`} aria-disabled="true">
        {children}
        <span className="placeholder-note">Link volgt</span>
      </span>
    )
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
      <span className="sr-only"> (opent in een nieuw tabblad)</span>
    </a>
  )
}

export function BackToWork() {
  const { focus } = useFocus()
  return (
    <Link className="back-link" to={focusUrl(focus)}>
      <span aria-hidden="true">←</span> Terug naar projecten
    </Link>
  )
}
