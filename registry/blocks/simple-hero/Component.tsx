import React from 'react'
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

export interface SimpleHeroBlockProps {
  eyebrow?: string
  title: string
  subtitle?: string
  description?: any
  callToActions?: CallToAction[]
  layout?: 'centered' | 'left' | 'right' | 'split'
  contentWidth?: 'narrow' | 'medium' | 'wide' | 'full'
  image?: string | { url: string }
  imagePosition?: 'right' | 'left'
  background?: {
    type: 'color' | 'gradient' | 'image' | 'none'
    color?: string
    gradientFrom?: string
    gradientTo?: string
    gradientDirection?: string
    image?: string | { url: string }
  }
  textColor?: 'dark' | 'light' | 'primary'
  titleSize?: 'sm' | 'md' | 'lg' | 'xl'
  paddingTop?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  paddingBottom?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  htmlId?: string
  htmlClasses?: string
}

const getTextColorClass = (textColor: string = 'dark') => {
  switch (textColor) {
    case 'light':
      return 'text-white'
    case 'primary':
      return 'text-primary'
    case 'dark':
    default:
      return 'text-foreground'
  }
}

const getTextAlignmentClass = (layout: string = 'centered') => {
  switch (layout) {
    case 'left':
      return 'text-left'
    case 'right':
      return 'text-right'
    case 'centered':
    default:
      return 'text-center'
  }
}

const getTitleSizeClass = (size: string = 'lg') => {
  switch (size) {
    case 'sm':
      return 'text-3xl md:text-4xl lg:text-5xl'
    case 'md':
      return 'text-4xl md:text-5xl lg:text-6xl'
    case 'lg':
      return 'text-5xl md:text-6xl lg:text-7xl'
    case 'xl':
      return 'text-6xl md:text-7xl lg:text-8xl'
    default:
      return 'text-5xl md:text-6xl lg:text-7xl'
  }
}

const getContentWidthClass = (width: string = 'medium') => {
  switch (width) {
    case 'narrow':
      return 'max-w-2xl'
    case 'medium':
      return 'max-w-4xl'
    case 'wide':
      return 'max-w-6xl'
    case 'full':
      return 'max-w-none'
    default:
      return 'max-w-4xl'
  }
}

const getJustifyClass = (layout: string = 'centered') => {
  switch (layout) {
    case 'left':
      return 'justify-start'
    case 'right':
      return 'justify-end'
    case 'centered':
    default:
      return 'justify-center'
  }
}

const getButtonClasses = (appearance: string = 'primary', size: string = 'default') => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

  const sizeClasses = {
    sm: 'h-9 px-3 text-sm',
    default: 'h-10 px-4 py-2',
    lg: 'h-11 px-8'
  }

  const appearanceClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
  }

  return `${baseClasses} ${sizeClasses[size as keyof typeof sizeClasses]} ${appearanceClasses[appearance as keyof typeof appearanceClasses]}`
}

export const SimpleHero: React.FC<SimpleHeroBlockProps> = ({
  eyebrow,
  title,
  subtitle,
  description,
  callToActions = [],
  layout = 'centered',
  contentWidth = 'medium',
  image,
  imagePosition = 'right',
  background = { type: 'none' },
  textColor = 'dark',
  titleSize = 'lg',
  paddingTop = 'xl',
  paddingBottom = 'xl',
  htmlId,
  htmlClasses = '',
}) => {
  const textColorClass = getTextColorClass(textColor)
  const textAlignmentClass = getTextAlignmentClass(layout)
  const titleSizeClass = getTitleSizeClass(titleSize)
  const contentWidthClass = getContentWidthClass(contentWidth)
  const justifyClass = getJustifyClass(layout)

  const ContentSection = () => (
    <div className={`${layout !== 'split' ? contentWidthClass : ''} ${layout !== 'split' ? 'mx-auto' : ''}`}>
      {/* Eyebrow */}
      {eyebrow && (
        <div className={`mb-6 ${textAlignmentClass}`}>
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">
            {eyebrow}
          </span>
        </div>
      )}

      {/* Main Title */}
      <BlockHeading
        text={title}
        level="h1"
        align={layout === 'split' ? 'left' : layout}
        className={`font-bold leading-tight mb-6 ${titleSizeClass} ${textColorClass}`}
      />

      {/* Subtitle */}
      {subtitle && (
        <div className={`mb-6 ${textAlignmentClass}`}>
          <p className={`text-xl md:text-2xl font-light opacity-90 ${textColorClass}`}>
            {subtitle}
          </p>
        </div>
      )}

      {/* Description */}
      {description && (
        <div className="mb-8">
          <BlockText
            richText={description}
            size="lg"
            align={layout === 'split' ? 'left' : layout}
            prose={true}
            className={`opacity-80 ${textColorClass}`}
          />
        </div>
      )}

      {/* Call to Actions */}
      {callToActions && callToActions.length > 0 && (
        <div
          className={`flex flex-col sm:flex-row gap-4 ${
            layout === 'split' ? 'justify-start' :
            layout === 'right' ? 'justify-end' :
            layout === 'left' ? 'justify-start' :
            'justify-center'
          }`}
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
  )

  const ImageSection = () => {
    if (!image || layout !== 'split') return null

    return (
      <div className="flex items-center justify-center">
        <div className="relative max-w-lg w-full">
          <img
            src={typeof image === 'string' ? image : image.url}
            alt=""
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    )
  }

  const renderLayout = () => {
    if (layout === 'split') {
      const isImageLeft = imagePosition === 'left'

      return (
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {isImageLeft ? (
            <>
              <ImageSection />
              <ContentSection />
            </>
          ) : (
            <>
              <ContentSection />
              <ImageSection />
            </>
          )}
        </div>
      )
    }

    return (
      <div className={`flex ${justifyClass}`}>
        <ContentSection />
      </div>
    )
  }

  return (
    <section
      id={htmlId}
      className={`relative ${htmlClasses}`}
    >
      <BlockBackground background={background}>
        <BlockSection paddingTop={paddingTop} paddingBottom={paddingBottom}>
          {renderLayout()}
        </BlockSection>
      </BlockBackground>
    </section>
  )
}

export default SimpleHero