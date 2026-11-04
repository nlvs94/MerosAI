type FlagProps = {
  className?: string
}

export function UzFlag({ className = '' }: FlagProps) {
  return (
    <img
      src="/images/flag-uz.webp"
      alt="O'zbekiston bayrog'i"
      width={22}
      height={16}
      className={`h-4 w-[22px] rounded-[2px] object-cover ${className}`}
    />
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
