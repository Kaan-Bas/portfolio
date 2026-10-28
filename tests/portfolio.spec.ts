import { test, expect, type Locator } from '@playwright/test'
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
  '/projects/loods5-webshop',
  '/projects/folio-pdf-knowledge-assistant',
]

const focusPaths = ['/?focus=ai', '/?focus=data', '/?focus=software']

async function expectImageLoaded(image: Locator) {
  await image.scrollIntoViewIfNeeded()
  await expect
    .poll(() =>
      image.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0),
    )
    .toBe(true)
}

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
      route === '/missing-page' ? 'Pagina niet gevonden - Kaan Bas' : /Kaan Bas/,
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
      if (route === '/') {
        await page
          .locator('.hero')
          .screenshot({ path: `.artifacts/hero-${testInfo.project.name}.png` })
      }
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

test('project cards support inline photo navigation and an accessible gallery', async ({
  page,
}, testInfo) => {
  await page.goto('/#work')
  const siemens = page.locator('.featured-project')
  const cover = siemens.getByRole('figure', { name: 'Projectbeelden van Siemens Buildings' })
  const siemensImage = cover.getByRole('img')
  await expectImageLoaded(siemensImage)
  await expect(siemensImage).toHaveAttribute('alt', /validatiestatussen/)
  await expect(cover.locator('figcaption')).toHaveCount(0)
  await expect(cover.getByRole('button')).toHaveCount(3)
  const previousSiemensImage = cover.getByRole('button', {
    name: 'Vorige afbeelding van Siemens Buildings',
  })
  await expect(previousSiemensImage).toBeVisible()
  await expect(previousSiemensImage).toBeEnabled()
  await previousSiemensImage.click()
  await expect(siemensImage).toHaveAttribute('alt', /totaalprijs/)
  await expectImageLoaded(siemensImage)
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await cover.getByRole('button', { name: 'Volgende afbeelding van Siemens Buildings' }).click()
  await expect(siemensImage).toHaveAttribute('alt', /validatiestatussen/)

  const opener = cover.getByRole('button', { name: 'Open fotogalerij van Siemens Buildings' })
  await opener.focus()
  await page.keyboard.press('Enter')
  const imageDialog = page.getByRole('dialog', { name: 'Projectbeelden van Siemens Buildings' })
  await expect(imageDialog).toBeVisible()
  await expect(imageDialog.getByRole('img')).toHaveAttribute('alt', /validatiestatussen/)
  await expect(
    imageDialog.getByRole('button', { name: 'Vorige afbeelding van Siemens Buildings' }),
  ).toBeEnabled()
  await imageDialog.getByRole('button', { name: 'Afbeelding sluiten' }).focus()
  await page.keyboard.press('Tab')
  await expect(
    imageDialog.getByRole('button', { name: 'Vorige afbeelding van Siemens Buildings' }),
  ).toBeFocused()
  await page.keyboard.press('Tab')
  await expect(
    imageDialog.getByRole('button', { name: 'Volgende afbeelding van Siemens Buildings' }),
  ).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(imageDialog.getByRole('img')).toHaveAttribute('alt', /totaalprijs/)
  await expectImageLoaded(imageDialog.getByRole('img'))
  await expect(
    imageDialog.getByRole('button', { name: 'Volgende afbeelding van Siemens Buildings' }),
  ).toBeEnabled()
  await page.keyboard.press('ArrowRight')
  await expect(imageDialog.getByRole('img')).toHaveAttribute('alt', /validatiestatussen/)
  await page.keyboard.press('ArrowLeft')
  await expect(imageDialog.getByRole('img')).toHaveAttribute('alt', /totaalprijs/)

  await page.addScriptTag({ content: axe.source })
  const violations = await page.evaluate(async () => {
    const result = await window.axe.run(document, {
      runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] },
    })
    return result.violations.map((violation) => violation.id)
  })
  expect(violations).toEqual([])
  await imageDialog.screenshot({ path: `.artifacts/project-dialog-${testInfo.project.name}.png` })
  await page.keyboard.press('Escape')
  await expect(imageDialog).toBeHidden()
  await expect(opener).toBeFocused()
  await expect(siemensImage).toHaveAttribute('alt', /totaalprijs/)
  await opener.click()
  await expect(imageDialog.getByRole('img')).toHaveAttribute('alt', /totaalprijs/)
  await page.mouse.click(2, 2)
  await expect(imageDialog).toBeHidden()
  await previousSiemensImage.click()

  await page.getByRole('button', { name: 'Bekijk alle projecten' }).click()
  const idcpTitle = 'LLM-chatbot & hybride aanbevelingssysteem'
  const idcp = page.getByRole('figure', { name: `Projectbeelden van ${idcpTitle}`, exact: true })
  const idcpImage = idcp.getByRole('img')
  await expectImageLoaded(idcpImage)
  await expect(idcpImage).toHaveAttribute('alt', /IDCP-dashboard/)
  await expect(idcp.locator('figcaption')).toHaveCount(0)
  await expect(idcp.getByRole('button')).toHaveCount(3)
  await idcp.getByRole('button', { name: `Volgende afbeelding van ${idcpTitle}` }).click()
  await expect(idcpImage).toHaveAttribute('alt', /IDCP-chatbot/)
  const idcpOpener = idcp.getByRole('button', { name: `Open fotogalerij van ${idcpTitle}` })
  await idcpOpener.click()
  const chatbotDialog = page.getByRole('dialog', {
    name: `Projectbeelden van ${idcpTitle}`,
    exact: true,
  })
  await expect(chatbotDialog).toBeVisible()
  await expect(chatbotDialog.getByRole('img')).toHaveAttribute('alt', /IDCP-chatbot/)
  await expectImageLoaded(chatbotDialog.getByRole('img'))
  await chatbotDialog.getByRole('button', { name: `Vorige afbeelding van ${idcpTitle}` }).click()
  await expect(chatbotDialog.getByRole('img')).toHaveAttribute('alt', /IDCP-dashboard/)
  await page.keyboard.press('ArrowRight')
  await expect(chatbotDialog.getByRole('img')).toHaveAttribute('alt', /IDCP-chatbot/)
  await chatbotDialog.getByRole('button', { name: 'Afbeelding sluiten' }).click()
  await expect(chatbotDialog).toBeHidden()
  await expect(idcpOpener).toBeFocused()
  await expect(idcpImage).toHaveAttribute('alt', /IDCP-chatbot/)
  await idcp.getByRole('button', { name: `Vorige afbeelding van ${idcpTitle}` }).click()
  await expect(idcpImage).toHaveAttribute('alt', /IDCP-dashboard/)

  const loods5 = page.getByRole('figure', { name: 'Projectbeelden van Loods 5-webshop', exact: true })
  const loods5Image = loods5.getByRole('img')
  await expectImageLoaded(loods5Image)
  const initialLoods5Bounds = await loods5.boundingBox()
  await loods5.getByRole('button', { name: 'Volgende afbeelding van Loods 5-webshop' }).click()
  await expect(loods5Image).toHaveAttribute('alt', /Productdetailpagina/)
  await expectImageLoaded(loods5Image)
  const updatedLoods5Bounds = await loods5.boundingBox()
  expect(updatedLoods5Bounds!.height).toBeCloseTo(initialLoods5Bounds!.height, 0)
  await page.keyboard.press('ArrowLeft')
  await expect(loods5Image).toHaveAttribute('alt', /Color House/)

  const placeholder = page.getByRole('figure', {
    name: 'Projectbeeld van Voorspellen van leidingstoringen volgt',
  })
  await expect(placeholder.getByText('Projectbeeld volgt', { exact: true })).toBeVisible()
  await expect(placeholder.getByRole('button')).toHaveCount(0)
  const screenshotStyle = '.site-header, .skip-link { visibility: hidden; }'
  await siemens.screenshot({
    path: `.artifacts/featured-project-${testInfo.project.name}.png`,
    style: screenshotStyle,
  })
  await page.locator('.selected-projects').screenshot({
    path: `.artifacts/selected-projects-${testInfo.project.name}.png`,
    style: screenshotStyle,
  })
})

