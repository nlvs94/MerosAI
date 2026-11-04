import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import Reveal from './Reveal'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactSection() {
  const { t, lang } = useLanguage()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [telegram, setTelegram] = useState('')
  const [note, setNote] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!firstName.trim() || !phone.trim()) {
      setStatus('error')
      setErrorMsg(t.contact.requiredError)
      return
    }
    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'lead',
          firstName,
          lastName,
          phone,
          telegram,
          note,
          lang,
        }),
      })
      if (!res.ok) throw new Error('request failed')
      setStatus('success')
      setFirstName('')
      setLastName('')
      setPhone('')
      setTelegram('')
      setNote('')
    } catch {
      setStatus('error')
      setErrorMsg(t.contact.error)
    }
  }

  return (
    <section id="contact" aria-label={t.contact.title} className="mx-auto max-w-container px-6 pb-16 lg:px-14">
      <Reveal>
        <div className="glass-card mx-auto max-w-2xl p-8">
          <h2 className="text-center text-2xl font-extrabold text-ink-primary sm:text-3xl">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-2 max-w-md text-center text-sm text-ink-secondary">
            {t.contact.subtitle}
          </p>

          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder={t.contact.firstName}
              required
              className="rounded-xl border border-white/10 bg-bg-mid px-4 py-3 text-sm text-ink-primary placeholder:text-ink-secondary focus:border-brand-blue/60 focus:outline-none"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder={t.contact.lastName}
              className="rounded-xl border border-white/10 bg-bg-mid px-4 py-3 text-sm text-ink-primary placeholder:text-ink-secondary focus:border-brand-blue/60 focus:outline-none"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t.contact.phone}
              required
              className="rounded-xl border border-white/10 bg-bg-mid px-4 py-3 text-sm text-ink-primary placeholder:text-ink-secondary focus:border-brand-blue/60 focus:outline-none"
            />
            <input
              type="text"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
              placeholder={t.contact.telegram}
              className="rounded-xl border border-white/10 bg-bg-mid px-4 py-3 text-sm text-ink-primary placeholder:text-ink-secondary focus:border-brand-blue/60 focus:outline-none"
            />
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder={t.contact.notePlaceholder}
              rows={3}
              className="rounded-xl border border-white/10 bg-bg-mid px-4 py-3 text-sm text-ink-primary placeholder:text-ink-secondary focus:border-brand-blue/60 focus:outline-none sm:col-span-2"
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="flex items-center justify-center gap-2 rounded-pill bg-gradient-to-r from-brand-blue to-brand-blue-bright px-7 py-3.5 text-sm font-semibold text-white shadow-btn-glow transition hover:brightness-110 disabled:opacity-60 sm:col-span-2"
            >
              <Send size={16} aria-hidden="true" />
              {status === 'sending' ? t.contact.sending : t.contact.submit}
            </button>

            {status === 'success' && (
              <p className="text-center text-sm font-medium text-brand-green sm:col-span-2">
                {t.contact.success}
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-sm font-medium text-red-400 sm:col-span-2">
                {errorMsg}
              </p>
            )}
          </form>
        </div>
      </Reveal>
    </section>
  )
}
