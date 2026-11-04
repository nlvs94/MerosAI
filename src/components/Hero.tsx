import { useState } from 'react'
import { ArrowRight, Play, Rocket } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import ChartPanel from './ChartPanel'
import SpeechBubble from './SpeechBubble'
import ImageWithFallback from './ImageWithFallback'
import Modal from './Modal'
import Reveal from './Reveal'

function VideoPlayer({ missingText }: { missingText: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-xl border border-brand-blue/30 bg-bg-mid text-center text-sm text-ink-secondary">
        <span className="px-6">{missingText}</span>
      </div>
    )
  }

  return (
    <video
      src="/videos/intro.mp4"
      controls
      autoPlay
      className="aspect-video w-full rounded-xl bg-black"
      onError={() => setFailed(true)}
    />
  )
}

export default function Hero() {
  const { t } = useLanguage()
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 hidden md:block" aria-hidden="true">
        <div className="absolute inset-0 animate-pulse-glow bg-[radial-gradient(ellipse_at_72%_22%,rgba(77,163,255,0.25),transparent_55%)]" />
        <ImageWithFallback
          src="/images/registan-bg.jpg"
          alt=""
          name="registan-bg.jpg"
          loading="eager"
          className="h-full w-full animate-breathe object-cover [object-position:72%_22%]"
        />
      </div>

      <div className="mx-auto flex max-w-container flex-col items-center gap-10 px-6 py-14 md:flex-row md:items-stretch md:gap-8 lg:px-14 lg:py-20">
        <div className="z-10 flex w-full flex-col justify-center md:w-[45%]">
          <Reveal>
            <span className="inline-flex w-fit items-center gap-2 rounded-pill border border-brand-gold/60 bg-bg-mid/80 px-4 py-2 text-xs font-medium text-ink-primary sm:text-sm">
              {t.hero.badge}
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[52px] lg:leading-[1.12] xl:text-[60px]">
              {t.hero.titleLines.map((line, i) =>
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
              {t.hero.description}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#xizmatlar"
                className="flex items-center gap-2 rounded-pill bg-gradient-to-r from-brand-blue to-brand-blue-bright px-7 py-3.5 text-sm font-semibold text-white shadow-btn-glow transition hover:brightness-110"
              >
                <Rocket size={18} aria-hidden="true" />
                {t.hero.primaryCta}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="flex items-center gap-3 rounded-pill border border-white/20 px-6 py-3.5 text-sm font-semibold text-ink-primary transition hover:border-brand-blue/60"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40">
                  <Play size={12} fill="currentColor" aria-hidden="true" />
                </span>
                {t.hero.secondaryCta}
              </button>
            </div>
          </Reveal>
        </div>

        <div className="relative flex w-full items-end justify-center md:w-[55%]">
          <div className="absolute inset-0 overflow-hidden rounded-card md:hidden">
            <ImageWithFallback
              src="/images/registan-bg.jpg"
              alt="Meros AI robot assistenti Registon maydoni fonida"
              name="registan-bg.jpg"
              loading="eager"
              className="h-full w-full object-cover [object-position:68%_20%]"
            />
          </div>

          <div className="relative z-10 w-full">
            <div className="absolute left-0 top-32 animate-float sm:left-4 sm:top-6">
              <ChartPanel />
            </div>
            <div className="absolute right-0 top-40 animate-float sm:right-4 sm:top-0" style={{ animationDelay: '1.2s' }}>
              <SpeechBubble />
            </div>
            <div className="pt-28" aria-hidden="true">
              <div className="h-[360px] sm:h-[440px] lg:h-[560px]" />
            </div>
          </div>
        </div>
      </div>

      <Modal open={videoOpen} onClose={() => setVideoOpen(false)} title={t.modals.video.title}>
        <VideoPlayer missingText={t.modals.video.missing} />
      </Modal>
    </section>
  )
}
