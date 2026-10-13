import { ChevronLeft, ChevronRight, ImageIcon, X } from 'lucide-react'
import { useRef, useState } from 'react'
import type { ProjectImage } from '../data/projectImages'

export function ProjectGallery({
  images,
  title,
}: {
  images?: readonly ProjectImage[]
  title: string
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const dialog = useRef<HTMLDialogElement>(null)
  const preview = useRef<HTMLButtonElement>(null)
  const cover = images?.[0]
  const image = images?.[activeIndex] ?? cover

  if (!cover || !image || !images?.length) {
    return (
      <figure className="project-media" aria-label={`Projectbeeld van ${title} volgt`}>
        <div className="project-media-preview">
          <div className="project-media-placeholder">
            <ImageIcon size={36} strokeWidth={1.3} aria-hidden="true" />
            <p>Projectbeeld volgt</p>
          </div>
        </div>
      </figure>
    )
  }

  const imageCount = images.length

  function selectImage(index: number) {
    setActiveIndex(Math.max(0, Math.min(imageCount - 1, index)))
  }

  const navigation = (
    <div
      className="project-gallery-navigation"
      role="group"
      aria-label={`Blader door beelden van ${title}`}
    >
      <button
        className="project-gallery-previous"
        type="button"
        aria-label={`Vorige afbeelding van ${title}`}
        aria-disabled={activeIndex === 0}
        onClick={() => {
          if (activeIndex > 0) selectImage(activeIndex - 1)
        }}
      >
        <ChevronLeft size={24} aria-hidden="true" />
      </button>
      <button
        className="project-gallery-next"
        type="button"
        aria-label={`Volgende afbeelding van ${title}`}
        aria-disabled={activeIndex === imageCount - 1}
        onClick={() => {
          if (activeIndex < imageCount - 1) selectImage(activeIndex + 1)
        }}
      >
        <ChevronRight size={24} aria-hidden="true" />
      </button>
    </div>
  )

  return (
    <>
      <figure className="project-media" aria-label={`Projectbeelden van ${title}`}>
        <div className="project-media-preview">
          <button
            ref={preview}
            className="project-media-stage"
            type="button"
            aria-label={`Open fotogalerij van ${title}`}
            aria-haspopup="dialog"
            onClick={() => {
              setActiveIndex(0)
              dialog.current?.showModal()
            }}
          >
            <img
              src={cover.src}
              alt={cover.alt}
              width={cover.width}
              height={cover.height}
              loading="lazy"
              decoding="async"
            />
          </button>
        </div>
      </figure>

      <dialog
        ref={dialog}
        className="project-image-dialog"
        aria-label={`Projectbeelden van ${title}`}
        onClose={() => preview.current?.focus({ preventScroll: true })}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close()
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault()
            selectImage(activeIndex + (event.key === 'ArrowLeft' ? -1 : 1))
          }
        }}
      >
        <div className="project-image-dialog-header">
          <div>
            <p>{title}</p>
            <span aria-live="polite" aria-atomic="true">
              {image.caption}
            </span>
          </div>
          <button
            type="button"
            aria-label="Afbeelding sluiten"
            onClick={() => dialog.current?.close()}
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <div className="project-image-dialog-stage">
          {navigation}
          <img src={image.src} alt={image.alt} width={image.width} height={image.height} />
        </div>
        <div className="project-image-dialog-footer">
          <span
            className="project-image-count"
            aria-label={`Afbeelding ${activeIndex + 1} van ${imageCount}`}
          >
            {String(activeIndex + 1).padStart(2, '0')} / {String(imageCount).padStart(2, '0')}
          </span>
        </div>
      </dialog>
    </>
  )
}
