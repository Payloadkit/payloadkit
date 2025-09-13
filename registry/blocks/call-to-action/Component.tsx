import React from 'react'
import type { CallToActionBlock as CTABlockProps } from '@/payload-types'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// Note: These imports will need to be available in the target project
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

export const CallToActionBlock: React.FC<CTABlockProps> = ({ 
  links, 
  richText,
  height = 'auto' 
}) => {
  const heightClasses = {
    'auto': '',
    'small': 'py-8',
    'medium': 'py-16', 
    'large': 'py-24',
    'xl': 'py-32'
  }

  return (
    <section className={`bg-background ${heightClasses[height as keyof typeof heightClasses]}`}>
      <div className="container mx-auto px-4">
        <Card>
          <CardContent className="p-6 md:p-8 flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
            <div className="max-w-[48rem] flex items-center">
              {richText && (
                <RichText 
                  className="mb-0" 
                  data={richText} 
                  enableGutter={false} 
                />
              )}
            </div>
            
            {links && links.length > 0 && (
              <div className="flex flex-col gap-4 md:flex-row md:gap-4">
                {links.map(({ link }, i) => (
                  <CMSLink key={i} size="lg" {...link} />
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default CallToActionBlock