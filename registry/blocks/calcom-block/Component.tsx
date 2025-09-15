import React, { useEffect } from 'react'
import {
  Calendar,
  Clock,
  MessageCircle,
  Phone,
  Target,
  Check,
  Star,
  Shield,
} from 'lucide-react'

import {
  BlockBackground,
  BlockSection,
  BlockHeading,
  BlockText,
} from '../blocks-shared'

const iconMap = {
  calendar: Calendar,
  clock: Clock,
  'message-circle': MessageCircle,
  phone: Phone,
  target: Target,
  check: Check,
  star: Star,
  shield: Shield,
}

interface Feature {
  icon: keyof typeof iconMap
  text: string
}

export interface CalComBlockProps {
  calcomUsername: string
  eventType?: string
  theme?: 'auto' | 'light' | 'dark'
  layout?: 'full-width' | 'split-content' | 'split-calendar'
  height?: 'sm' | 'md' | 'lg' | 'auto'
  eyebrow?: string
  title?: string
  subtitle?: string
  description?: any
  features?: Feature[]
  background?: {
    type: 'color' | 'gradient' | 'image' | 'none'
    color?: string
    gradientFrom?: string
    gradientTo?: string
    gradientDirection?: string
    image?: string | { url: string }
  }
  textColor?: 'dark' | 'light' | 'primary'
  paddingTop?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  paddingBottom?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  customCss?: string
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

const getHeightClass = (height: string = 'lg') => {
  switch (height) {
    case 'sm':
      return 'h-[400px]'
    case 'md':
      return 'h-[600px]'
    case 'lg':
      return 'h-[800px]'
    case 'auto':
      return 'h-auto min-h-[600px]'
    default:
      return 'h-[800px]'
  }
}

export const CalComBlock: React.FC<CalComBlockProps> = ({
  calcomUsername,
  eventType,
  theme = 'auto',
  layout = 'full-width',
  height = 'lg',
  eyebrow,
  title = 'Schedule a Meeting',
  subtitle,
  description,
  features = [],
  background = { type: 'none' },
  textColor = 'dark',
  paddingTop = 'xl',
  paddingBottom = 'xl',
  customCss,
  htmlId,
  htmlClasses = '',
}) => {
  const textColorClass = getTextColorClass(textColor)
  const heightClass = getHeightClass(height)

  // Construct Cal.com URL
  const calUrl = eventType
    ? `https://cal.com/${calcomUsername}/${eventType}`
    : `https://cal.com/${calcomUsername}`

  // Load Cal.com embed script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://app.cal.com/embed/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  // Initialize Cal.com embed
  useEffect(() => {
    const timer = setTimeout(() => {
      // @ts-ignore - Cal.com embed API
      if (typeof window !== 'undefined' && window.Cal) {
        // @ts-ignore
        window.Cal('init')
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [calcomUsername, eventType, theme])

  const CalendarEmbed = () => (
    <div className={`w-full ${heightClass} bg-white rounded-lg border border-border overflow-hidden`}>
      <iframe
        src={`${calUrl}/embed?theme=${theme}`}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="camera; microphone; autoplay; encrypted-media; fullscreen; display-capture"
        style={{ border: 'none' }}
      />
    </div>
  )

  const ContentSection = () => (
    <div className="flex flex-col justify-center">
      {eyebrow && (
        <div className="mb-4">
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">
            {eyebrow}
          </span>
        </div>
      )}

      <BlockHeading
        text={title}
        level="h2"
        align="left"
        className={`mb-6 ${textColorClass}`}
      />

      {subtitle && (
        <p className={`text-xl mb-6 ${textColorClass}`}>{subtitle}</p>
      )}

      {description && (
        <div className="mb-8">
          <BlockText
            richText={description}
            size="lg"
            align="left"
            prose={true}
            className={textColorClass}
          />
        </div>
      )}

      {features && features.length > 0 && (
        <div className="space-y-4">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon]
            return (
              <div key={index} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg flex-shrink-0">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <span className={`text-base ${textColorClass}`}>
                  {feature.text}
                </span>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )

  const renderLayout = () => {
    switch (layout) {
      case 'split-content':
        return (
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ContentSection />
            <CalendarEmbed />
          </div>
        )
      case 'split-calendar':
        return (
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <CalendarEmbed />
            <ContentSection />
          </div>
        )
      case 'full-width':
      default:
        return <CalendarEmbed />
    }
  }

  return (
    <section
      id={htmlId}
      className={`relative ${htmlClasses}`}
    >
      {/* Custom CSS */}
      {customCss && (
        <style dangerouslySetInnerHTML={{ __html: customCss }} />
      )}

      <BlockBackground background={background}>
        <BlockSection paddingTop={paddingTop} paddingBottom={paddingBottom}>
          {renderLayout()}
        </BlockSection>
      </BlockBackground>
    </section>
  )
}

export default CalComBlock