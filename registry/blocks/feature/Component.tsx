import React from 'react'

// Simple icon components (in a real app, you'd use a proper icon library)
const icons = {
  star: '⭐',
  zap: '⚡',
  shield: '🛡️',
  heart: '❤️',
  settings: '⚙️',
  chart: '📊',
  target: '🎯',
  lightbulb: '💡',
  trophy: '🏆',
  users: '👥',
}

interface Feature {
  icon?: keyof typeof icons
  iconColor?: string
  title: string
  description: string
  link?: {
    text?: string
    href?: string
    newTab?: boolean
  }
}

interface FeatureBlockProps {
  eyebrow?: string
  title: string
  description?: string
  layout?: 'grid-2' | 'grid-3' | 'grid-4' | 'list'
  features: Feature[]
  backgroundColor?: string
  htmlId?: string
  htmlClasses?: string
}

export const FeatureBlock: React.FC<FeatureBlockProps> = ({
  eyebrow,
  title,
  description,
  layout = 'grid-3',
  features,
  backgroundColor = 'transparent',
  htmlId,
  htmlClasses,
}) => {
  const backgroundClasses = {
    transparent: 'bg-transparent',
    white: 'bg-white',
    'gray-light': 'bg-gray-50',
    'gray-dark': 'bg-gray-900 text-white',
  }

  const gridClasses = {
    'grid-2': 'grid-cols-1 md:grid-cols-2',
    'grid-3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    'grid-4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    list: 'grid-cols-1',
  }

  const iconColorClasses = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    gray: 'text-gray-500',
    red: 'text-red-500',
    green: 'text-green-500',
    blue: 'text-blue-500',
  }

  return (
    <section
      id={htmlId}
      className={`
        py-16
        ${backgroundClasses[backgroundColor as keyof typeof backgroundClasses] || 'bg-transparent'}
        ${htmlClasses || ''}
      `.trim()}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {eyebrow && (
            <p className="text-sm font-medium text-gray-600 mb-2 uppercase tracking-wide">
              {eyebrow}
            </p>
          )}
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          
          {description && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className={`grid gap-8 ${gridClasses[layout]}`}>
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              {feature.icon && (
                <div className={`text-4xl mb-4 ${iconColorClasses[feature.iconColor as keyof typeof iconColorClasses] || 'text-blue-600'}`}>
                  {icons[feature.icon]}
                </div>
              )}
              
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              
              {feature.link?.text && feature.link?.href && (
                <a
                  href={feature.link.href}
                  target={feature.link.newTab ? '_blank' : undefined}
                  rel={feature.link.newTab ? 'noopener noreferrer' : undefined}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {feature.link.text} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}