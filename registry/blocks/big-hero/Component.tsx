import React from 'react'
import { ChevronDown } from 'lucide-react'
import {
  BlockBackground,
  BlockSection,
  BlockHeading,
  BlockText,
} from '../blocks-shared'

interface CallToAction {
  label: string
  url: string
  appearance?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'default' | 'lg'
}

export interface BigHeroBlockProps {
  height?: '100vh' | '90vh' | '80vh' | '70vh' | 'auto'
  contentPosition?: 'center' | 'top-center' | 'bottom-center' | 'left-center' | 'right-center'
  enableParallax?: boolean
  eyebrow?: string
  title: string
  subtitle?: string
  description?: any
  callToActions?: CallToAction[]
  background?: {
    type: 'color' | 'gradient' | 'image' | 'video' | 'none'
    color?: string
    gradientFrom?: string
    gradientTo?: string
    gradientDirection?: string
    image?: string | { url: string }
    videoUrl?: string
    videoPoster?: string | { url: string }
  }
  overlay?: {
    enabled: boolean
    color?: string
    opacity?: number
  }
  textColor?: 'white' | 'dark' | 'primary'
  textAlignment?: 'left' | 'center' | 'right'
  titleSize?: 'sm' | 'md' | 'lg' | 'xl' | 'hero'
  enableAnimations?: boolean
  showScrollIndicator?: boolean
  customCss?: string
  htmlId?: string
  htmlClasses?: string
}

const getTextColorClass = (textColor: string = 'white') => {
  switch (textColor) {
    case 'white':
      return 'text-white'
    case 'dark':
      return 'text-foreground'
    case 'primary':
      return 'text-primary'
    default:
      return 'text-white'
  }
}

const getTextAlignmentClass = (alignment: string = 'center') => {
  switch (alignment) {
    case 'left':
      return 'text-left'
    case 'center':
      return 'text-center'
    case 'right':
      return 'text-right'
    default:
      return 'text-center'
  }
}

const getTitleSizeClass = (size: string = 'hero') => {
  switch (size) {
    case 'sm':
      return 'text-3xl md:text-4xl lg:text-5xl'
    case 'md':
      return 'text-4xl md:text-5xl lg:text-6xl'
    case 'lg':
      return 'text-5xl md:text-6xl lg:text-7xl'
    case 'xl':
      return 'text-6xl md:text-7xl lg:text-8xl'
    case 'hero':
      return 'text-6xl md:text-8xl lg:text-9xl'
    default:
      return 'text-6xl md:text-8xl lg:text-9xl'
  }
}

const getContentPositionClasses = (position: string = 'center') => {
  switch (position) {
    case 'center':
      return 'items-center justify-center'
    case 'top-center':
      return 'items-start justify-center pt-20'
    case 'bottom-center':
      return 'items-end justify-center pb-20'
    case 'left-center':
      return 'items-center justify-start pl-8 md:pl-16'
    case 'right-center':
      return 'items-center justify-end pr-8 md:pr-16'
    default:
      return 'items-center justify-center'
  }
}

const getButtonClasses = (appearance: string = 'primary', size: string = 'lg') => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

  const sizeClasses = {
    sm: 'h-9 px-3 text-sm',
    default: 'h-10 px-4 py-2',
    lg: 'h-11 px-8 text-lg'
  }

  const appearanceClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
  }

  return `${baseClasses} ${sizeClasses[size as keyof typeof sizeClasses]} ${appearanceClasses[appearance as keyof typeof appearanceClasses]}`
}

