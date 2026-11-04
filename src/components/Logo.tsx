import { useLanguage } from '../i18n/LanguageContext'

type LogoProps = {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  const { t } = useLanguage()
  return (
    <div className={`flex min-w-0 items-center gap-3 ${className}`}>
      <svg width="48" height="48" viewBox="0 0 40 40" fill="none" aria-hidden="true" className="shrink-0">
        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2F80FF" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="10" fill="url(#logo-gradient)" />
        <path
          d="M9 30V11h4.2l6.8 10 6.8-10H31v19h-4.4V18.3l-6.6 9.6-6.6-9.6V30H9Z"
          fill="white"
        />
      </svg>
      <div className="min-w-0 leading-tight">
        <p className="truncate text-xl font-extrabold tracking-tight text-ink-primary">Meros AI</p>
        <p className="hidden truncate text-xs text-ink-secondary sm:block">{t.brand.tagline}</p>
      </div>
    </div>
  )
}
