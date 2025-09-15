import React from 'react'
import Link from 'next/link'

import {
  BlockBackground,
  BlockSection,
  BlockHeading,
  BlockText,
} from '../blocks-shared'

interface CallToAction {
  label: string
  url: string
  style: 'primary' | 'secondary' | 'ghost'
  size: 'sm' | 'md' | 'lg'
  newTab?: boolean
}

export interface BannerBlockProps {
  eyebrow?: string
  eyebrowStyle?: 'text' | 'badge'
  title: string
  subtitle?: string
  description?: any
  textAlignment?: 'center' | 'left' | 'right'
  textColor?: 'light' | 'dark' | 'primary'
  background?: {
    type: 'color' | 'gradient' | 'image'
    color?: string
    gradientFrom?: string
    gradientTo?: string
    gradientDirection?: string
    image?: string | { url: string }
    overlay?: boolean
    overlayOpacity?: string
  }
  callToActions?: CallToAction[]
  height?: 'auto' | 'small' | 'medium' | 'large' | 'full'
  paddingTop?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  paddingBottom?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

const getHeightClass = (height: string = 'medium') => {
  switch (height) {
    case 'small':
      return 'min-h-[50vh]'
    case 'medium':
      return 'min-h-[60vh]'
    case 'large':
      return 'min-h-[75vh]'
    case 'full':
      return 'min-h-screen'
    default:
      return ''
  }
}

const getTextColorClass = (textColor: string = 'light') => {
  switch (textColor) {
    case 'dark':
      return 'text-foreground'
    case 'primary':
      return 'text-primary'
    case 'light':
    default:
      return 'text-white'
  }
}

const getButtonClass = (
  style: string = 'primary',
  size: string = 'md',
  textColor: string = 'light'
) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const baseClasses = `inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 ${sizeClasses[size as keyof typeof sizeClasses]}`

  // Adapt button styles based on banner text color theme
  switch (style) {
    case 'primary':
      if (textColor === 'light') {
        return `${baseClasses} bg-white text-gray-900 hover:bg-gray-100`
      } else if (textColor === 'dark') {
        return `${baseClasses} bg-primary text-primary-foreground hover:bg-primary/90`
      } else {
        return `${baseClasses} bg-background text-foreground hover:bg-background/90`
      }
    case 'secondary':
      if (textColor === 'light') {
        return `${baseClasses} border-2 border-white text-white hover:bg-white hover:text-gray-900`
      } else if (textColor === 'dark') {
        return `${baseClasses} border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground`
      } else {
        return `${baseClasses} border-2 border-background text-background hover:bg-background hover:text-foreground`
      }
    case 'ghost':
      if (textColor === 'light') {
        return `${baseClasses} text-white hover:bg-white/10`
      } else if (textColor === 'dark') {
        return `${baseClasses} text-foreground hover:bg-foreground/10`
      } else {
        return `${baseClasses} text-primary hover:bg-primary/10`
      }
    default:
      return baseClasses
  }
}

export const BannerBlock: React.FC<BannerBlockProps> = ({
  eyebrow,
  eyebrowStyle = 'text',
  title,
  subtitle,
  description,
  textAlignment = 'center',
  textColor = 'light',
  background = { type: 'color', color: '#3b82f6' },
  callToActions = [],
  height = 'medium',
  paddingTop = 'xl',
  paddingBottom = 'xl',
}) => {
  const heightClass = getHeightClass(height)
  const textColorClass = getTextColorClass(textColor)
  const alignmentClass = textAlignment === 'center' ? 'text-center' : textAlignment === 'right' ? 'text-right' : 'text-left'
  const flexAlignmentClass = textAlignment === 'center' ? 'items-center' : textAlignment === 'right' ? 'items-end' : 'items-start'

  return (
    <BlockBackground background={background}>
      <BlockSection
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className={`${heightClass} flex ${flexAlignmentClass}`}
      >
        <div className={`w-full max-w-4xl ${textAlignment === 'center' ? 'mx-auto' : textAlignment === 'right' ? 'ml-auto' : 'mr-auto'}`}>
          <div className={`${alignmentClass} ${textColorClass}`}>
            {/* Eyebrow */}
            {eyebrow && (
              <div className="mb-4">
                {eyebrowStyle === 'badge' ? (
                  <span className="inline-block px-3 py-1 text-sm font-semibold tracking-wide uppercase bg-white/20 backdrop-blur-sm rounded-full">
                    {eyebrow}
                  </span>
                ) : (
                  <span className="text-sm font-semibold tracking-wide uppercase opacity-90">
                    {eyebrow}
                  </span>
                )}
              </div>
            )}

            {/* Title */}
            <BlockHeading
              text={title}
              level="h1"
              align={textAlignment}
              className={`mb-6 ${textColorClass}`}
            />

            {/* Subtitle */}
            {subtitle && (
              <p className="text-xl md:text-2xl font-medium mb-6 opacity-90">
                {subtitle}
              </p>
            )}

            {/* Description */}
            {description && (
              <div className="mb-8 max-w-2xl opacity-80">
                <BlockText
                  richText={description}
                  size="lg"
                  align={textAlignment}
                  className={textColorClass}
                />
              </div>
            )}

            {/* Call to Actions */}
            {callToActions && callToActions.length > 0 && (
              <div className={`flex flex-wrap gap-4 ${textAlignment === 'center' ? 'justify-center' : textAlignment === 'right' ? 'justify-end' : 'justify-start'}`}>
                {callToActions.map((cta, index) => (
                  <Link
                    key={index}
                    href={cta.url}
                    target={cta.newTab ? '_blank' : undefined}
                    rel={cta.newTab ? 'noopener noreferrer' : undefined}
                    className={getButtonClass(cta.style, cta.size, textColor)}
                  >
                    {cta.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </BlockSection>
    </BlockBackground>
  )
}

export default BannerBlock