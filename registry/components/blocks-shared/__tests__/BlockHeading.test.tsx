import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlockHeading } from '../BlockHeading'

describe('BlockHeading', () => {
  it('renders heading text correctly', () => {
    render(<BlockHeading text="Test Heading" />)

    expect(screen.getByText('Test Heading')).toBeInTheDocument()
  })

  it('renders as h2 by default', () => {
    render(<BlockHeading text="Default Heading" />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Default Heading')
  })

  it('renders with correct heading level when specified', () => {
    render(<BlockHeading text="H1 Heading" level="h1" />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it('renders all heading levels correctly', () => {
    const levels: Array<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

    levels.forEach(level => {
      const { unmount } = render(<BlockHeading text={`${level} Heading`} level={level} />)

      const headingLevel = parseInt(level.charAt(1))
      const heading = screen.getByRole('heading', { level: headingLevel })
      expect(heading).toBeInTheDocument()
      expect(heading.tagName.toLowerCase()).toBe(level)

      unmount()
    })
  })

  it('applies left alignment by default', () => {
    render(<BlockHeading text="Left Aligned" />)

    const heading = screen.getByText('Left Aligned')
    expect(heading).toHaveClass('text-left')
  })

  it('applies center alignment correctly', () => {
    render(<BlockHeading text="Center Aligned" align="center" />)

    const heading = screen.getByText('Center Aligned')
    expect(heading).toHaveClass('text-center')
  })

  it('applies right alignment correctly', () => {
    render(<BlockHeading text="Right Aligned" align="right" />)

    const heading = screen.getByText('Right Aligned')
    expect(heading).toHaveClass('text-right')
  })

  it('applies default size classes', () => {
    render(<BlockHeading text="Default Size" />)

    const heading = screen.getByText('Default Size')
    expect(heading).toHaveClass('text-3xl', 'md:text-4xl', 'font-bold')
  })

  it('applies small size classes', () => {
    render(<BlockHeading text="Small Size" size="sm" />)

    const heading = screen.getByText('Small Size')
    expect(heading).toHaveClass('text-2xl', 'md:text-3xl')
  })

  it('applies large size classes', () => {
    render(<BlockHeading text="Large Size" size="lg" />)

    const heading = screen.getByText('Large Size')
    expect(heading).toHaveClass('text-4xl', 'md:text-5xl', 'lg:text-6xl')
  })

  it('applies xl size classes', () => {
    render(<BlockHeading text="XL Size" size="xl" />)

    const heading = screen.getByText('XL Size')
    expect(heading).toHaveClass('text-5xl', 'md:text-6xl', 'lg:text-7xl')
  })

  it('applies custom className', () => {
    render(<BlockHeading text="Custom Class" className="custom-heading" />)

    const heading = screen.getByText('Custom Class')
    expect(heading).toHaveClass('custom-heading')
  })

  it('combines multiple props correctly', () => {
    render(
      <BlockHeading
        text="Complex Heading"
        level="h3"
        align="center"
        size="lg"
        className="text-blue-500"
      />
    )

    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).toHaveTextContent('Complex Heading')
    expect(heading).toHaveClass(
      'text-center',
      'text-4xl',
      'md:text-5xl',
      'lg:text-6xl',
      'font-bold',
      'text-blue-500'
    )
  })

  it('handles empty text gracefully', () => {
    render(<BlockHeading text="" />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('')
  })

  it('handles undefined text gracefully', () => {
    render(<BlockHeading text={undefined} />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('')
  })

  it('forwards additional props to heading element', () => {
    render(
      <BlockHeading
        text="Test Heading"
        data-testid="heading"
        id="test-heading"
      />
    )

    const heading = screen.getByTestId('heading')
    expect(heading).toHaveAttribute('id', 'test-heading')
  })
})