test('project detail pages show larger previews and navigable photo galleries', async ({
  page,
}, testInfo) => {
  await page.goto('/#work')
  const cardImage = page
    .getByRole('figure', { name: 'Projectbeelden van Loods 5-webshop', exact: true })
    .getByRole('img')
  await expectImageLoaded(cardImage)
  const cardBounds = await cardImage.boundingBox()
  expect(cardBounds).not.toBeNull()

  const galleries = [
    {
      slug: 'siemens-ai-quotation-automation',
      title: 'Offertes automatiseren met AI',
      firstImage: /validatiestatussen/,
      nextImage: /totaalprijs/,
    },
    {
      slug: 'idcp-chatbot-recommendation',
      title: 'LLM-chatbot & hybride aanbevelingssysteem',
      firstImage: /IDCP-dashboard/,
      nextImage: /IDCP-chatbot/,
    },
    {
      slug: 'loods5-webshop',
      title: 'Loods 5-webshop',
      firstImage: /Color House/,
      nextImage: /Productdetailpagina/,
    },
  ]

  for (const { slug, title, firstImage, nextImage } of galleries) {
    await page.goto(`/projects/${slug}`)
    const gallery = page.getByRole('figure', { name: `Projectbeelden van ${title}`, exact: true })
    const previewImage = gallery.getByRole('img')
    await expectImageLoaded(previewImage)
    await expect(previewImage).toHaveAttribute('alt', firstImage)
    if (slug === 'loods5-webshop') {
      const pageBounds = await previewImage.boundingBox()
      expect(pageBounds).not.toBeNull()
      expect(pageBounds!.width).toBeGreaterThan(cardBounds!.width)
    }
    await gallery.screenshot({ path: `.artifacts/gallery-${slug}-${testInfo.project.name}.png` })
    const previousImage = gallery.getByRole('button', { name: `Vorige afbeelding van ${title}` })
    const nextImageButton = gallery.getByRole('button', { name: `Volgende afbeelding van ${title}` })
    await expect(previousImage).toBeVisible()
    await expect(previousImage).toBeEnabled()
    await expect(nextImageButton).toBeVisible()
    const initialBounds = await gallery.boundingBox()
    await previousImage.click()
    await expect(previewImage).toHaveAttribute('alt', nextImage)
    await expectImageLoaded(previewImage)
    await expect(nextImageButton).toBeEnabled()
    await expect(gallery.getByRole('status')).toContainText('Afbeelding 2 van 2')
    await nextImageButton.click()
    await expect(previewImage).toHaveAttribute('alt', firstImage)
    await previousImage.click()
    await expect(previewImage).toHaveAttribute('alt', nextImage)
    const updatedBounds = await gallery.boundingBox()
    expect(updatedBounds!.height).toBeCloseTo(initialBounds!.height, 0)
    const opener = gallery.getByRole('button', { name: `Open fotogalerij van ${title}` })
    await opener.click()
    const dialog = page.getByRole('dialog', { name: `Projectbeelden van ${title}`, exact: true })
    await expect(dialog).toBeVisible()
    await expect(dialog.getByRole('img')).toHaveAttribute('alt', nextImage)
    await expectImageLoaded(dialog.getByRole('img'))
    await page.keyboard.press('ArrowLeft')
    await expect(dialog.getByRole('img')).toHaveAttribute('alt', firstImage)
    await page.keyboard.press('Escape')
    await expect(dialog).toBeHidden()
    await expect(opener).toBeFocused()
    await expect(previewImage).toHaveAttribute('alt', firstImage)
    await page.keyboard.press('ArrowRight')
    await expect(previewImage).toHaveAttribute('alt', nextImage)
    await previousImage.click()
    await expect(previewImage).toHaveAttribute('alt', firstImage)
  }

  await page.goto('/projects/waternet-pipe-failure-prediction')
  const placeholder = page.getByRole('figure', {
    name: 'Projectbeeld van Voorspellen van leidingstoringen volgt',
  })
  await expect(placeholder.getByText('Projectbeeld volgt', { exact: true })).toBeVisible()
  await expect(placeholder.getByRole('button')).toHaveCount(0)
})

