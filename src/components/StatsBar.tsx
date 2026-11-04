import { Rocket, ShieldCheck, Users, Zap, type LucideIcon } from 'lucide-react'
import { stats, statsTagline, type StatItem } from '../data/content'
import Reveal from './Reveal'

const iconMap: Record<StatItem['icon'], LucideIcon> = {
  users: Users,
  rocket: Rocket,
  zap: Zap,
  shield: ShieldCheck,
}

export default function StatsBar() {
  return (
    <section aria-label="Statistika" className="mx-auto max-w-container px-6 pb-16 lg:px-14">
      <Reveal>
        <div className="glass-card flex flex-col items-center gap-8 p-8 lg:flex-row lg:justify-between">
          <div className="grid w-full grid-cols-2 gap-6 lg:w-auto lg:flex lg:items-center lg:gap-10">
            {stats.map((stat) => {
              const Icon = iconMap[stat.icon]
              return (
                <div key={stat.label} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/15 text-brand-blue-bright">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xl font-extrabold text-ink-primary sm:text-2xl">{stat.value}</p>
                    <p className="text-xs text-ink-secondary">{stat.label}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="hidden h-14 w-px bg-white/10 lg:block" aria-hidden="true" />

          <p className="max-w-xs text-center text-sm font-medium text-ink-primary lg:text-left">
            {statsTagline}
          </p>

          <div className="flex flex-col items-center">
            <span className="bg-gradient-to-r from-brand-blue-bright to-brand-violet bg-clip-text font-script text-4xl text-transparent">
              Meros AI
            </span>
            <span className="mt-1 h-px w-32 bg-gradient-to-r from-brand-blue-bright to-brand-violet" />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
