import { useEffect, useRef, useState, type FormEvent } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

type ChatMessage = { role: 'user' | 'assistant'; content: string }

export default function ChatWidget() {
  const { t, lang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, loading, open])

  const send = async (e: FormEvent) => {
    e.preventDefault()
    const text = input.trim()
    if (!text || loading) return
    setError('')
    const next = [...messages, { role: 'user' as const, content: text }]
    setMessages(next)
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lang, messages: next }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || t.chat.error)
        return
      }
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }])
    } catch {
      setError(t.chat.error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t.chat.openLabel}
        className="fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-brand-blue to-brand-blue-bright text-white shadow-btn-glow transition hover:brightness-110"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-[90] flex h-[28rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-card border border-white/10 bg-bg-mid shadow-card-glow">
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue/15 text-brand-blue-bright">
              <MessageCircle size={18} />
            </div>
            <div>
              <p className="text-sm font-bold text-ink-primary">{t.chat.title}</p>
              <p className="text-xs text-ink-secondary">{t.chat.subtitle}</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
            <ChatBubble role="assistant" content={t.chat.greeting} />
            {messages.map((m, i) => (
              <ChatBubble key={i} role={m.role} content={m.content} />
            ))}
            {loading && <ChatBubble role="assistant" content={t.chat.thinking} muted />}
            {error && <p className="text-xs text-red-400">{error}</p>}
          </div>

          <form onSubmit={send} className="flex items-center gap-2 border-t border-white/10 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.chat.placeholder}
              className="flex-1 rounded-pill border border-white/10 bg-bg-deep px-4 py-2 text-sm text-ink-primary placeholder:text-ink-secondary focus:border-brand-blue/60 focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label={t.chat.send}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-brand-blue to-brand-blue-bright text-white transition hover:brightness-110 disabled:opacity-40"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  )
}

function ChatBubble({ role, content, muted }: { role: 'user' | 'assistant'; content: string; muted?: boolean }) {
  const isUser = role === 'user'
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
          isUser ? 'bg-gradient-to-r from-brand-blue to-brand-blue-bright text-white' : 'bg-white/5 text-ink-primary'
        } ${muted ? 'italic text-ink-secondary' : ''}`}
      >
        {content}
      </div>
    </div>
  )
}
