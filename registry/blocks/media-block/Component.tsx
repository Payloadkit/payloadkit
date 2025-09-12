import React from 'react'

interface Media {
  id: string
  url: string
  alt?: string
  mimeType?: string
  width?: number
  height?: number
}

interface MediaBlockProps {
  media: Media
  caption?: string
  textAlignment?: 'left' | 'center' | 'right'
  size?: 'small' | 'medium' | 'large' | 'full'
  htmlId?: string
  htmlClasses?: string
}

export const MediaBlock: React.FC<MediaBlockProps> = ({
  media,
  caption,
  textAlignment = 'center',
  size = 'full',
  htmlId,
  htmlClasses,
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  const sizeClasses = {
    small: 'max-w-sm',
    medium: 'max-w-md',
    large: 'max-w-2xl',
    full: 'w-full',
  }

  const containerAlignment = {
    left: 'items-start',
    center: 'items-center',
    right: 'items-end',
  }

  const isVideo = media.mimeType?.startsWith('video/')

  return (
    <section
      id={htmlId}
      className={`py-8 ${htmlClasses || ''}`.trim()}
    >
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${containerAlignment[textAlignment as keyof typeof containerAlignment]}`}>
          <div className={`${sizeClasses[size as keyof typeof sizeClasses]} ${alignmentClasses[textAlignment as keyof typeof alignmentClasses]}`}>
            {isVideo ? (
              <video
                controls
                className="w-full h-auto rounded-lg"
                poster={media.url}
              >
                <source src={media.url} type={media.mimeType} />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={media.url}
                alt={media.alt || ''}
                width={media.width}
                height={media.height}
                className="w-full h-auto rounded-lg"
              />
            )}
            
            {caption && (
              <p className="mt-3 text-sm text-gray-600 italic">
                {caption}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}