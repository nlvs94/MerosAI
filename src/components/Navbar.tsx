import { useState } from 'react'
import { ChevronDown, House, LogIn, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { languages, navItems } from '../data/content'

function UzbekistanFlag() {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" aria-hidden="true" className="rounded-[2px]">
      <rect width="22" height="16" fill="#1EB53A" />
      <rect width="22" height="10.6" y="0" fill="#0099B5" />
      <rect width="22" height="9.3" y="0.65" fill="#FFFFFF" />
      <rect width="22" height="1.3" y="7.35" fill="#CE1126" />
      <rect width="22" height="1.3" y="0.65" fill="#CE1126" />
      {[...Array(12)].map((_, i) => (
        <circle key={i} cx={2.2 + (i % 4) * 1.5} cy={1.8 + Math.floor(i / 4) * 1.5} r="0.5" fill="#FFFFFF" />
      ))}
    </svg>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [lang, setLang] = useState(languages[0])

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bg-deep/80 backdrop-blur-md">
      <nav
        aria-label="Asosiy navigatsiya"
        className="mx-auto flex max-w-container items-center justify-between px-6 py-4 lg:px-14"
      >
        <a href="#home" aria-label="Meros AI bosh sahifa" className="min-w-0 shrink">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.label} className="group relative">
              <a
                href={item.href}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  item.active
                    ? 'bg-bg-mid text-ink-primary'
                    : 'text-ink-secondary hover:text-ink-primary'
                }`}
              >
                {item.icon === 'home' && <House size={16} aria-hidden="true" />}
                {item.label}
                {item.dropdown && <ChevronDown size={14} aria-hidden="true" />}
              </a>
              {item.dropdown && (
                <div className="invisible absolute left-0 top-full z-10 w-56 translate-y-2 rounded-card border border-brand-blue/20 bg-bg-mid/95 p-2 opacity-0 shadow-card-glow backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.dropdown.map((sub) => (
                    <a
                      key={sub.label}
                      href="#"
                      className="block rounded-lg px-3 py-2 text-sm text-ink-secondary hover:bg-brand-blue/10 hover:text-ink-primary"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-bg-mid px-3 py-2 text-sm text-ink-primary"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
            >
              <UzbekistanFlag />
              {lang} <ChevronDown size={14} aria-hidden="true" />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full z-10 mt-2 w-24 rounded-xl border border-brand-blue/20 bg-bg-mid/95 p-1 shadow-card-glow backdrop-blur-md">
                {languages.map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => {
                      setLang(l)
                      setLangOpen(false)
                    }}
                    className="block w-full rounded-lg px-3 py-1.5 text-left text-sm text-ink-secondary hover:bg-brand-blue/10 hover:text-ink-primary"
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            type="button"
            className="flex items-center gap-2 rounded-pill border border-brand-blue/50 px-5 py-2.5 text-sm font-semibold text-ink-primary shadow-btn-glow transition hover:bg-brand-blue/10"
          >
            <LogIn size={16} aria-hidden="true" />
            Kirish
          </button>
        </div>

        <button
          type="button"
          className="shrink-0 text-ink-primary lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/5 bg-bg-deep px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                    item.active ? 'bg-bg-mid text-ink-primary' : 'text-ink-secondary'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <span className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm">
              <UzbekistanFlag /> {lang}
            </span>
            <button
              type="button"
              className="flex items-center gap-2 rounded-pill border border-brand-blue/50 px-5 py-2.5 text-sm font-semibold"
            >
              <LogIn size={16} aria-hidden="true" />
              Kirish
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
