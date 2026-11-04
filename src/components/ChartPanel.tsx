export default function ChartPanel() {
  return (
    <div
      className="glass-card w-[160px] rounded-2xl p-4 shadow-card-glow sm:w-[180px]"
      style={{ transform: 'perspective(800px) rotateY(8deg)' }}
    >
      <svg viewBox="0 0 120 90" className="h-full w-full" aria-hidden="true">
        <line x1="4" y1="4" x2="4" y2="82" stroke="#4DA3FF" strokeWidth="1.5" opacity="0.5" />
        <line x1="4" y1="82" x2="116" y2="82" stroke="#4DA3FF" strokeWidth="1.5" opacity="0.5" />
        {[
          { x: 16, h: 24 },
          { x: 36, h: 38 },
          { x: 56, h: 28 },
          { x: 76, h: 50 },
          { x: 96, h: 64 },
        ].map((bar, i) => (
          <rect
            key={i}
            x={bar.x}
            y={82 - bar.h}
            width="12"
            height={bar.h}
            rx="2"
            fill="#2F80FF"
            opacity={0.5 + i * 0.1}
          />
        ))}
        <polyline
          points="16,60 36,46 56,52 76,30 96,14"
          fill="none"
          stroke="#4DA3FF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M88 14 L96 14 L96 22" fill="none" stroke="#4DA3FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}
