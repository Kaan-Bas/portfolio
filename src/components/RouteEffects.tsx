import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { profile } from '../data/portfolio'
import metadata from '../data/seo.json'

function setMeta(selector: string, attributes: Record<string, string>, value: string) {
  let element = document.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    for (const [key, attribute] of Object.entries(attributes)) element.setAttribute(key, attribute)
    document.head.appendChild(element)
  }
  element.content = value
}

export function RouteEffects() {
  const { pathname, hash, key } = useLocation()
  const previousPath = useRef(pathname)
  useEffect(() => {
    const path = pathname.replace(/\/$/, '') || '/'
    const page = metadata[path as keyof typeof metadata] ?? metadata['404']
    document.title = page.title
    setMeta('meta[name="description"]', { name: 'description' }, page.description)
    setMeta('meta[property="og:title"]', { property: 'og:title' }, page.title)
    setMeta('meta[property="og:description"]', { property: 'og:description' }, page.description)
    setMeta(
      'meta[name="robots"]',
      { name: 'robots' },
      page === metadata['404'] ? 'noindex, follow' : 'index, follow',
    )
    if (profile.siteUrl) {
      const url = `${profile.siteUrl}${path === '/' ? '/' : path}`
      setMeta('meta[property="og:url"]', { property: 'og:url' }, url)
      setMeta(
        'meta[property="og:image"]',
        { property: 'og:image' },
        `${profile.siteUrl}/og-image.png`,
      )
      let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.appendChild(canonical)
      }
      canonical.href = url
    }
    const frame = requestAnimationFrame(() => {
      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)))
        target?.scrollIntoView({ behavior: 'instant' })
        target?.focus({ preventScroll: true })
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' })
        if (previousPath.current !== pathname)
          document.getElementById('main-content')?.focus({ preventScroll: true })
      }
      previousPath.current = pathname
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash, key])
  return null
}
