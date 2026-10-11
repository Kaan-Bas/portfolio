import { useSearchParams } from 'react-router-dom'
import { focusAreas } from '../data/portfolio'

export function useFocus() {
  const [searchParams] = useSearchParams()
  const selectedArea = focusAreas.find((area) => area.id === searchParams.get('focus'))
  return { focus: selectedArea?.id ?? 'all', selectedArea } as const
}
