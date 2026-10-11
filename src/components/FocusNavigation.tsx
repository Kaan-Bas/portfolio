import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { focusAreas, focusUrl, type FocusFilter } from '../data/portfolio'

export function FocusNavigator({ focus }: { focus: FocusFilter }) {
  return (
    <aside className="focus-navigator" aria-labelledby="focus-heading">
      <p className="eyebrow">Vind relevante ervaring</p>
      <h2 id="focus-heading" className="focus-heading">
        Werk per vakgebied
      </h2>
      <p className="focus-introduction">
        Bekijk de projecten en vaardigheden die passen bij jouw vacature.
      </p>
      <nav aria-label="Bekijk werk per vakgebied">
        {focusAreas.map((area, index) => (
          <Link
            key={area.id}
            to={focusUrl(area.id)}
            aria-current={focus === area.id ? 'true' : undefined}
          >
            <span className="focus-number" aria-hidden="true">
              0{index + 1}
            </span>
            <span className="focus-details">
              <strong>{area.title}</strong>
              <span>{area.summary}</span>
              <small>{area.proof}</small>
            </span>
            <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        ))}
      </nav>
      <p className="focus-note">
        <ArrowRight size={14} aria-hidden="true" />
        Kies een vakgebied om mijn werk te bekijken.
      </p>
    </aside>
  )
}

export function FocusFilters({
  focus,
  section = 'work',
}: {
  focus: FocusFilter
  section?: 'work' | 'skills'
}) {
  const options = [{ id: 'all', title: 'Alles' }, ...focusAreas] as const
  return (
    <nav
      className="focus-filters"
      aria-label={`Filter ${section === 'work' ? 'projecten' : 'vaardigheden'} op vakgebied`}
    >
      {options.map((option) => (
        <Link
          key={option.id}
          to={focusUrl(option.id, section)}
          aria-current={focus === option.id ? 'true' : undefined}
        >
          {option.title}
        </Link>
      ))}
    </nav>
  )
}
