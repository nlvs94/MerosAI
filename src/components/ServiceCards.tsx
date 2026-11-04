import { Bot, Cloud, Cpu, Monitor, PhoneCall, TrendingUp, type LucideIcon } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import type { ServiceCard } from '../i18n/translations'
import Reveal from './Reveal'

const iconMap: Record<ServiceCard['icon'], LucideIcon> = {
  cpu: Cpu,
  bot: Bot,
  monitor: Monitor,
  cloud: Cloud,
  trending: TrendingUp,
  phone: PhoneCall,
}

export default function ServiceCards() {
  const { t } = useLanguage()

  return (
    <section id="xizmatlar" aria-label="Xizmatlar" className="mx-auto max-w-container px-6 lg:px-14">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {t.serviceCards.map((card, i) => {
          const Icon = iconMap[card.icon]
          return (
            <Reveal key={card.title} delay={i * 80}>
              <div className="glass-card flex h-full items-start gap-3 p-5 transition hover:-translate-y-1 hover:border-brand-blue/60">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-blue-bright shadow-[0_0_16px_rgba(77,163,255,0.35)]">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-ink-primary">{card.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink-secondary">
                    {card.description}
                  </p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
