import { ArrowRight, Play, Rocket } from 'lucide-react'
import { hero } from '../data/content'
import ChartPanel from './ChartPanel'
import SpeechBubble from './SpeechBubble'
import ImageWithFallback from './ImageWithFallback'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto flex max-w-container flex-col items-center gap-10 px-6 py-14 md:flex-row md:items-stretch md:gap-8 lg:px-14 lg:py-20">
        <div className="z-10 flex w-full flex-col justify-center md:w-[45%]">
          <Reveal>
            <span className="inline-flex w-fit items-center gap-2 rounded-pill border border-brand-gold/60 bg-bg-mid/80 px-4 py-2 text-xs font-medium text-ink-primary sm:text-sm">
              {hero.badge}
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[52px] lg:leading-[1.12] xl:text-[60px]">
              {hero.titleLines.map((line, i) =>
                line.highlight ? (
                  <span key={i} className="block">
                    <span className="text-brand-blue-bright">{line.highlightWord} </span>
                    {line.text.replace(`${line.highlightWord} `, '')}
                  </span>
                ) : (
                  <span key={i} className="block text-ink-primary">
                    {line.text}
                  </span>
                ),
              )}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-secondary sm:text-lg">
              {hero.description}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#xizmatlar"
                className="flex items-center gap-2 rounded-pill bg-gradient-to-r from-brand-blue to-brand-blue-bright px-7 py-3.5 text-sm font-semibold text-white shadow-btn-glow transition hover:brightness-110"
              >
                <Rocket size={18} aria-hidden="true" />
                {hero.primaryCta}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                href="#video"
                className="flex items-center gap-3 rounded-pill border border-white/20 px-6 py-3.5 text-sm font-semibold text-ink-primary transition hover:border-brand-blue/60"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40">
                  <Play size={12} fill="currentColor" aria-hidden="true" />
                </span>
                {hero.secondaryCta}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="relative flex w-full items-end justify-center md:w-[55%]">
          <div className="absolute inset-0 overflow-hidden rounded-card">
            <ImageWithFallback
              src="/images/registan-bg.jpg"
              alt="Registon maydoni tungi manzara"
              name="registan-bg.jpg"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bg-deep via-bg-deep/40 to-transparent lg:from-bg-deep lg:via-bg-deep/10" />
          </div>

          <div className="relative z-10 w-full">
            <div className="absolute left-0 top-6 animate-float sm:left-4">
              <ChartPanel />
            </div>
            <div className="absolute right-0 top-0 animate-float sm:right-4" style={{ animationDelay: '1.2s' }}>
              <SpeechBubble />
            </div>
            <div className="flex justify-center pt-28">
              <div className="h-[360px] w-[260px] animate-float sm:h-[440px] sm:w-[320px] lg:h-[560px] lg:w-[420px]">
                <ImageWithFallback
                  src="/images/robot.png"
                  alt="Meros AI robot assistenti milliy liboslarda"
                  name="robot.png"
                  loading="eager"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
