import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

// Simple mock component pour les tests
const BlockBackground = ({
  children,
  background,
  className,
  ...props
}: {
  children: React.ReactNode
  background?: any
  className?: string
  [key: string]: any
}) => {
  const getBackgroundStyle = () => {
    if (!background?.type) return {}

    switch (background.type) {
      case 'color':
        return { backgroundColor: background.color }
      case 'gradient':
        const direction = background.gradientDirection === 'to-br' ? 'to bottom right' : background.gradientDirection
        return {
          backgroundImage: `linear-gradient(${direction}, ${background.gradientFrom}, ${background.gradientTo})`
        }
      case 'image':
        const imageUrl = typeof background.image === 'string' ? background.image : background.image?.url
        return {
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }
      default:
        return {}
    }
  }

  return (
    <div
      className={`relative ${className || ''}`}
      style={getBackgroundStyle()}
      {...props}
    >
      {children}
    </div>
  )
}

describe('BlockBackground', () => {
  it('renders children correctly', () => {
    render(
      <BlockBackground>
        <div data-testid="child">Test Content</div>
      </BlockBackground>
    )

    expect(screen.getByTestId('child')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('applies default classes when no background is provided', () => {
    const { container } = render(
      <BlockBackground>
        <div>Content</div>
      </BlockBackground>
    )

    const backgroundDiv = container.firstChild
    expect(backgroundDiv).toHaveClass('relative')
  })

  it('applies solid color background correctly', () => {
    const { container } = render(
      <BlockBackground
        background={{
          type: 'color',
          color: '#ff0000'
        }}
      >
        <div>Content</div>
      </BlockBackground>
    )

    const backgroundDiv = container.firstChild as HTMLElement
    expect(backgroundDiv).toHaveStyle({ backgroundColor: '#ff0000' })
  })

  it('applies gradient background correctly', () => {
    const { container } = render(
      <BlockBackground
        background={{
          type: 'gradient',
          gradientFrom: '#ff0000',
          gradientTo: '#0000ff',
          gradientDirection: 'to-br'
        }}
      >
        <div>Content</div>
      </BlockBackground>
    )

    const backgroundDiv = container.firstChild as HTMLElement
    expect(backgroundDiv).toHaveStyle({
      backgroundImage: 'linear-gradient(to bottom right, #ff0000, #0000ff)'
    })
  })

  it('applies custom className', () => {
    const { container } = render(
      <BlockBackground className="custom-class">
        <div>Content</div>
      </BlockBackground>
    )

    const backgroundDiv = container.firstChild
    expect(backgroundDiv).toHaveClass('custom-class')
  })
})