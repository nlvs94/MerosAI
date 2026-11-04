export function trackEvent(label: string, lang: string) {
  try {
    const payload = JSON.stringify({ type: 'event', label, lang })
    if (navigator.sendBeacon) {
      const blob = new Blob([payload], { type: 'application/json' })
      navigator.sendBeacon('/api/submit', blob)
      return
    }
    fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload,
      keepalive: true,
    }).catch(() => {})
  } catch {
    // tracking must never break the UI
  }
}
