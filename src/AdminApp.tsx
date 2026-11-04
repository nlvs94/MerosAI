import { useEffect, useState, type FormEvent } from 'react'
import { Lock, LogOut, RefreshCw, Download, Users, Activity } from 'lucide-react'

type Lead = {
  id: string
  firstName: string
  lastName: string
  phone: string
  telegram: string
  note: string
  lang: string
  createdAt: string
}

type AppEvent = {
  id: string
  label: string
  lang: string
  createdAt: string
}

const STORAGE_KEY = 'meros-admin-password'

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleString('uz-UZ', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  } catch {
    return iso
  }
}

function downloadCsv(leads: Lead[]) {
  const header = ['Ism', 'Familiya', 'Telefon', 'Telegram', 'Izoh', 'Til', 'Vaqt']
  const rows = leads.map((l) => [l.firstName, l.lastName, l.phone, l.telegram, l.note, l.lang, formatDate(l.createdAt)])
  const csv = [header, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    .join('\n')
  const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `meros-ai-buyurtmalar-${new Date().toISOString().slice(0, 10)}.csv`
  a.click()
  URL.revokeObjectURL(url)
}

export default function AdminApp() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [leads, setLeads] = useState<Lead[]>([])
  const [events, setEvents] = useState<AppEvent[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchData = async (pwd: string) => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin-data', {
        headers: { 'x-admin-password': pwd },
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Xatolik yuz berdi')
        setAuthed(false)
        sessionStorage.removeItem(STORAGE_KEY)
        setLoading(false)
        return
      }
      setLeads(data.leads || [])
      setEvents(data.events || [])
      setAuthed(true)
      sessionStorage.setItem(STORAGE_KEY, pwd)
    } catch {
      setError('Serverga ulanib bo‘lmadi')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY)
    if (saved) {
      setPassword(saved)
      fetchData(saved)
    }
  }, [])

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    fetchData(password)
  }

  const handleLogout = () => {
    sessionStorage.removeItem(STORAGE_KEY)
    setAuthed(false)
    setPassword('')
    setLeads([])
    setEvents([])
  }

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bg-deep px-6 text-ink-primary">
        <form
          onSubmit={handleLogin}
          className="glass-card w-full max-w-sm p-8"
        >
          <div className="flex items-center gap-2 text-brand-blue-bright">
            <Lock size={20} />
            <h1 className="text-lg font-bold text-ink-primary">Meros AI — Admin panel</h1>
          </div>
          <p className="mt-2 text-sm text-ink-secondary">Kirish uchun parolni kiriting.</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Parol"
            autoFocus
            className="mt-5 w-full rounded-xl border border-white/10 bg-bg-mid px-4 py-3 text-sm text-ink-primary placeholder:text-ink-secondary focus:border-brand-blue/60 focus:outline-none"
          />
          {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full rounded-pill bg-gradient-to-r from-brand-blue to-brand-blue-bright px-6 py-3 text-sm font-semibold text-white shadow-btn-glow transition hover:brightness-110 disabled:opacity-60"
          >
            {loading ? 'Tekshirilmoqda...' : 'Kirish'}
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg-deep px-4 py-8 text-ink-primary sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-xl font-extrabold">Meros AI — Admin panel</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => fetchData(password)}
              className="flex items-center gap-2 rounded-pill border border-white/10 px-4 py-2 text-sm text-ink-secondary transition hover:text-ink-primary"
            >
              <RefreshCw size={14} /> Yangilash
            </button>
            <button
              onClick={() => downloadCsv(leads)}
              disabled={leads.length === 0}
              className="flex items-center gap-2 rounded-pill border border-white/10 px-4 py-2 text-sm text-ink-secondary transition hover:text-ink-primary disabled:opacity-40"
            >
              <Download size={14} /> CSV
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-pill border border-white/10 px-4 py-2 text-sm text-ink-secondary transition hover:text-ink-primary"
            >
              <LogOut size={14} /> Chiqish
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="glass-card flex items-center gap-3 p-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/15 text-brand-blue-bright">
              <Users size={18} />
            </span>
            <div>
              <p className="text-xl font-extrabold">{leads.length}</p>
              <p className="text-xs text-ink-secondary">Jami buyurtmalar</p>
            </div>
          </div>
          <div className="glass-card flex items-center gap-3 p-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-violet/15 text-brand-violet">
              <Activity size={18} />
            </span>
            <div>
              <p className="text-xl font-extrabold">{events.length}</p>
              <p className="text-xs text-ink-secondary">Jami harakatlar (bosilgan tugmalar)</p>
            </div>
          </div>
        </div>

        <h2 className="mt-8 text-lg font-bold">Buyurtmalar / so'rovlar</h2>
        <div className="mt-3 overflow-x-auto rounded-card border border-white/10">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-bg-mid text-xs uppercase tracking-wide text-ink-secondary">
                <th className="px-4 py-3">Ism</th>
                <th className="px-4 py-3">Familiya</th>
                <th className="px-4 py-3">Telefon</th>
                <th className="px-4 py-3">Telegram</th>
                <th className="px-4 py-3">Izoh</th>
                <th className="px-4 py-3">Til</th>
                <th className="px-4 py-3">Vaqt</th>
              </tr>
            </thead>
            <tbody>
              {leads.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-6 text-center text-ink-secondary">
                    Hali buyurtma yo'q.
                  </td>
                </tr>
              )}
              {leads.map((lead) => (
                <tr key={lead.id} className="border-b border-white/5">
                  <td className="px-4 py-3 font-medium">{lead.firstName}</td>
                  <td className="px-4 py-3">{lead.lastName || '—'}</td>
                  <td className="px-4 py-3">
                    <a href={`tel:${lead.phone}`} className="text-brand-blue-bright hover:underline">
                      {lead.phone}
                    </a>
                  </td>
                  <td className="px-4 py-3">
                    {lead.telegram ? (
                      <a
                        href={`https://t.me/${lead.telegram.replace('@', '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-brand-blue-bright hover:underline"
                      >
                        @{lead.telegram.replace('@', '')}
                      </a>
                    ) : (
                      '—'
                    )}
                  </td>
                  <td className="max-w-[220px] truncate px-4 py-3 text-ink-secondary" title={lead.note}>
                    {lead.note || '—'}
                  </td>
                  <td className="px-4 py-3 text-ink-secondary">{lead.lang}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-ink-secondary">{formatDate(lead.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-8 text-lg font-bold">Foydalanuvchi harakatlari</h2>
        <p className="mt-1 text-sm text-ink-secondary">
          Sayt tashrif buyuruvchilari qaysi tugma/bo'limlarni bosganini ko'rsatadi (ismsiz, umumiy statistika).
        </p>
        <div className="mt-3 overflow-x-auto rounded-card border border-white/10">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-bg-mid text-xs uppercase tracking-wide text-ink-secondary">
                <th className="px-4 py-3">Harakat</th>
                <th className="px-4 py-3">Til</th>
                <th className="px-4 py-3">Vaqt</th>
              </tr>
            </thead>
            <tbody>
              {events.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-4 py-6 text-center text-ink-secondary">
                    Hali harakatlar yo'q.
                  </td>
                </tr>
              )}
              {events.map((ev) => (
                <tr key={ev.id} className="border-b border-white/5">
                  <td className="px-4 py-3 font-medium">{ev.label}</td>
                  <td className="px-4 py-3 text-ink-secondary">{ev.lang}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-ink-secondary">{formatDate(ev.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
