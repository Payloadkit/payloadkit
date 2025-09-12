import React from 'react'

export interface HeroBlockProps {
  title?: string
  subtitle?: string
  description?: string
  backgroundImage?: any
  buttons?: Array<{
    label: string
    url: string
    type?: 'primary' | 'secondary'
  }>
}

export const HeroBlock: React.FC<HeroBlockProps> = ({
  title,
  subtitle, 
  description,
  backgroundImage,
  buttons = []
}) => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      {backgroundImage && (
        <div className="absolute inset-0 bg-black opacity-50" />
      )}
      
      <div className="relative container mx-auto px-4 py-24 text-center">
        {subtitle && (
          <p className="text-lg font-medium text-blue-100 mb-4">
            {subtitle}
          </p>
        )}
        
        {title && (
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {title}
          </h1>
        )}
        
        {description && (
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        
        {buttons.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.url}
                className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  button.type === 'secondary'
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {button.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}