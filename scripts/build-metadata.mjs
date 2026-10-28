import { readFile, writeFile } from 'node:fs/promises'

// Hash routes share one HTML entry point. Crawlers receive homepage metadata;
// RouteEffects updates individual project metadata when JavaScript runs.
const pages = JSON.parse(await readFile('src/data/seo.json', 'utf8'))
const source = await readFile('src/data/portfolio.ts', 'utf8')
const siteUrl = (source.match(/siteUrl:\s*'([^']*)'/)?.[1] ?? '').replace(/\/$/, '')
const template = await readFile('dist/index.html', 'utf8')
const escape = (text) =>
  text
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')

for (const route of ['/', '404']) {
  const page = pages[route]
  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(page.title)}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*"/, `$1${escape(page.description)}"`)
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*"/, `$1${escape(page.title)}"`)
    .replace(
      /(<meta\s+property="og:description"\s+content=")[^"]*"/,
      `$1${escape(page.description)}"`,
    )
  if (siteUrl && route !== '404') {
    const url = `${siteUrl}/`
    html = html.replace(
      '</head>',
      `    <link rel="canonical" href="${escape(url)}" />\n    <meta property="og:url" content="${escape(url)}" />\n  </head>`,
    )
    html = html.replace(
      /(<meta\s+property="og:image"\s+content=")[^"]*"/,
      `$1${escape(siteUrl)}/og-image.png"`,
    )
  }
  if (route === '404')
    html = html.replace(
      '</head>',
      '    <meta name="robots" content="noindex, follow" />\n  </head>',
    )
  const output = route === '404' ? 'dist/404.html' : 'dist/index.html'
  await writeFile(output, html)
}
await writeFile(
  'dist/robots.txt',
  `User-agent: *\nAllow: /\n${siteUrl ? `Sitemap: ${siteUrl}/sitemap.xml\n` : ''}`,
)
if (siteUrl) {
  await writeFile(
    'dist/sitemap.xml',
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${escape(`${siteUrl}/`)}</loc></url>\n</urlset>\n`,
  )
}
console.log('Generated homepage metadata and the 404 entry for hash routing.')
