'use client'

import React from 'react'
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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  BlockBackground,
  BlockSection,
  BlockLayout,
  BlockHeading,
  BlockText,
  type RichTextContent,
  type BackgroundFieldValue,
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

export interface FaqBlockProps {
  eyebrow?: string
  title?: string
  description?: RichTextContent
  layout?: 'single' | 'two-column'
  showBorder?: boolean
  background?: BackgroundFieldValue
  cardBackground?: string
  faqs?: Array<{
    icon?: keyof typeof iconMap | ''
    question?: string
    answer?: RichTextContent
  }>
  paddingTop?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  paddingBottom?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  // Accordion specific props
  type?: 'single' | 'multiple'
  collapsible?: boolean
  defaultValue?: string | string[]
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
  paddingTop = 'xl',
  paddingBottom = 'xl',
  type = 'single',
  collapsible = true,
  defaultValue,
}) => {
  if (!faqs.length) {
    return null
  }

  const renderFaqItem = (faq: any, index: number) => {
    const IconComponent = faq.icon ? iconMap[faq.icon as keyof typeof iconMap] : null

    return (
      <AccordionItem key={index} value={`item-${index}`} className={showBorder ? '' : 'border-none'}>
        <AccordionTrigger className="flex items-start gap-3 text-left hover:no-underline">
          {/* Optional Icon */}
          {IconComponent && (
            <div className="mt-0.5 flex-shrink-0">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                <IconComponent className="w-4 h-4 text-primary" />
              </div>
            </div>
          )}

          {/* Question */}
          <span className="text-lg font-semibold text-foreground leading-7 flex-1">
            {faq.question || ''}
          </span>
        </AccordionTrigger>

        <AccordionContent className={IconComponent ? 'ml-11' : ''}>
          <BlockText
            richText={faq.answer}
            size="base"
            prose={true}
            className="text-muted-foreground"
          />
        </AccordionContent>
      </AccordionItem>
    )
  }

  return (
    <BlockBackground background={background}>
      <BlockSection paddingTop={paddingTop} paddingBottom={paddingBottom}>
        <BlockLayout layout={layout === 'two-column' ? 'split' : 'single'}>
          {/* Header Content */}
          <div className={`${layout === 'two-column' ? 'w-full lg:w-1/3' : 'w-full max-w-3xl mx-auto'} mb-12`}>
            {eyebrow && (
              <div className={`mb-4 ${layout === 'two-column' ? 'text-left' : 'text-center'}`}>
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
          <div className={`${layout === 'two-column' ? 'w-full lg:w-2/3' : 'w-full max-w-3xl mx-auto'}`}>
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
              <Accordion
                type={type}
                collapsible={collapsible}
                defaultValue={defaultValue}
                className="w-full"
              >
                {faqs.map((faq, index) => renderFaqItem(faq, index))}
              </Accordion>
            </div>
          </div>
        </BlockLayout>
      </BlockSection>
    </BlockBackground>
  )
}

export default FaqBlock