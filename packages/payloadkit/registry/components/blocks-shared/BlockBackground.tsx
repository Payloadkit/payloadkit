import React from 'react'
import { cn } from '../../utils/cn'

export interface BackgroundFieldValue {
  type: 'none' | 'color' | 'gradient' | 'image'
  color?: string
  image?: string | { url: string }
  gradientDirection?: 'to-r' | 'to-l' | 'to-t' | 'to-b' | 'to-br' | 'to-bl' | 'to-tr' | 'to-tl'
  gradientStops?: {
    color: string
    position?: string
  }[]
  overlay?: boolean
  overlayColor?: string
  overlayOpacity?: '10' | '20' | '30' | '40' | '50' | '60' | '70' | '80' | '90'
}

export interface BlockBackgroundProps {
  children: React.ReactNode
  background?: BackgroundFieldValue
  className?: string
  style?: React.CSSProperties
}

const getImageUrl = (image: string | { url: string } | undefined): string | undefined => {
  if (!image) return undefined
  return typeof image === 'string' ? image : image.url
}

export const BlockBackground: React.FC<BlockBackgroundProps> = ({
  children,
  background = { type: 'none' },
  className,
  style = {},
  ...props
}) => {
  const backgroundStyles: React.CSSProperties = { ...style }

  // Handle different background types
  switch (background.type) {
    case 'color':
      if (background.color) {
        backgroundStyles.backgroundColor = background.color
      }
      break

    case 'gradient':
      if (background.gradientStops && background.gradientStops.length >= 2) {
        const direction = background.gradientDirection || 'to-br'
        const stops = background.gradientStops
          .map(stop => `${stop.color} ${stop.position || ''}`)
          .join(', ')
        backgroundStyles.backgroundImage = `linear-gradient(${direction}, ${stops})`
      }
      break

    case 'image':
      const imageUrl = getImageUrl(background.image)
      if (imageUrl) {
        backgroundStyles.backgroundImage = `url(${imageUrl})`
        backgroundStyles.backgroundSize = 'cover'
        backgroundStyles.backgroundPosition = 'center'
        backgroundStyles.backgroundRepeat = 'no-repeat'
      }
      break
  }

  const hasOverlay = background.overlay && background.overlayColor
  const overlayOpacity = background.overlayOpacity || '40'

  return (
    <div
      className={cn('relative', className)}
      style={backgroundStyles}
      {...props}
    >
      {/* Overlay */}
      {hasOverlay && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: background.overlayColor,
            opacity: parseInt(overlayOpacity) / 100
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default BlockBackground