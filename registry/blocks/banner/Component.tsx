import React from 'react'

interface BannerBlockProps {
  eyebrow?: string
  title: string
  description?: string
  actions?: Array<{
    text: string
    href: string
    appearance: 'default' | 'outline'
    newTab?: boolean
  }>
  backgroundColor?: string
  textAlignment?: 'left' | 'center' | 'right'
  height?: string
  htmlId?: string
  htmlClasses?: string
}

export const BannerBlock: React.FC<BannerBlockProps> = ({
  eyebrow,
  title,
  description,
  actions,
  backgroundColor = 'transparent',
  textAlignment = 'center',
  height = 'auto',
  htmlId,
  htmlClasses,
}) => {
  const backgroundClasses = {
    transparent: 'bg-transparent',
    white: 'bg-white',
    'gray-light': 'bg-gray-100',
    'gray-dark': 'bg-gray-800 text-white',
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-gray-600 text-white',
  }

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  const heightClasses = {
    auto: 'py-16',
    small: 'py-12',
    medium: 'py-20',
    large: 'py-32',
  }

  return (
    <section
      id={htmlId}
      className={`
        ${backgroundClasses[backgroundColor as keyof typeof backgroundClasses] || 'bg-transparent'}
        ${alignmentClasses[textAlignment as keyof typeof alignmentClasses] || 'text-center'}
        ${heightClasses[height as keyof typeof heightClasses] || 'py-16'}
        ${htmlClasses || ''}
      `.trim()}
    >
      <div className="container mx-auto px-4">
        {eyebrow && (
          <p className="text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">
            {eyebrow}
          </p>
        )}
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {title}
        </h1>
        
        {description && (
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        
        {actions && actions.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {actions.map((action, index) => (
              <a
                key={index}
                href={action.href}
                target={action.newTab ? '_blank' : undefined}
                rel={action.newTab ? 'noopener noreferrer' : undefined}
                className={`
                  inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg transition-colors duration-200
                  ${action.appearance === 'outline'
                    ? 'border-2 border-current text-current hover:bg-current hover:text-white'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                  }
                `.trim()}
              >
                {action.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}