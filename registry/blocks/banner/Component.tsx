import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

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
    left: 'text-left justify-start',
    center: 'text-center justify-center',
    right: 'text-right justify-end',
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
        ${alignmentClasses[textAlignment as keyof typeof alignmentClasses] || 'text-center justify-center'}
        ${heightClasses[height as keyof typeof heightClasses] || 'py-16'}
        ${htmlClasses || ''}
      `.trim()}
    >
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${textAlignment === 'center' ? 'items-center' : textAlignment === 'right' ? 'items-end' : 'items-start'}`}>
          {eyebrow && (
            <Badge variant="outline" className="mb-4 uppercase tracking-wide">
              {eyebrow}
            </Badge>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>
          
          {description && (
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              {description}
            </p>
          )}
          
          {actions && actions.length > 0 && (
            <div className={`flex flex-col sm:flex-row gap-4 ${alignmentClasses[textAlignment as keyof typeof alignmentClasses]?.split(' ')[1] || 'justify-center'}`}>
              {actions.map((action, index) => (
                <Button
                  key={index}
                  asChild
                  variant={action.appearance === 'outline' ? 'outline' : 'default'}
                  size="lg"
                >
                  <a
                    href={action.href}
                    target={action.newTab ? '_blank' : undefined}
                    rel={action.newTab ? 'noopener noreferrer' : undefined}
                  >
                    {action.text}
                  </a>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}