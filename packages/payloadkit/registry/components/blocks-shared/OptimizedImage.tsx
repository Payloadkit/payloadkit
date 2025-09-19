import React, { useState, useRef, useEffect } from 'react'
import type { MediaItem } from './types'

export interface OptimizedImageProps {
  src: string | MediaItem
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: boolean
  sizes?: string
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  onLoad?: () => void
  onError?: () => void
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  priority = false,
  sizes = '100vw',
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const imgRef = useRef<HTMLImageElement>(null)

  const imageUrl = typeof src === 'string' ? src : src.url
  const imageAlt = typeof src === 'string' ? alt : (src.alt || alt)

  useEffect(() => {
    if (priority || loading === 'eager') {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [priority, loading])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
    onError?.()
  }

  if (hasError) {
    return (
      <div
        className={`bg-gray-200 dark:bg-gray-800 flex items-center justify-center ${className}`}
        role="img"
        aria-label={imageAlt}
      >
        <span className="text-gray-500 text-sm">Image unavailable</span>
      </div>
    )
  }

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {/* Placeholder */}
      {!isLoaded && placeholder === 'blur' && (
        <div
          className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"
          style={blurDataURL ? { backgroundImage: `url(${blurDataURL})` } : undefined}
        />
      )}

      {/* Main image */}
      {isInView && (
        <img
          src={imageUrl}
          alt={imageAlt}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
          // Add responsive image attributes if using srcset
          {...(typeof src === 'object' && src.sizes && {
            srcSet: src.sizes.map(size => `${size.url} ${size.width}w`).join(', ')
          })}
        />
      )}
    </div>
  )
}

export default OptimizedImage