import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlockSection } from '../BlockSection'

describe('BlockSection', () => {
  it('renders children correctly', () => {
    render(
      <BlockSection>
        <div data-testid="child">Test Content</div>
      </BlockSection>
    )

    expect(screen.getByTestId('child')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('applies default spacing classes', () => {
    const { container } = render(
      <BlockSection>
        <div>Content</div>
      </BlockSection>
    )

    const section = container.firstChild
    expect(section).toHaveClass('py-16') // default spacing
  })

  it('applies small spacing correctly', () => {
    const { container } = render(
      <BlockSection paddingY="sm">
        <div>Content</div>
      </BlockSection>
    )

    const section = container.firstChild
    expect(section).toHaveClass('py-8')
  })

  it('applies medium spacing correctly', () => {
    const { container } = render(
      <BlockSection paddingY="md">
        <div>Content</div>
      </BlockSection>
    )

    const section = container.firstChild
    expect(section).toHaveClass('py-16')
  })

  it('applies large spacing correctly', () => {
    const { container } = render(
      <BlockSection paddingY="lg">
        <div>Content</div>
      </BlockSection>
    )

    const section = container.firstChild
    expect(section).toHaveClass('py-24')
  })

  it('applies xl spacing correctly', () => {
    const { container } = render(
      <BlockSection paddingY="xl">
        <div>Content</div>
      </BlockSection>
    )

    const section = container.firstChild
    expect(section).toHaveClass('py-32')
  })

  it('applies no spacing when specified', () => {
    const { container } = render(
      <BlockSection paddingY="none">
        <div>Content</div>
      </BlockSection>
    )

    const section = container.firstChild
    expect(section).not.toHaveClass('py-8', 'py-16', 'py-24', 'py-32')
  })

  it('applies different top and bottom spacing', () => {
    const { container } = render(
      <BlockSection paddingTop="lg" paddingBottom="sm">
        <div>Content</div>
      </BlockSection>
    )

    const section = container.firstChild
    expect(section).toHaveClass('pt-24', 'pb-8')
  })

  it('applies auto height correctly', () => {
    const { container } = render(
      <BlockSection height="auto">
        <div>Content</div>
      </BlockSection>
    )

    const section = container.firstChild
    expect(section).toHaveClass('h-auto')
  })

  it('applies screen height correctly', () => {
    const { container } = render(
      <BlockSection height="screen">
        <div>Content</div>
      </BlockSection>
    )

    const section = container.firstChild
    expect(section).toHaveClass('min-h-screen')
  })

  it('applies full width correctly', () => {
    const { container } = render(
      <BlockSection width="full">
        <div>Content</div>
      </BlockSection>
    )

    const section = container.firstChild
    expect(section).toHaveClass('w-full')
  })

  it('applies container width correctly', () => {
    const { container } = render(
      <BlockSection width="container">
        <div>Content</div>
      </BlockSection>
    )

    const section = container.firstChild
    expect(section).toHaveClass('max-w-7xl', 'mx-auto', 'px-4')
  })

  it('applies custom className', () => {
    const { container } = render(
      <BlockSection className="custom-class">
        <div>Content</div>
      </BlockSection>
    )

    const section = container.firstChild
    expect(section).toHaveClass('custom-class')
  })

  it('forwards custom props to section element', () => {
    const { container } = render(
      <BlockSection data-testid="section" id="test-id">
        <div>Content</div>
      </BlockSection>
    )

    const section = container.firstChild
    expect(section).toHaveAttribute('data-testid', 'section')
    expect(section).toHaveAttribute('id', 'test-id')
  })

  it('combines multiple spacing and sizing options', () => {
    const { container } = render(
      <BlockSection
        paddingY="lg"
        height="screen"
        width="container"
        className="bg-gray-100"
      >
        <div>Content</div>
      </BlockSection>
    )

    const section = container.firstChild
    expect(section).toHaveClass(
      'py-24',      // paddingY lg
      'min-h-screen', // height screen
      'max-w-7xl',    // width container
      'mx-auto',      // width container
      'px-4',         // width container
      'bg-gray-100'   // custom class
    )
  })
})