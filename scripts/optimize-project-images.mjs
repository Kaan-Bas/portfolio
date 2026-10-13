// Keeps the supplied PNG originals and creates smaller, full-resolution web previews.
import { chromium } from '@playwright/test'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const mediaDirectory = new URL('../src/media/', import.meta.url)
const outputDirectory = new URL('optimized/', mediaDirectory)
const images = [
  ['siemens-1.png', 'siemens-overview.webp'],
  ['siemens-2.png', 'siemens-pricing.webp'],
  ['idcp-1.png', 'idcp-dashboard.webp'],
  ['idcp-2.png', 'idcp-chatbot.webp'],
]

await mkdir(outputDirectory, { recursive: true })
const browser = await chromium.launch({ headless: true })
try {
  const page = await browser.newPage()
  for (const [source, output] of images) {
    const original = await readFile(new URL(source, mediaDirectory))
    const converted = await page.evaluate(
      async (dataUrl) => {
        const image = new globalThis.Image()
        image.src = dataUrl
        await image.decode()
        const canvas = globalThis.document.createElement('canvas')
        canvas.width = image.naturalWidth
        canvas.height = image.naturalHeight
        canvas.getContext('2d').drawImage(image, 0, 0)
        return {
          dataUrl: canvas.toDataURL('image/webp', 0.92),
          width: canvas.width,
          height: canvas.height,
        }
      },
      `data:image/png;base64,${original.toString('base64')}`,
    )
    const bytes = Buffer.from(converted.dataUrl.split(',')[1], 'base64')
    const destination = new URL(output, outputDirectory)
    await writeFile(destination, bytes)
    console.log(
      `${fileURLToPath(destination)}: ${converted.width}×${converted.height}, ${Math.round(bytes.length / 1024)} KB`,
    )
  }
} finally {
  await browser.close()
}
