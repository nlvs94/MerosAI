import { ArrowRight, Check } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { trackEvent } from '../lib/track'
import ImageWithFallback from './ImageWithFallback'
import Reveal from './Reveal'

export default function FeatureCards() {
  const { t, lang } = useLanguage()

  return (
    <section aria-label="Local va online xizmatlar" className="mx-auto max-w-container px-6 py-16 lg:px-14">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {t.featureCards.map((card, i) => (
          <Reveal key={card.title} delay={i * 120}>
            <div className="glass-card flex h-full flex-col justify-between gap-6 p-7 sm:flex-row sm:items-center">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      card.dotColor === 'green' ? 'bg-brand-green' : 'bg-brand-violet'
                    }`}
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-bold text-ink-primary">{card.title}</h3>
                </div>
                <p className="mt-2 text-sm text-ink-secondary">{card.subtitle}</p>
                <ul className="mt-5 flex flex-col gap-3">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3 text-sm text-ink-primary">
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          card.dotColor === 'green'
                            ? 'bg-brand-green/20 text-brand-green'
                            : 'bg-brand-violet/20 text-brand-violet'
                        }`}
                      >
                        <Check size={12} aria-hidden="true" />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col items-center gap-4 sm:w-56">
                <ImageWithFallback
                  src={card.image}
                  alt={card.imageAlt}
                  name={card.image.split('/').pop() ?? 'image'}
                  className="h-36 w-full rounded-xl object-cover"
                />
                <a
                  href="#contact"
                  onClick={() => trackEvent(`Batafsil: ${card.title}`, lang)}
                  className={`flex items-center gap-2 self-end rounded-pill px-5 py-2.5 text-sm font-semibold text-white shadow-btn-glow transition hover:brightness-110 ${
                    card.ctaColor === 'blue'
                      ? 'bg-gradient-to-r from-brand-blue to-brand-blue-bright'
                      : 'bg-gradient-to-r from-brand-violet to-purple-400'
                  }`}
                >
                  {card.cta}
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
