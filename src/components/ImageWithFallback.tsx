import { useState } from 'react'
import PlaceholderImage from './PlaceholderImage'

type ImageWithFallbackProps = {
  src: string
  alt: string
  name: string
  className?: string
  loading?: 'lazy' | 'eager'
}

export default function ImageWithFallback({
  src,
  alt,
  name,
  className = '',
  loading = 'lazy',
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <PlaceholderImage name={name} className={className} />
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={className}
      onError={() => setFailed(true)}
    />
  )
}
