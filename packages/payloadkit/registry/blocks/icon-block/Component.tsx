import React from 'react'

// Simple icon components
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
  check: '✅',
  warning: '⚠️',
  info: 'ℹ️',
}

interface IconBlockProps {
  icon: keyof typeof icons
  iconColor?: string
  iconSize?: 'small' | 'medium' | 'large'
  title: string
  description?: string
  textAlignment?: 'left' | 'center' | 'right'
  backgroundColor?: string
  htmlId?: string
  htmlClasses?: string
}

export const IconBlock: React.FC<IconBlockProps> = ({
  icon,
  iconColor = 'primary',
  iconSize = 'medium',
  title,
  description,
  textAlignment = 'center',
  backgroundColor = 'transparent',
  htmlId,
  htmlClasses,
}) => {
  const iconColorClasses = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    error: 'text-red-600',
    gray: 'text-gray-500',
  }

  const iconSizeClasses = {
    small: 'text-3xl',
    medium: 'text-5xl',
    large: 'text-6xl',
  }

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  const backgroundClasses = {
    transparent: 'bg-transparent',
    white: 'bg-white',
    'gray-light': 'bg-gray-50',
    'primary-light': 'bg-blue-50',
  }

  return (
    <section
      id={htmlId}
      className={`
        py-12
        ${backgroundClasses[backgroundColor as keyof typeof backgroundClasses] || 'bg-transparent'}
        ${htmlClasses || ''}
      `.trim()}
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-lg mx-auto ${alignmentClasses[textAlignment]}`}>
          <div className={`mb-6 ${iconColorClasses[iconColor as keyof typeof iconColorClasses]} ${iconSizeClasses[iconSize]}`}>
            {icons[icon]}
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {title}
          </h3>
          
          {description && (
            <p className="text-lg text-gray-600">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}