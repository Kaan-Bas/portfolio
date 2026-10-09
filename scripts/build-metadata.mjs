import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

// Static route entry points let link previews read metadata without running JavaScript.
// React Router still renders the same application on each route.
const pages = JSON.parse(await readFile('src/data/seo.json', 'utf8'))
const source = await readFile('src/data/portfolio.ts', 'utf8')
const siteUrl = source.match(/siteUrl:\s*'([^']*)'/)?.[1] ?? ''
const template = await readFile('dist/index.html', 'utf8')
const escape = (text) =>
  text
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')

for (const [route, page] of Object.entries(pages)) {
  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(page.title)}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*"/, `$1${escape(page.description)}"`)
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*"/, `$1${escape(page.title)}"`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*"/, `$1${escape(page.description)}"`)
  if (siteUrl && route !== '404') {
    const url = `${siteUrl}${route}`
    html = html.replace(
      '</head>',
      `    <link rel="canonical" href="${escape(url)}" />\n    <meta property="og:url" content="${escape(url)}" />\n  </head>`,
    )
    html = html.replace('content="/og-image.png"', `content="${escape(siteUrl)}/og-image.png"`)
  }
  if (route === '404')
    html = html.replace(
      '</head>',
      '    <meta name="robots" content="noindex, follow" />\n  </head>',
    )
  const output = route === '404' ? 'dist/404.html' : path.join('dist', route, 'index.html')
  await mkdir(path.dirname(output), { recursive: true })
  await writeFile(output, html)
}
await writeFile('dist/_redirects', '/* /index.html 200\n')
await writeFile(
  'dist/robots.txt',
  `User-agent: *\nAllow: /\n${siteUrl ? `Sitemap: ${siteUrl}/sitemap.xml\n` : ''}`,
)
if (siteUrl) {
  const urls = Object.keys(pages)
    .filter((route) => route !== '404')
    .map((route) => `  <url><loc>${escape(`${siteUrl}${route}`)}</loc></url>`)
  await writeFile(
    'dist/sitemap.xml',
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
  )
}
console.log(`Generated static metadata for ${Object.keys(pages).length} pages.`)
