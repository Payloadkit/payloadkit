import React from 'react'
import {
  Target,
  MessageCircle,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Zap,
  Search,
  Star,
  Rocket,
  GraduationCap,
  Settings,
  BarChart,
  Shield,
  Heart,
  Trophy,
  Palette,
  Check,
} from 'lucide-react'

import {
  BlockBackground,
  BlockSection,
  BlockHeading,
  BlockText,
} from '../blocks-shared'

const iconMap = {
  target: Target,
  'message-circle': MessageCircle,
  'trending-up': TrendingUp,
  'book-open': BookOpen,
  lightbulb: Lightbulb,
  zap: Zap,
  search: Search,
  star: Star,
  rocket: Rocket,
  'graduation-cap': GraduationCap,
  settings: Settings,
  'bar-chart': BarChart,
  shield: Shield,
  heart: Heart,
  trophy: Trophy,
  palette: Palette,
}

interface Step {
  icon: keyof typeof iconMap
  title: string
  description: any
  showImage?: boolean
  image?: string | { url: string }
}

interface Advantage {
  text: string
}

export interface FeatureStepsBlockProps {
  sectionLayout?: 'stacked' | 'two-column'
  eyebrow?: string
  title: string
  subtitle?: string
  description?: any
  background?: {
    type: 'color' | 'gradient' | 'image' | 'none'
    color?: string
    gradientFrom?: string
    gradientTo?: string
    gradientDirection?: string
    image?: string | { url: string }
  }
  textColor?: 'dark' | 'light' | 'primary'
  stepsTitle?: string
  stepsLayout?: 'grid-2' | 'grid-3' | 'grid-4' | 'vertical' | 'stair'
  stepAlignment?: 'left' | 'center'
  cardStyle?: 'elevated' | 'flat' | 'minimal'
  showStepNumbers?: boolean
  steps: Step[]
  showAdvantages?: boolean
  advantagesTitle?: string
  advantagesCardStyle?: 'elevated' | 'flat' | 'minimal'
  advantages?: Advantage[]
  paddingTop?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  paddingBottom?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
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

const getCardClasses = (style: string = 'elevated') => {
  const base = 'rounded-lg p-6 h-full transition-all duration-200'

  switch (style) {
    case 'elevated':
      return `${base} bg-card border border-border shadow-md hover:shadow-lg`
    case 'flat':
      return `${base} bg-card border border-border`
    case 'minimal':
      return `${base} bg-transparent`
    default:
      return base
  }
}

const getGridClasses = (layout: string = 'grid-3') => {
  switch (layout) {
    case 'grid-2':
      return 'grid md:grid-cols-2 gap-6'
    case 'grid-3':
      return 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
    case 'grid-4':
      return 'grid md:grid-cols-2 lg:grid-cols-4 gap-6'
    case 'vertical':
      return 'space-y-6'
    case 'stair':
      return 'space-y-8'
    default:
      return 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
  }
}

export const FeatureStepsBlock: React.FC<FeatureStepsBlockProps> = ({
  sectionLayout = 'stacked',
  eyebrow,
  title,
  subtitle,
  description,
  background = { type: 'gradient', gradientFrom: '#f0f9ff', gradientTo: '#dbeafe', gradientDirection: 'to-br' },
  textColor = 'dark',
  stepsTitle = 'How it works',
  stepsLayout = 'grid-3',
  stepAlignment = 'left',
  cardStyle = 'elevated',
  showStepNumbers = true,
  steps,
  showAdvantages = true,
  advantagesTitle = 'Key Benefits',
  advantagesCardStyle = 'elevated',
  advantages = [],
  paddingTop = 'xl',
  paddingBottom = 'xl',
}) => {
  const textColorClass = getTextColorClass(textColor)
  const gridClasses = getGridClasses(stepsLayout)
  const cardClasses = getCardClasses(cardStyle)
  const advantagesCardClasses = getCardClasses(advantagesCardStyle)
  const alignmentClass = stepAlignment === 'center' ? 'text-center' : 'text-left'

  const renderStep = (step: Step, index: number) => {
    const Icon = iconMap[step.icon]
    const isStairLayout = stepsLayout === 'stair'
    const isEven = index % 2 === 0

    if (isStairLayout) {
      return (
        <div
          key={index}
          className={`flex items-center gap-8 ${!isEven ? 'flex-row-reverse' : ''}`}
        >
          {/* Content */}
          <div className="flex-1">
            <div className={cardClasses}>
              <div className={`flex items-start gap-4 ${alignmentClass}`}>
                {showStepNumbers && (
                  <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                  </div>
                  <BlockText
                    richText={step.description}
                    size="sm"
                    className={textColorClass}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          {step.showImage && step.image && (
            <div className="w-48 h-48 relative rounded-lg overflow-hidden bg-muted">
              <img
                src={typeof step.image === 'string' ? step.image : step.image.url}
                alt={step.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      )
    }

    return (
      <div key={index} className={cardClasses}>
        <div className={`${alignmentClass}`}>
          <div className={`flex ${stepAlignment === 'center' ? 'flex-col items-center' : 'items-start'} gap-4 mb-4`}>
            {showStepNumbers && (
              <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold flex-shrink-0">
                {index + 1}
              </div>
            )}
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
              <Icon className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
          <BlockText
            richText={step.description}
            size="sm"
            className={textColorClass}
          />
        </div>
      </div>
    )
  }

  const HeaderContent = () => (
    <div className={`${sectionLayout === 'two-column' ? 'lg:w-1/2' : 'max-w-3xl mx-auto text-center'}`}>
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
        align={sectionLayout === 'two-column' ? 'left' : 'center'}
        className={`mb-6 ${textColorClass}`}
      />

      {subtitle && (
        <p className={`text-xl mb-6 ${textColorClass}`}>{subtitle}</p>
      )}

      {description && (
        <BlockText
          richText={description}
          size="lg"
          align={sectionLayout === 'two-column' ? 'left' : 'center'}
          prose={true}
          className={textColorClass}
        />
      )}
    </div>
  )

  return (
    <BlockBackground background={background}>
      <BlockSection paddingTop={paddingTop} paddingBottom={paddingBottom}>
        {/* Header Section */}
        <div className={`mb-16 ${sectionLayout === 'two-column' ? 'flex items-start gap-16' : ''}`}>
          <HeaderContent />

          {sectionLayout === 'two-column' && (
            <div className="lg:w-1/2">
              {/* This could contain an image or additional content */}
            </div>
          )}
        </div>

        {/* Steps Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <BlockHeading
              text={stepsTitle}
              level="h3"
              align="center"
              className={`${textColorClass}`}
            />
          </div>

          <div className={gridClasses}>
            {steps.map((step, index) => renderStep(step, index))}
          </div>
        </div>

        {/* Advantages Section */}
        {showAdvantages && advantages && advantages.length > 0 && (
          <div>
            <div className="text-center mb-12">
              <BlockHeading
                text={advantagesTitle}
                level="h3"
                align="center"
                className={`${textColorClass}`}
              />
            </div>

            <div className={advantagesCardClasses}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className={`text-sm ${textColorClass}`}>{advantage.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </BlockSection>
    </BlockBackground>
  )
}

export default FeatureStepsBlock