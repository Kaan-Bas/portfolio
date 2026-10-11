import { useId } from 'react'

/** Decorative coding motif; the shapes do not represent a project or actual source code. */
export function CodeVisual() {
  const id = useId()

  return (
    <div className="code-visual" aria-hidden="true">
      <svg viewBox="0 0 480 440" focusable="false">
        <defs>
          <pattern id={`${id}-dots`} width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="12" cy="12" r="1" fill="var(--muted)" opacity=".22" />
          </pattern>
        </defs>
        <rect x="32" y="32" width="416" height="384" fill={`url(#${id}-dots)`} />
        <circle cx="244" cy="218" r="177" fill="none" stroke="var(--line)" opacity=".6" />
        <path
          d="M405 115a190 190 0 0 1 9 191"
          fill="none"
          stroke="var(--accent-line)"
          strokeWidth="1.5"
        />

        <g transform="rotate(8 259 215)">
          <rect
            x="137"
            y="89"
            width="244"
            height="252"
            rx="17"
            fill="var(--paper)"
            stroke="var(--line)"
          />
          <path d="M157 109h204M361 109v29" fill="none" stroke="var(--accent-line)" />
        </g>

        <g transform="rotate(-6 217 212)">
          <rect
            x="67"
            y="89"
            width="300"
            height="246"
            rx="17"
            fill="var(--surface-soft)"
            stroke="var(--accent-line)"
            strokeWidth="1.3"
          />
          <path d="M67 129h300" stroke="var(--line)" />
          <g fill="var(--accent)">
            <circle cx="89" cy="109" r="3" />
            <circle cx="101" cy="109" r="3" opacity=".55" />
            <circle cx="113" cy="109" r="3" opacity=".25" />
          </g>
          <path d="M312 109h32" stroke="var(--line)" strokeWidth="3" strokeLinecap="round" />
          <g
            fill="none"
            stroke="var(--accent)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M178 166l-36 36 36 36M256 166l36 36-36 36" />
            <path d="M231 156l-28 94" opacity=".65" />
          </g>
          <g strokeWidth="4" strokeLinecap="round">
            <path d="M96 279h37M110 296h22" stroke="var(--accent)" opacity=".5" />
            <path d="M149 279h79M149 296h112M96 313h59" stroke="var(--line)" />
          </g>
        </g>

        <g transform="rotate(12 381 94)">
          <rect
            x="350"
            y="63"
            width="62"
            height="62"
            rx="14"
            fill="var(--accent-surface)"
            stroke="var(--accent-line)"
          />
          <g
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M373 84h-7v20h7M389 84h7v20h-7M384 82l-6 24" />
          </g>
        </g>
        <g transform="rotate(6 351 350)">
          <rect
            x="309"
            y="312"
            width="84"
            height="76"
            rx="16"
            fill="var(--surface-soft)"
            stroke="var(--accent-line)"
          />
          <g fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round">
            <path d="M339 332h-4q-6 0-6 7v4q0 7-6 7 6 0 6 7v4q0 7 6 7h4" />
            <path d="M363 332h4q6 0 6 7v4q0 7 6 7-6 0-6 7v4q0 7-6 7h-4" />
          </g>
        </g>
        <circle cx="57" cy="300" r="4" fill="var(--accent)" opacity=".65" />
        <circle cx="140" cy="380" r="3" fill="var(--accent)" opacity=".35" />
        <circle cx="425" cy="245" r="4" fill="var(--paper)" stroke="var(--accent-line)" />
        <path d="M77 67h10M82 62v10" stroke="var(--accent)" strokeLinecap="round" opacity=".5" />
      </svg>
    </div>
  )
}
