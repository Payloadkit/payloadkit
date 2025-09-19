import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { MediaItem, CallToAction } from '../blocks-shared'

export interface HeroBlockProps {
  title?: string
  subtitle?: string
  description?: string
  backgroundImage?: MediaItem | string
  buttons?: CallToAction[]
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
          <Badge variant="secondary" className="text-lg font-medium mb-4 bg-white/10 text-white border-white/20">
            {subtitle}
          </Badge>
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
              <Button
                key={index}
                asChild
                variant={button.type === 'secondary' ? 'secondary' : 'default'}
                size="lg"
                className={button.type === 'secondary' 
                  ? 'bg-white text-blue-600 hover:bg-gray-100' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
                }
              >
                <a href={button.url}>
                  {button.label}
                </a>
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}