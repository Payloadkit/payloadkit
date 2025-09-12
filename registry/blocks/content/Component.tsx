import React from 'react'

interface Column {
  size: 'oneThird' | 'half' | 'twoThirds' | 'full'
  richText: any // In a real app, this would be the rich text content
  enableLink?: boolean
  link?: {
    text?: string
    href?: string
    newTab?: boolean
  }
}

interface ContentBlockProps {
  columns: Column[]
  htmlId?: string
  htmlClasses?: string
}

export const ContentBlock: React.FC<ContentBlockProps> = ({
  columns,
  htmlId,
  htmlClasses,
}) => {
  const sizeClasses = {
    oneThird: 'md:w-1/3',
    half: 'md:w-1/2',
    twoThirds: 'md:w-2/3',
    full: 'w-full',
  }

  // Simple function to render rich text (in a real app, use proper rich text renderer)
  const renderRichText = (richText: any) => {
    // This is a simplified version - in practice you'd use the actual Lexical renderer
    if (typeof richText === 'string') {
      return <div dangerouslySetInnerHTML={{ __html: richText }} />
    }
    return <div>{JSON.stringify(richText)}</div>
  }

  return (
    <section
      id={htmlId}
      className={`py-12 ${htmlClasses || ''}`.trim()}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {columns.map((column, index) => (
            <div
              key={index}
              className={`w-full px-4 mb-8 ${sizeClasses[column.size]}`}
            >
              <div className="prose prose-lg max-w-none">
                {renderRichText(column.richText)}
              </div>
              
              {column.enableLink && column.link?.text && column.link?.href && (
                <div className="mt-4">
                  <a
                    href={column.link.href}
                    target={column.link.newTab ? '_blank' : undefined}
                    rel={column.link.newTab ? 'noopener noreferrer' : undefined}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {column.link.text} →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}