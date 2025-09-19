import React from 'react'
import DOMPurify from 'dompurify'
import type { RichTextContent } from '../blocks-shared'

interface TextBlockProps {
  title?: string
  richText: RichTextContent
  textAlignment?: 'left' | 'center' | 'right'
  maxWidth?: 'prose' | 'medium' | 'large' | 'full'
  htmlId?: string
  htmlClasses?: string
}

export const TextBlock: React.FC<TextBlockProps> = ({
  title,
  richText,
  textAlignment = 'left',
  maxWidth = 'prose',
  htmlId,
  htmlClasses,
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }

  const widthClasses = {
    prose: 'max-w-prose',
    medium: 'max-w-2xl',
    large: 'max-w-4xl',
    full: 'max-w-none',
  }

  // Simple function to render rich text
  const renderRichText = (richText: RichTextContent) => {
    if (typeof richText === 'string') {
      const sanitizedHtml = DOMPurify.sanitize(richText)
      return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
    }
    return <div>{JSON.stringify(richText)}</div>
  }

  return (
    <section
      id={htmlId}
      className={`py-12 ${htmlClasses || ''}`.trim()}
    >
      <div className="container mx-auto px-4">
        <div className={`
          ${widthClasses[maxWidth]} 
          ${alignmentClasses[textAlignment]}
        `.trim()}>
          {title && (
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {title}
            </h2>
          )}
          
          <div className="prose prose-lg max-w-none">
            {renderRichText(richText)}
          </div>
        </div>
      </div>
    </section>
  )
}