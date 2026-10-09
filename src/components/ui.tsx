import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

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
    <ul className={`tags ${className}`} aria-label="Technologies and focus areas">
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
        <span className="placeholder-note">Link coming soon</span>
      </span>
    )
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

export function BackToWork() {
  return (
    <Link className="back-link" to="/#work">
      <span aria-hidden="true">←</span> Back to work
    </Link>
  )
}