test('project case studies offer numbered navigation and shareable section links', async ({
  page,
}, testInfo) => {
  const cases = [
    { slug: 'idcp-chatbot-recommendation', focus: 'ai' },
    { slug: 'waternet-pipe-failure-prediction', focus: 'data' },
    { slug: 'loods5-webshop', focus: 'software' },
    { slug: 'folio-pdf-knowledge-assistant', focus: 'ai' },
  ]

  for (const { slug, focus } of cases) {
    const route = `/projects/${slug}?focus=${focus}`
    await page.goto(route)
    const contents = page.getByRole('navigation', { name: 'Inhoud van de casestudy' })
    await expect(contents).toBeVisible()
    await contents.getByRole('link', { name: /02\s*Mijn bijdrage/ }).click()
    await expect(page).toHaveURL(`${route}#role`)
    await expect(page.locator('#role')).toBeFocused()
    await expect(
      page.locator('#role').getByRole('heading', { name: 'Mijn werk aan het project.' }),
    ).toBeVisible()
    await page.reload()
    await expect(page.locator('#role')).toBeFocused()
    await contents.getByRole('link', { name: /Tech stack/ }).click()
    await expect(page).toHaveURL(`${route}#stack`)
    await expect(page.locator('#stack')).toBeFocused()
    await expect(page.locator('#stack').getByRole('heading', { name: 'Gebouwd met.' })).toBeVisible()
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
    await page.screenshot({
      path: `.artifacts/case-${slug}-${testInfo.project.name}.png`,
      fullPage: true,
    })
  }
})

