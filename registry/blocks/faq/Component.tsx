import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

interface FaqItem {
  question: string
  answer: any // Rich text content
}

interface FaqBlockProps {
  title?: string
  description?: string
  faqs: FaqItem[]
  backgroundColor?: string
  textColor?: string
  htmlId?: string
  htmlClasses?: string
}

export const FaqBlock: React.FC<FaqBlockProps> = ({
  title = 'Frequently Asked Questions',
  description,
  faqs,
  backgroundColor = 'transparent',
  textColor = 'default',
  htmlId,
  htmlClasses,
}) => {
  const backgroundClasses = {
    transparent: 'bg-transparent',
    white: 'bg-white',
    'gray-light': 'bg-gray-50',
    'gray-dark': 'bg-gray-900',
  }

  const textClasses = {
    default: 'text-foreground',
    white: 'text-white',
    gray: 'text-muted-foreground',
  }

  // Simple function to render rich text
  const renderRichText = (richText: any) => {
    if (typeof richText === 'string') {
      return <div dangerouslySetInnerHTML={{ __html: richText }} />
    }
    return <div className="prose prose-sm max-w-none dark:prose-invert">{JSON.stringify(richText)}</div>
  }

  return (
    <section
      id={htmlId}
      className={`
        py-16
        ${backgroundClasses[backgroundColor as keyof typeof backgroundClasses] || 'bg-transparent'}
        ${textClasses[textColor as keyof typeof textClasses] || 'text-foreground'}
        ${htmlClasses || ''}
      `.trim()}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            
            {description && (
              <p className="text-lg text-muted-foreground">
                {description}
              </p>
            )}
          </div>

          <Accordion type="multiple" className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  {renderRichText(faq.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}