import { test, expect } from '@playwright/test'
import axe from 'axe-core'
import { readFile } from 'node:fs/promises'

declare global {
  interface Window {
    axe: typeof axe
  }
}

const projectPaths = [
  '/projects/siemens-ai-quotation-automation',
  '/projects/idcp-chatbot-recommendation',
  '/projects/waternet-pipe-failure-prediction',
]

const focusPaths = ['/?focus=ai', '/?focus=data', '/?focus=software']

test('recruiter flow: homepage → Siemens → work → contact', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Kaan Bas.' })).toBeVisible()
  await page.getByRole('link', { name: 'Bekijk mijn projecten' }).click()
  await expect(page).toHaveURL(/#work$/)
  await page.getByRole('link', { name: 'Bekijk de casestudy', exact: true }).click()
  await expect(page).toHaveURL(/siemens-ai-quotation-automation$/)
  await expect(page.getByRole('heading', { name: 'Offertes automatiseren met AI.' })).toBeVisible()
  await page.getByRole('link', { name: '03 De workflow' }).click()
  await expect(page.getByText('Documentverwerking / parsing', { exact: true })).toBeVisible()
  await page.getByRole('link', { name: 'Terug naar projecten' }).click()
  await expect(page.getByRole('heading', { name: 'Projecten', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: 'kaan.bas762@gmail.com' })).toHaveAttribute(
    'href',
    'mailto:kaan.bas762@gmail.com',
  )
  await expect(page.getByRole('link', { name: 'Verbinden LinkedIn' })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/kaan-bas-62225a420',
  )
})

test('pages load directly with correct titles and no horizontal overflow', async ({
  page,
}, testInfo) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  for (const route of ['/', ...focusPaths, '/?focus=unknown', ...projectPaths, '/missing-page']) {
    await page.goto(route)
    await expect(page.locator('html')).toHaveAttribute('lang', 'nl')
    await expect(page.locator('main h1')).toHaveCount(1)
    await expect(page).toHaveTitle(
      route === '/missing-page' ? 'Pagina niet gevonden — Kaan Bas' : /Kaan Bas/,
    )
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    )
    expect(overflow, `Horizontal overflow on ${route}`).toBe(false)
    if (route === '/' || route === projectPaths[0]) {
      await page.screenshot({
        path: `.artifacts/${route === '/' ? 'home' : 'siemens'}-${testInfo.project.name}.png`,
        fullPage: true,
      })
    }
  }
  expect(errors).toEqual([])
  await page.getByRole('link', { name: 'Terug naar de homepage' }).click()
  await expect(page).toHaveURL('/')
})

test('keyboard skip link and mobile navigation', async ({ page, isMobile }) => {
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Ga naar de inhoud' })).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('main')).toBeFocused()
  if (isMobile) {
    const toggle = page.getByRole('button', { name: 'Navigatie openen' })
    await toggle.click()
    await expect(page.getByRole('navigation', { name: 'Hoofdnavigatie' })).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(toggle).toBeFocused()
    await toggle.click()
    await page
      .getByRole('navigation', { name: 'Hoofdnavigatie' })
      .getByRole('link', { name: 'Vaardigheden' })
      .click()
    await expect(page.getByRole('heading', { name: 'Vaardigheden', exact: true })).toBeVisible()
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
  }
})

