import React from 'react'
import { ArrowRight } from 'lucide-react'
import {
  Star,
  Zap,
  Shield,
  Heart,
  Settings,
  BarChart3 as Chart,
  Target,
  Lightbulb,
  Trophy,
  Users,
  Smartphone,
  Globe,
  Lock,
  Rocket,
  Clock,
  CheckCircle,
} from 'lucide-react'

import {
  BlockBackground,
  BlockSection,
  BlockLayout,
  BlockHeading,
  BlockText,
  useThemeColor,
  type ColorFieldValue,
  type RichTextContent,
  type BackgroundFieldValue,
} from '../blocks-shared'

// Icon mapping
const iconMap = {
  star: Star,
  zap: Zap,
  shield: Shield,
  heart: Heart,
  settings: Settings,
  chart: Chart,
  target: Target,
  lightbulb: Lightbulb,
  trophy: Trophy,
  users: Users,
  smartphone: Smartphone,
  globe: Globe,
  lock: Lock,
  rocket: Rocket,
  clock: Clock,
  'check-circle': CheckCircle,
} as const

interface FeatureItemProps {
  icon?: keyof typeof iconMap
  iconColor?: string
  title?: string
  description?: RichTextContent
  link?: {
    text?: string
    url?: string
    newTab?: boolean
  }
  isListLayout: boolean
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  iconColor = '#3b82f6',
  title,
  description,
  link,
  isListLayout,
}) => {
  const Icon = icon ? iconMap[icon] : null

  return (
    <div
      className={`group relative h-full transition-all duration-300 ${
        isListLayout
          ? 'flex gap-6 p-6 bg-card rounded-lg border border-border hover:border-border/60 hover:shadow-sm'
          : 'flex flex-col text-center p-6 bg-card rounded-lg border border-border hover:border-border/60 hover:shadow-md'
      }`}
    >
      {/* Icon */}
      {Icon && (
        <div
          className={`flex-shrink-0 ${
            isListLayout ? 'mt-1' : 'mx-auto mb-4'
          }`}
        >
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-full transition-transform hover:scale-105"
            style={{ backgroundColor: iconColor }}
          >
            <Icon
              className="w-6 h-6 text-white"
              style={{ color: 'white' }}
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div
        className={
          isListLayout ? 'flex-1 min-w-0' : 'flex-1 flex flex-col'
        }
      >
        {/* Title */}
        {title && (
          <h3
            className={`font-semibold text-foreground mb-3 ${
              isListLayout ? 'text-xl' : 'text-lg'
            }`}
          >
            {title}
          </h3>
        )}

        {/* Description */}
        {description && (
          <BlockText
            richText={description}
            size="sm"
            prose={true}
            className={`text-muted-foreground ${
              isListLayout ? 'mb-4' : 'mb-6 flex-1'
            }`}
          />
        )}

        {/* Link */}
        {link?.text && link?.url && (
          <div className={!isListLayout ? 'mt-auto' : ''}>
            <a
              href={link.url}
              target={link.newTab ? '_blank' : undefined}
              rel={link.newTab ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              {link.text}
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export interface FeatureBlockProps {
  eyebrow?: string
  eyebrowStyle?: 'text' | 'badge'
  title?: string
  description?: RichTextContent
  layout?: 'grid-2' | 'grid-3' | 'grid-4' | 'list'
  background?: BackgroundFieldValue
  features?: Array<{
    icon?: keyof typeof iconMap
    iconColor?: string
    title?: string
    description?: RichTextContent
    link?: {
      text?: string
      url?: string
      newTab?: boolean
    }
  }>
  paddingTop?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  paddingBottom?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

export const FeatureBlock: React.FC<FeatureBlockProps> = ({
  eyebrow,
  eyebrowStyle = 'text',
  title,
  description,
  layout = 'grid-3',
  background = { type: 'none' },
  features = [],
  paddingTop = 'lg',
  paddingBottom = 'lg',
}) => {
  const isListLayout = layout === 'list'

  return (
    <BlockBackground background={background}>
      <BlockSection paddingTop={paddingTop} paddingBottom={paddingBottom}>
        {/* Header */}
        {(eyebrow || title) && (
          <div className="text-center mb-16 max-w-3xl mx-auto">
            {eyebrow && (
              <div className="mb-4">
                <span
                  className={
                    eyebrowStyle === 'badge'
                      ? 'inline-flex items-center px-3 py-1 rounded-full border border-border bg-muted text-muted-foreground text-sm font-semibold tracking-wide uppercase'
                      : 'text-primary text-sm font-semibold tracking-wide uppercase'
                  }
                >
                  {eyebrow}
                </span>
              </div>
            )}

            {title && (
              <BlockHeading text={title} level="h2" align="center" />
            )}
          </div>
        )}

        {/* Description */}
        {description && (
          <BlockText
            richText={description}
            size="lg"
            align="center"
            prose={true}
            className="mb-16 max-w-3xl mx-auto"
          />
        )}

        {/* Features Grid */}
        {features.length > 0 && (
          <BlockLayout layout={layout} gap="lg" equalHeight={!isListLayout}>
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                iconColor={feature.iconColor}
                title={feature.title}
                description={feature.description}
                link={feature.link}
                isListLayout={isListLayout}
              />
            ))}
          </BlockLayout>
        )}
      </BlockSection>
    </BlockBackground>
  )
}

export default FeatureBlock