export const BigHero: React.FC<BigHeroBlockProps> = ({
  height = '100vh',
  contentPosition = 'center',
  enableParallax = true,
  eyebrow,
  title,
  subtitle,
  description,
  callToActions = [],
  background = { type: 'gradient', gradientFrom: '#1e293b', gradientTo: '#0f172a', gradientDirection: 'to-br' },
  overlay = { enabled: true, color: '#000000', opacity: 0.5 },
  textColor = 'white',
  textAlignment = 'center',
  titleSize = 'hero',
  enableAnimations = true,
  showScrollIndicator = true,
  customCss,
  htmlId,
  htmlClasses = '',
}) => {
  const textColorClass = getTextColorClass(textColor)
  const textAlignmentClass = getTextAlignmentClass(textAlignment)
  const titleSizeClass = getTitleSizeClass(titleSize)
  const contentPositionClasses = getContentPositionClasses(contentPosition)
  const isFullHeight = height === '100vh'

  const heroStyle: React.CSSProperties = {
    height: height,
    minHeight: height === 'auto' ? '60vh' : height,
  }

  const VideoBackground = () => {
    if (background?.type !== 'video' || !background.videoUrl) return null

    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster={typeof background.videoPoster === 'string' ? background.videoPoster : background.videoPoster?.url}
      >
        <source src={background.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }

  const BackgroundOverlay = () => {
    if (!overlay?.enabled) return null

    return (
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: overlay.color || '#000000',
          opacity: overlay.opacity || 0.5,
        }}
      />
    )
  }

  const ScrollIndicator = () => {
    if (!showScrollIndicator || !isFullHeight) return null

    return (
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className={`flex flex-col items-center space-y-2 ${textColorClass}`}>
          <span className="text-sm font-medium tracking-wider uppercase opacity-80">
            Scroll
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </div>
    )
  }

  const backgroundConfig = background?.type === 'video' ? { type: 'none' } : background

  return (
    <section
      id={htmlId}
      className={`relative overflow-hidden ${htmlClasses}`}
      style={heroStyle}
    >
      {/* Custom CSS */}
      {customCss && (
        <style dangerouslySetInnerHTML={{ __html: customCss }} />
      )}

      {/* Background */}
      <BlockBackground background={backgroundConfig}>
        {/* Video Background */}
        <VideoBackground />

        {/* Background Overlay */}
        <BackgroundOverlay />

        {/* Content */}
        <div className={`relative z-20 h-full flex ${contentPositionClasses}`}>
          <div className="container mx-auto px-4">
            <div className={`max-w-4xl mx-auto ${textAlignmentClass}`}>
              {/* Eyebrow */}
              {eyebrow && (
                <div
                  className={`mb-6 ${enableAnimations ? 'animate-fade-in-up [--animation-delay:0s]' : ''}`}
                >
                  <span className={`text-sm md:text-base font-semibold tracking-wider uppercase opacity-90 ${textColorClass}`}>
                    {eyebrow}
                  </span>
                </div>
              )}

              {/* Main Title */}
              <BlockHeading
                text={title}
                level="h1"
                align={textAlignment}
                className={`font-bold leading-tight mb-8 ${titleSizeClass} ${textColorClass} ${
                  enableAnimations ? 'animate-fade-in-up [--animation-delay:0.2s]' : ''
                }`}
              />

              {/* Subtitle */}
              {subtitle && (
                <div
                  className={`mb-8 ${enableAnimations ? 'animate-fade-in-up [--animation-delay:0.4s]' : ''}`}
                >
                  <p className={`text-xl md:text-2xl lg:text-3xl font-light opacity-90 ${textColorClass}`}>
                    {subtitle}
                  </p>
                </div>
              )}

              {/* Description */}
              {description && (
                <div
                  className={`mb-10 ${enableAnimations ? 'animate-fade-in-up [--animation-delay:0.6s]' : ''}`}
                >
                  <BlockText
                    richText={description}
                    size="lg"
                    align={textAlignment}
                    prose={true}
                    className={`opacity-80 ${textColorClass}`}
                  />
                </div>
              )}

              {/* Call to Actions */}
              {callToActions && callToActions.length > 0 && (
                <div
                  className={`flex flex-col sm:flex-row gap-4 ${
                    textAlignment === 'center' ? 'justify-center' :
                    textAlignment === 'right' ? 'justify-end' :
                    'justify-start'
                  } ${enableAnimations ? 'animate-fade-in-up [--animation-delay:0.8s]' : ''}`}
                >
                  {callToActions.map((cta, index) => (
                    <a
                      key={index}
                      href={cta.url}
                      className={getButtonClasses(cta.appearance, cta.size)}
                    >
                      {cta.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator />
      </BlockBackground>
    </section>
  )
}

export default BigHero