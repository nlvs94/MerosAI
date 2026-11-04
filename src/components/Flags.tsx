type FlagProps = {
  className?: string
}

export function UzFlag({ className = '' }: FlagProps) {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      className={`rounded-[2px] ${className}`}
      aria-hidden="true"
    >
      <rect width="22" height="16" fill="#1EB53A" />
      <rect width="22" height="10.67" fill="#0099B5" />
      <rect width="22" height="9.33" y="0.67" fill="#FFFFFF" />
      <rect width="22" height="8" y="1.33" fill="#0099B5" />
      <rect width="22" height="1.2" y="1.33" fill="#CE1126" />
      <rect width="22" height="8" y="2.53" fill="#FFFFFF" />
      <rect width="22" height="1.2" y="9.33" fill="#CE1126" />
      <g fill="#FFFFFF">
        <circle cx="4.6" cy="4.5" r="1.9" />
        <circle cx="5.3" cy="4.1" r="1.9" fill="#0099B5" />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
          const row = Math.floor(i / 4)
          const col = i % 4
          return (
            <circle
              key={i}
              cx={7.6 + col * 1.9}
              cy={2.4 + row * 1.9}
              r="0.35"
            />
          )
        })}
      </g>
    </svg>
  )
}

export function RuFlag({ className = '' }: FlagProps) {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      className={`rounded-[2px] ${className}`}
      aria-hidden="true"
    >
      <rect width="22" height="16" fill="#FFFFFF" />
      <rect width="22" height="10.67" y="5.33" fill="#D52B1E" />
      <rect width="22" height="5.33" y="5.33" fill="#0039A6" />
    </svg>
  )
}

export function GbFlag({ className = '' }: FlagProps) {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      className={`rounded-[2px] ${className}`}
      aria-hidden="true"
    >
      <rect width="22" height="16" fill="#012169" />
      <path d="M0 0 L22 16 M22 0 L0 16" stroke="#FFFFFF" strokeWidth="3" />
      <path d="M0 0 L22 16 M22 0 L0 16" stroke="#C8102E" strokeWidth="1.3" />
      <path d="M11 0 V16 M0 8 H22" stroke="#FFFFFF" strokeWidth="5" />
      <path d="M11 0 V16 M0 8 H22" stroke="#C8102E" strokeWidth="2.2" />
    </svg>
  )
}

export const flagByLang = {
  UZ: UzFlag,
  RU: RuFlag,
  EN: GbFlag,
}
