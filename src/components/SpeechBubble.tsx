import { useLanguage } from '../i18n/LanguageContext'

export default function SpeechBubble() {
  const { t } = useLanguage()
  return (
    <div className="relative">
      <div className="glass-card w-[280px] rounded-2xl px-5 py-4 sm:w-[300px]">
        <p className="text-base font-bold text-ink-primary">{t.speechBubble.greeting}</p>
        <p className="text-sm text-ink-secondary">{t.speechBubble.lineOne}</p>
        <p className="text-sm text-ink-secondary">{t.speechBubble.lineTwo}</p>
        <div className="mt-3 flex h-5 items-end gap-[3px]" aria-hidden="true">
          {[6, 12, 18, 10, 16, 8, 14, 6].map((h, i) => (
            <span
              key={i}
              className="w-[3px] animate-pulse-wave rounded-full bg-brand-blue-bright"
              style={{ height: `${h}px`, animationDelay: `${i * 0.08}s` }}
            />
          ))}
        </div>
      </div>
      <svg
        className="absolute -bottom-2 left-8 text-[rgba(15,25,60,0.55)]"
        width="24"
        height="16"
        viewBox="0 0 24 16"
        aria-hidden="true"
      >
        <path d="M0 0 L16 0 L4 16 Z" fill="rgba(15,25,60,0.85)" />
      </svg>
    </div>
  )
}