test('Folio is discoverable through the overview and relevant filters with an honest case study', async ({
  page,
}, testInfo) => {
  const title = 'Folio'
  await page.goto('/#work')
  const work = page.locator('#work')
  const card = work.locator('.project-card').filter({
    has: page.getByRole('heading', { name: title, exact: true }),
  })
  await expect(card).toBeVisible()
  await expect(card.getByText('RAG', { exact: true })).toBeVisible()
  await expect(card.getByText('AI-agents', { exact: true })).toBeVisible()
  await expect(card.getByText('Tool calling', { exact: true })).toBeVisible()
  await expect(card.locator('.project-description')).toContainText('fictieve bedrijfsgegevens')

  const filters = work.getByRole('navigation', { name: 'Filter projecten op vakgebied' })
  for (const area of ['AI Engineering', 'Software Engineering']) {
    await filters.getByRole('link', { name: area, exact: true }).click()
    await expect(card).toBeVisible()
  }
  await card.getByRole('link', { name: `Bekijk project: ${title}` }).click()
  await expect(page).toHaveURL('/projects/folio-pdf-knowledge-assistant?focus=software')
  await expect(page).toHaveTitle('Folio - Agentic AI & Document Intelligence Platform - Kaan Bas')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(`${title}.`)
  const gallery = page.getByRole('figure', { name: `Projectbeelden van ${title}`, exact: true })
  const previewImage = gallery.getByRole('img')
  await expectImageLoaded(previewImage)
  await expect(previewImage).toHaveAttribute('alt', /Folio-startscherm/)
  const workflow = page.getByRole('figure', { name: 'Gegevensstroom van het project' })
  await expect(workflow.getByRole('heading')).toHaveText([
    'PDF-upload',
    'Tekst per pagina',
    'Chunking',
    'Lokale embeddings',
    'FAISS vector search',
    'Hybride contextselectie',
    'LLM-antwoord',
    'Antwoord met bronnen',
  ])
  await page
    .getByRole('navigation', { name: 'Inhoud van de casestudy' })
    .getByRole('link', { name: /Agents & tools/ })
    .click()
  await expect(page).toHaveURL('/projects/folio-pdf-knowledge-assistant?focus=software#agents')
  await expect(page.locator('#agents')).toBeFocused()
  await expect(page.locator('.project-agent-grid h3')).toHaveText([
    'Documentvergelijking',
    'Retourbeoordeling',
    'Factuurverwerking',
    'Klantenservice',
  ])
  const agentWorkflow = page.getByRole('figure', { name: 'Tool-calling-loop van de agents' })
  await expect(agentWorkflow).toContainText('geen multi-agentorkestratie')
  await expect(agentWorkflow).toContainText('voeren geen betalingen uit')
  await page.reload()
  await expect(page.locator('#agents')).toBeFocused()
  const stack = page.getByRole('region', { name: 'Gebouwd met.' })
  await expect(stack.getByText('intfloat/multilingual-e5-small', { exact: true })).toBeVisible()
  await expect(stack.getByText('FastAPI', { exact: true })).toBeVisible()
  const testing = page.getByRole('region', { name: 'Hoe ik de applicatie test.' })
  await expect(testing).toContainText('28 oktober 2026')
  await expect(testing).toContainText('284 backendtests en 83 frontendtests')
  await expect(testing).toContainText('geen live LLM-requests uitgevoerd')
  await expect(page.locator('.project-case-page .case-content a[href^="http"]')).toHaveCount(0)
  await page.screenshot({ path: `.artifacts/folio-${testInfo.project.name}.png`, fullPage: true })
  await page.getByRole('link', { name: 'Terug naar projecten' }).click()
  await expect(page).toHaveURL('/?focus=software#work')
  await expect(card).toBeVisible()
})

