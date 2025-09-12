import React, { useState } from 'react'

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
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const backgroundClasses = {
    transparent: 'bg-transparent',
    white: 'bg-white',
    'gray-light': 'bg-gray-50',
    'gray-dark': 'bg-gray-900',
  }

  const textClasses = {
    default: 'text-gray-900',
    white: 'text-white',
    gray: 'text-gray-600',
  }

  // Simple function to render rich text
  const renderRichText = (richText: any) => {
    if (typeof richText === 'string') {
      return <div dangerouslySetInnerHTML={{ __html: richText }} />
    }
    return <div className="prose prose-sm max-w-none">{JSON.stringify(richText)}</div>
  }

  return (
    <section
      id={htmlId}
      className={`
        py-16
        ${backgroundClasses[backgroundColor as keyof typeof backgroundClasses] || 'bg-transparent'}
        ${textClasses[textColor as keyof typeof textClasses] || 'text-gray-900'}
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
              <p className="text-lg text-gray-600">
                {description}
              </p>
            )}
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left px-6 py-4 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold pr-4">
                      {faq.question}
                    </h3>
                    <span className="text-xl text-gray-500">
                      {openItems.includes(index) ? '−' : '+'}
                    </span>
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <div className="pt-4">
                      {renderRichText(faq.answer)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}