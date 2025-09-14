'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'
import {
  HelpCircle,
  Lightbulb,
  Zap,
  Target,
  Star,
  Clipboard,
  Search,
  MessageCircle,
  Smartphone,
  Timer,
  Lock,
  Rocket,
  CheckCircle,
  Settings,
} from 'lucide-react'

import {
  BlockBackground,
  BlockSection,
  BlockLayout,
  BlockHeading,
  BlockText,
} from '../blocks-shared'

// Icon mapping
const iconMap = {
  'help-circle': HelpCircle,
  lightbulb: Lightbulb,
  zap: Zap,
  target: Target,
  star: Star,
  clipboard: Clipboard,
  search: Search,
  'message-circle': MessageCircle,
  smartphone: Smartphone,
  timer: Timer,
  lock: Lock,
  rocket: Rocket,
  'check-circle': CheckCircle,
  settings: Settings,
} as const

interface FaqItemProps {
  icon?: keyof typeof iconMap | ''
  question: string
  answer: any
  showBorder: boolean
  isOpen: boolean
  onToggle: () => void
}

const FaqItem: React.FC<FaqItemProps> = ({
  icon,
  question,
  answer,
  showBorder,
  isOpen,
  onToggle,
}) => {
  const IconComponent = icon ? iconMap[icon] : null

  return (
    <div
      className={`${
        showBorder ? 'border-b border-border last:border-b-0' : ''
      } py-6`}
    >
      <button
        onClick={onToggle}
        className="flex justify-between items-start w-full text-left transition-colors group hover:text-foreground"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3 flex-1 pr-8">
          {/* Optional Icon */}
          {IconComponent && (
            <div className="mt-0.5 flex-shrink-0">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                <IconComponent className="w-4 h-4 text-primary" />
              </div>
            </div>
          )}

          {/* Question */}
          <h3 className="text-lg font-semibold text-foreground leading-7">
            {question}
          </h3>
        </div>

        {/* Toggle Icon */}
        <div className="flex-shrink-0 ml-4">
          <ChevronDown
            className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>

      {/* Answer */}
      {isOpen && (
        <div
          className={`mt-4 ${IconComponent ? 'ml-11' : ''} pr-8 animate-in slide-in-from-top-2 duration-200`}
        >
          <BlockText
            richText={answer}
            size="base"
            prose={true}
            className="text-muted-foreground"
          />
        </div>
      )}
    </div>
  )
}

export interface FaqBlockProps {
  eyebrow?: string
  title?: string
  description?: any
  layout?: 'single' | 'two-column'
  showBorder?: boolean
  background?: {
    type: 'none' | 'color' | 'gradient' | 'image'
    color?: string
    image?: string | { url: string }
  }
  cardBackground?: string
  faqs?: Array<{
    icon?: keyof typeof iconMap | ''
    question?: string
    answer?: any
  }>
  paddingTop?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  paddingBottom?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

export const FaqBlock: React.FC<FaqBlockProps> = ({
  eyebrow,
  title,
  description,
  layout = 'single',
  showBorder = true,
  background = { type: 'none' },
  cardBackground,
  faqs = [],
  paddingTop = 'lg',
  paddingBottom = 'lg',
}) => {
  const [openItems, setOpenItems] = React.useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (openItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <BlockBackground background={background}>
      <BlockSection paddingTop={paddingTop} paddingBottom={paddingBottom}>
        <BlockLayout layout={layout} gap="xl">
          {/* Header Section */}
          <div className={layout === 'two-column' ? 'lg:pr-8' : 'text-center mb-16 max-w-3xl mx-auto'}>
            {eyebrow && (
              <div className="mb-4">
                <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                  {eyebrow}
                </span>
              </div>
            )}

            {title && (
              <BlockHeading
                text={title}
                level="h2"
                align={layout === 'two-column' ? 'left' : 'center'}
                className="mb-6"
              />
            )}

            {description && (
              <BlockText
                richText={description}
                size="lg"
                align={layout === 'two-column' ? 'left' : 'center'}
                prose={true}
                className="text-muted-foreground"
              />
            )}
          </div>

          {/* FAQ Section */}
          <div className="w-full">
            <div
              className={`rounded-xl ${
                cardBackground
                  ? 'p-8'
                  : 'bg-card border border-border p-8'
              }`}
              style={
                cardBackground
                  ? { backgroundColor: cardBackground }
                  : undefined
              }
            >
              {faqs.length > 0 ? (
                <div className="space-y-0">
                  {faqs.map((faq, index) => (
                    <FaqItem
                      key={index}
                      icon={faq.icon}
                      question={faq.question || ''}
                      answer={faq.answer}
                      showBorder={showBorder}
                      isOpen={openItems.has(index)}
                      onToggle={() => toggleItem(index)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No FAQs available</p>
                </div>
              )}
            </div>
          </div>
        </BlockLayout>
      </BlockSection>
    </BlockBackground>
  )
}

export default FaqBlock