test('recruiters can choose a discipline, reload it and reset the view', async ({
  page,
  isMobile,
}, testInfo) => {
  await page.goto('/')
  const initialProjectCard = page.locator('#work .selected-projects .project-card').first()
  await expect(initialProjectCard).toBeVisible()
  const initialProjectCardBounds = await initialProjectCard.boundingBox()
  expect(initialProjectCardBounds).not.toBeNull()
  const normalProjectCardWidth = initialProjectCardBounds!.width
  await expect(page.locator('#work .selected-projects .project-card')).toHaveCount(2)
  await expect(page.locator('#work .selected-projects .project-card h3')).toHaveText([
    'Folio',
    'Loods 5-webshop',
  ])
  await expect(page.getByRole('heading', { name: 'LLM-chatbot & hybride aanbevelingssysteem' })).toHaveCount(0)
  await expect(page.getByRole('heading', { name: 'Loods 5-webshop' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Voorspellen van leidingstoringen' })).toHaveCount(0)
  const expandProjects = page.locator('#work .projects-toggle')
  await expandProjects.click()
  await expect(expandProjects).toHaveAttribute('aria-expanded', 'true')
  await expect(page.getByRole('heading', { name: 'Voorspellen van leidingstoringen' })).toBeVisible()
  await expect(page.locator('#work .selected-projects .project-card h3')).toHaveText([
    'Folio',
    'Loods 5-webshop',
    'LLM-chatbot & hybride aanbevelingssysteem',
    'Voorspellen van leidingstoringen',
  ])
  await page.getByRole('button', { name: 'Toon minder projecten' }).click()
  await expect(page.getByRole('heading', { name: 'Voorspellen van leidingstoringen' })).toHaveCount(0)
  await page.getByRole('link', { name: 'Bekijk dataprojecten', exact: true }).click()
  await expect(page).toHaveURL(/\?focus=data#work$/)
  await expect(page).toHaveTitle('Kaan Bas')
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
  const dataProjectCardBounds = await work.locator('.selected-projects .project-card').first().boundingBox()
  expect(dataProjectCardBounds).not.toBeNull()
  expect(dataProjectCardBounds!.width).toBeCloseTo(normalProjectCardWidth, 0)
  await work.screenshot({ path: `.artifacts/focus-data-${testInfo.project.name}.png` })
  await work
    .getByRole('link', { name: 'Bekijk project: Voorspellen van leidingstoringen', exact: true })
    .click()
  await expect(page).toHaveURL(/waternet-pipe-failure-prediction\?focus=data$/)
  await page.getByRole('link', { name: 'Terug naar projecten' }).click()
  await expect(page).toHaveURL(/\?focus=data#work$/)
  await expect(work.getByRole('link', { name: 'Bekijk de casestudy' })).toHaveCount(0)

  await projectFilters.getByRole('link', { name: 'Software Engineering', exact: true }).click()
  await expect(work.getByRole('heading', { name: 'Projecten', exact: true })).toBeVisible()
  await expect(work.getByText(/Software Developer .*Stage/)).toHaveCount(0)
  await expect(work.getByRole('heading', { name: 'Loods 5-webshop' })).toBeVisible()
  await expect(work.getByText(/Als onderdeel van het team bij Endeavour/)).toBeVisible()
  const softwareProjectCard = work.locator('.selected-projects .project-card').filter({
    has: page.getByRole('heading', { name: 'Loods 5-webshop', exact: true }),
  })
  const softwareProjectCardBounds = await softwareProjectCard.boundingBox()
  expect(softwareProjectCardBounds).not.toBeNull()
  expect(softwareProjectCardBounds!.width).toBeCloseTo(normalProjectCardWidth, 0)
  await work.getByRole('button', { name: 'Open fotogalerij van Loods 5-webshop' }).click()
  const loods5Gallery = page.getByRole('dialog', { name: 'Projectbeelden van Loods 5-webshop' })
  await expect(loods5Gallery.getByText('Webshop homepage')).toBeVisible()
  await loods5Gallery.getByRole('button', { name: 'Volgende afbeelding van Loods 5-webshop' }).click()
  await expect(loods5Gallery.getByText('Productpagina')).toBeVisible()
  await loods5Gallery.getByRole('button', { name: 'Afbeelding sluiten' }).click()
  await work.getByRole('link', { name: 'Bekijk project: Loods 5-webshop' }).click()
  await expect(page).toHaveURL(/loods5-webshop\?focus=software$/)
  await expect(page.getByRole('heading', { name: /^Loods 5-webshop/ })).toBeVisible()
  await expect(page.locator('.case-eyebrow')).toContainText('Stageproject')
  await expect(page.getByRole('heading', { name: 'Mijn werk aan het project.' })).toBeVisible()
  await page.getByRole('link', { name: 'Terug naar projecten' }).click()
  await expect(page).toHaveURL(/\?focus=software#work$/)
  await expect(
    skills.getByRole('heading', { name: 'Software Engineering', exact: true }),
  ).toBeVisible()
  await page.goto('/?focus=software#experience')
  await expect(
    page.locator('#experience').getByRole('heading', { name: 'Endeavour' }),
  ).toBeVisible()

  await projectFilters.getByRole('link', { name: 'AI Engineering', exact: true }).click()
  await expect(work.getByRole('link', { name: 'Bekijk de casestudy' })).toBeVisible()
  const aiProjectCard = work.locator('.selected-projects .project-card').filter({
    has: page.getByRole('heading', { name: 'LLM-chatbot & hybride aanbevelingssysteem', exact: true }),
  })
  const aiProjectCardBounds = await aiProjectCard.boundingBox()
  expect(aiProjectCardBounds).not.toBeNull()
  expect(aiProjectCardBounds!.width).toBeCloseTo(normalProjectCardWidth, 0)
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
  await expect(skills.getByRole('heading', { level: 3 })).toHaveCount(3)
  await expect(work.getByRole('heading', { name: 'Voorspellen van leidingstoringen' })).toHaveCount(
    0,
  )
  await page.goBack()
  await expect(page).toHaveURL(/\?focus=ai#skills$/)
  await expect(skills.getByRole('heading', { level: 3 })).toHaveCount(1)
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
  expect(html).toContain('<title>Offertes automatiseren met AI · Siemens - Kaan Bas</title>')
  expect(html).toContain(
    'property="og:title" content="Offertes automatiseren met AI · Siemens - Kaan Bas"',
  )
  expect(html).toMatch(/name="description"\s+content="Een afstudeerproject bij Siemens/)
  expect(html).toContain('property="og:locale" content="nl_NL"')
  const folioHtml = await readFile('dist/projects/folio-pdf-knowledge-assistant/index.html', 'utf8')
  expect(folioHtml).toContain('<title>Folio - Agentic AI &amp; Document Intelligence Platform - Kaan Bas</title>')
  expect(folioHtml).toContain('property="og:title" content="Folio - Agentic AI &amp; Document Intelligence Platform - Kaan Bas"')
  expect(folioHtml).toMatch(/name="description"\s+content="Folio is een Agentic AI/)
})