test('recruiters can choose a discipline, reload it and reset the view', async ({
  page,
  isMobile,
}, testInfo) => {
  await page.goto('/')
  await page
    .getByRole('navigation', { name: 'Bekijk werk per vakgebied' })
    .getByRole('link', { name: /Data & Machine Learning/ })
    .click()
  await expect(page).toHaveURL(/\?focus=data#work$/)
  await expect(page).toHaveTitle('Data & Machine Learning — Kaan Bas')
  const work = page.locator('#work')
  const skills = page.locator('#skills')
  const projectFilters = page.getByRole('navigation', { name: 'Filter projecten op vakgebied' })
  await expect(work.getByRole('heading', { level: 3 }).first()).toHaveText(
    'Voorspellen van leidingstoringen',
  )
  await expect(work.getByRole('link', { name: 'Bekijk de casestudy' })).toHaveCount(0)
  await expect(skills.getByRole('heading', { level: 3 })).toHaveCount(1)
  await expect(skills.getByRole('heading', { name: 'Data & Machine Learning' })).toBeVisible()
  await page.reload()
  await expect(
    projectFilters.getByRole('link', { name: 'Data & Machine Learning' }),
  ).toHaveAttribute('aria-current', 'true')
  await work.screenshot({ path: `.artifacts/focus-data-${testInfo.project.name}.png` })
  await work
    .getByRole('link', { name: 'Bekijk project: Voorspellen van leidingstoringen', exact: true })
    .click()
  await expect(page).toHaveURL(/waternet-pipe-failure-prediction\?focus=data$/)
  await page.getByRole('link', { name: 'Terug naar projecten' }).click()
  await expect(page).toHaveURL(/\?focus=data#work$/)
  await expect(work.getByRole('link', { name: 'Bekijk de casestudy' })).toHaveCount(0)

  await projectFilters.getByRole('link', { name: 'Software Engineering', exact: true }).click()
  await expect(work.getByRole('heading', { name: 'Praktijkervaring' })).toBeVisible()
  await expect(work.getByText('Stage · Endeavour')).toBeVisible()
  await expect(
    work.getByRole('heading', { name: 'Frontend, backend en API-ontwikkeling' }),
  ).toBeVisible()
  await expect(
    skills.getByRole('heading', { name: 'Software Engineering', exact: true }),
  ).toBeVisible()
  await work.getByRole('link', { name: 'Bekijk mijn werkervaring' }).click()
  await expect(page).toHaveURL(/\?focus=software#experience$/)
  await expect(
    page.locator('#experience').getByRole('heading', { name: 'Endeavour' }),
  ).toBeVisible()

  await projectFilters.getByRole('link', { name: 'AI Engineering', exact: true }).click()
  await expect(work.getByRole('link', { name: 'Bekijk de casestudy' })).toBeVisible()
  await expect(
    work.getByRole('heading', { name: 'LLM-chatbot & hybride aanbevelingssysteem' }),
  ).toBeVisible()
  await expect(work.getByRole('heading', { name: 'Voorspellen van leidingstoringen' })).toHaveCount(
    0,
  )
  await work.getByRole('link', { name: 'Bekijk de casestudy' }).click()
  await expect(page).toHaveURL(/siemens-ai-quotation-automation\?focus=ai$/)
  await page.getByRole('link', { name: '03 De workflow' }).click()
  await expect(page).toHaveURL(/\?focus=ai#architecture$/)
  await page.getByRole('link', { name: 'Terug naar projecten' }).click()
  await expect(page).toHaveURL(/\?focus=ai#work$/)
  await expect(work.getByRole('heading', { name: 'Voorspellen van leidingstoringen' })).toHaveCount(
    0,
  )
  if (isMobile) await page.getByRole('button', { name: 'Navigatie openen' }).click()
  await page
    .getByRole('navigation', { name: 'Hoofdnavigatie' })
    .getByRole('link', { name: 'Vaardigheden' })
    .click()
  await expect(page).toHaveURL(/\?focus=ai#skills$/)
  await expect(skills.getByRole('heading', { name: 'AI Engineering', exact: true })).toBeVisible()

  await page
    .getByRole('navigation', { name: 'Filter vaardigheden op vakgebied' })
    .getByRole('link', { name: 'Alles', exact: true })
    .click()
  await expect(page).toHaveURL('/#skills')
  await expect(skills.getByRole('heading', { level: 3 })).toHaveCount(4)
  await expect(work.getByRole('heading', { name: 'Voorspellen van leidingstoringen' })).toHaveCount(
    1,
  )
  await page.goBack()
  await expect(page).toHaveURL(/\?focus=ai#skills$/)
  await expect(skills.getByRole('heading', { level: 3 })).toHaveCount(2)
})

test('all portfolio pages have no WCAG A/AA violations', async ({ page }) => {
  const issues = []
  for (const route of ['/', ...focusPaths, ...projectPaths]) {
    await page.goto(route)
    await page.addScriptTag({ content: axe.source })
    const violations = await page.evaluate(async () => {
      const result = await window.axe.run(document, {
        runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] },
      })
      return result.violations.map((violation) => ({
        id: violation.id,
        nodes: violation.nodes.map((node) => ({
          target: node.target,
          summary: node.failureSummary,
        })),
      }))
    })
    if (violations.length) issues.push({ route, violations })
  }
  expect(issues).toEqual([])
})

test('production route HTML includes metadata before JavaScript runs', async () => {
  const html = await readFile('dist/projects/siemens-ai-quotation-automation/index.html', 'utf8')
  expect(html).toContain('<title>Offertes automatiseren met AI · Siemens — Kaan Bas</title>')
  expect(html).toContain(
    'property="og:title" content="Offertes automatiseren met AI · Siemens — Kaan Bas"',
  )
  expect(html).toMatch(/name="description"\s+content="Een afstudeerproject bij Siemens/)
  expect(html).toContain('property="og:locale" content="nl_NL"')
})
