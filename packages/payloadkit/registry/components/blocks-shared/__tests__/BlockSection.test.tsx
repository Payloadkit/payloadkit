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
    expect(section).toHaveClass('pt-16', 'pb-16', 'px-6') // default: lg, lg, md
  })

  it('applies small spacing correctly', () => {
    const { container } = render(
      <BlockSection paddingTop="sm" paddingBottom="sm">
        <div>Content</div>
      </BlockSection>
    )

    const section = container.firstChild
    expect(section).toHaveClass('pt-8', 'pb-8')
  })

  it('applies medium spacing correctly', () => {
    const { container } = render(
      <BlockSection paddingTop="md" paddingBottom="md">
        <div>Content</div>
      </BlockSection>
    )

    const section = container.firstChild
    expect(section).toHaveClass('pt-12', 'pb-12')
  })

  it('applies large spacing correctly', () => {
    const { container } = render(
      <BlockSection paddingTop="lg" paddingBottom="lg">
        <div>Content</div>
      </BlockSection>
    )

    const section = container.firstChild
    expect(section).toHaveClass('pt-16', 'pb-16')
  })

  it('applies xl spacing correctly', () => {
    const { container } = render(
      <BlockSection paddingTop="xl" paddingBottom="xl">
        <div>Content</div>
      </BlockSection>
    )

    const section = container.firstChild
    expect(section).toHaveClass('pt-20', 'pb-20')
  })

  it('applies no spacing when specified', () => {
    const { container } = render(
      <BlockSection paddingTop="none" paddingBottom="none" paddingX="none">
        <div>Content</div>
      </BlockSection>
    )

    const section = container.firstChild
    expect(section).not.toHaveClass('pt-8', 'pt-16', 'pt-20', 'pb-8', 'pb-16', 'pb-20', 'px-4', 'px-6', 'px-8')
  })

  it('applies different top and bottom spacing', () => {
    const { container } = render(
      <BlockSection paddingTop="2xl" paddingBottom="sm">
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
    // height="auto" maps to empty string, so no specific class is added
    expect(section).not.toHaveClass('min-h-screen')
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
      <BlockSection>
        <div>Content</div>
      </BlockSection>
    )

    const section = container.firstChild
    expect(section).toHaveClass('w-full') // always present
  })

  it('applies container size correctly', () => {
    const { container } = render(
      <BlockSection containerSize="2xl">
        <div>Content</div>
      </BlockSection>
    )

    const section = container.firstChild
    // Container size affects the inner div, not the section
    const innerDiv = section?.firstChild
    expect(innerDiv).toHaveClass('max-w-screen-2xl')
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

    const section = screen.getByTestId('section')
    expect(section).toHaveAttribute('id', 'test-id')
  })

  it('combines multiple spacing and sizing options', () => {
    const { container } = render(
      <BlockSection
        paddingTop="2xl"
        paddingBottom="xl"
        height="screen"
        containerSize="lg"
        className="bg-gray-100"
      >
        <div>Content</div>
      </BlockSection>
    )

    const section = container.firstChild
    expect(section).toHaveClass(
      'pt-24',        // paddingTop 2xl
      'pb-20',        // paddingBottom xl
      'min-h-screen', // height screen
      'bg-gray-100'   // custom class
    )

    // Check inner container
    const innerDiv = section?.firstChild
    expect(innerDiv).toHaveClass('max-w-screen-lg')
  })
})