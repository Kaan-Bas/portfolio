import { Link } from 'react-router-dom'
import { focusAreas, focusUrl, type FocusFilter } from '../data/portfolio'

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
