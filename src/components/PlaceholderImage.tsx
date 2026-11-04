type PlaceholderImageProps = {
  name: string
  className?: string
}

export default function PlaceholderImage({ name, className = '' }: PlaceholderImageProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-card border border-brand-blue/30 bg-gradient-to-br from-brand-blue/20 via-bg-mid to-brand-violet/20 text-center text-sm text-ink-secondary ${className}`}
    >
      <span className="px-4 py-2">{name}</span>
    </div>
  )
}
