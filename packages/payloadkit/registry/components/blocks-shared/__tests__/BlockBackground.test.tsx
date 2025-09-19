import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlockBackground } from '../BlockBackground'

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
          gradientDirection: 'to-br',
          gradientStops: [
            { color: '#ff0000', position: '0%' },
            { color: '#0000ff', position: '100%' }
          ]
        }}
      >
        <div>Content</div>
      </BlockBackground>
    )

    const backgroundDiv = container.firstChild as HTMLElement
    expect(backgroundDiv).toHaveStyle({
      backgroundImage: 'linear-gradient(to-br, #ff0000 0%, #0000ff 100%)'
    })
  })

  it('applies image background correctly', () => {
    const { container } = render(
      <BlockBackground
        background={{
          type: 'image',
          image: { url: '/test-image.jpg' }
        }}
      >
        <div>Content</div>
      </BlockBackground>
    )

    const backgroundDiv = container.firstChild as HTMLElement
    expect(backgroundDiv).toHaveStyle({
      backgroundImage: 'url(/test-image.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    })
  })

  it('handles string image URL', () => {
    const { container } = render(
      <BlockBackground
        background={{
          type: 'image',
          image: '/test-image.jpg'
        }}
      >
        <div>Content</div>
      </BlockBackground>
    )

    const backgroundDiv = container.firstChild as HTMLElement
    expect(backgroundDiv).toHaveStyle({
      backgroundImage: 'url(/test-image.jpg)'
    })
  })

  it('renders with no background type correctly', () => {
    const { container } = render(
      <BlockBackground
        background={{
          type: 'none'
        }}
      >
        <div>Content</div>
      </BlockBackground>
    )

    const backgroundDiv = container.firstChild as HTMLElement
    expect(backgroundDiv).toHaveClass('relative')
    // No background styles should be applied
    expect(backgroundDiv.style.backgroundColor).toBe('')
    expect(backgroundDiv.style.backgroundImage).toBe('')
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

  it('forwards custom props to div element', () => {
    const { container } = render(
      <BlockBackground data-testid="background" id="test-id">
        <div>Content</div>
      </BlockBackground>
    )

    const backgroundDiv = container.firstChild
    expect(backgroundDiv).toHaveAttribute('data-testid', 'background')
    expect(backgroundDiv).toHaveAttribute('id', 'test-id')
  })

  it('handles empty background object', () => {
    const { container } = render(
      <BlockBackground background={{}}>
        <div>Content</div>
      </BlockBackground>
    )

    const backgroundDiv = container.firstChild
    expect(backgroundDiv).toHaveClass('relative')
  })

  it('handles undefined background gracefully', () => {
    const { container } = render(
      <BlockBackground background={undefined}>
        <div>Content</div>
      </BlockBackground>
    )

    const backgroundDiv = container.firstChild
    expect(backgroundDiv).toHaveClass('relative')
  })
})