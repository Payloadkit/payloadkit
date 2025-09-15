import { describe, it, expect } from 'vitest'
import type { MediaItem, CallToAction } from '../../components/blocks-shared'

// Interface pour les tests utilisant les types partagés
interface HeroBlockProps {
  title?: string
  subtitle?: string
  description?: string
  backgroundImage?: MediaItem | string
  buttons?: CallToAction[]
}

// Fonctions utilitaires à tester
function validateHeroBlockProps(props: HeroBlockProps): boolean {
  // Un hero block valide doit avoir au moins un titre
  if (!props.title || props.title.trim() === '') {
    return false
  }

  // Si des boutons sont fournis, ils doivent avoir label et url
  if (props.buttons) {
    for (const button of props.buttons) {
      if (!button.label || !button.url) {
        return false
      }
    }
  }

  return true
}

function getButtonClasses(appearance?: CallToAction['appearance']): string {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors'

  switch (appearance) {
    case 'secondary':
      return `${baseClasses} bg-white text-blue-600 hover:bg-gray-100`
    case 'primary':
    default:
      return `${baseClasses} bg-blue-600 text-white hover:bg-blue-700`
  }
}

function generateHeroBlockData(): HeroBlockProps {
  return {
    title: 'Welcome to Our Platform',
    subtitle: 'Innovation at its Best',
    description: 'Discover amazing features that will transform your workflow.',
    buttons: [
      {
        label: 'Get Started',
        url: '/signup',
        appearance: 'primary'
      },
      {
        label: 'Learn More',
        url: '/about',
        appearance: 'secondary'
      }
    ]
  }
}

describe('HeroBlock Integration', () => {
  describe('Props Validation', () => {
    it('should validate valid hero block props', () => {
      const validProps: HeroBlockProps = {
        title: 'Test Title',
        subtitle: 'Test Subtitle',
        description: 'Test description'
      }

      expect(validateHeroBlockProps(validProps)).toBe(true)
    })

    it('should reject props without title', () => {
      const invalidProps: HeroBlockProps = {
        subtitle: 'Test Subtitle',
        description: 'Test description'
      }

      expect(validateHeroBlockProps(invalidProps)).toBe(false)
    })

    it('should reject props with empty title', () => {
      const invalidProps: HeroBlockProps = {
        title: '',
        subtitle: 'Test Subtitle'
      }

      expect(validateHeroBlockProps(invalidProps)).toBe(false)
    })

    it('should reject props with buttons missing label', () => {
      const invalidProps: HeroBlockProps = {
        title: 'Test Title',
        buttons: [
          {
            label: '',
            url: '/test'
          }
        ]
      }

      expect(validateHeroBlockProps(invalidProps)).toBe(false)
    })

    it('should reject props with buttons missing url', () => {
      const invalidProps: HeroBlockProps = {
        title: 'Test Title',
        buttons: [
          {
            label: 'Test Button',
            url: ''
          }
        ]
      }

      expect(validateHeroBlockProps(invalidProps)).toBe(false)
    })
  })

  describe('Button Classes Generation', () => {
    it('should generate primary button classes', () => {
      const classes = getButtonClasses('primary')

      expect(classes).toContain('bg-blue-600')
      expect(classes).toContain('text-white')
      expect(classes).toContain('hover:bg-blue-700')
    })

    it('should generate secondary button classes', () => {
      const classes = getButtonClasses('secondary')

      expect(classes).toContain('bg-white')
      expect(classes).toContain('text-blue-600')
      expect(classes).toContain('hover:bg-gray-100')
    })

    it('should default to primary button classes', () => {
      const defaultClasses = getButtonClasses()
      const primaryClasses = getButtonClasses('primary')

      expect(defaultClasses).toBe(primaryClasses)
    })

    it('should include base classes for all button types', () => {
      const primaryClasses = getButtonClasses('primary')
      const secondaryClasses = getButtonClasses('secondary')

      expect(primaryClasses).toContain('inline-flex')
      expect(primaryClasses).toContain('items-center')
      expect(primaryClasses).toContain('justify-center')
      expect(primaryClasses).toContain('rounded-md')
      expect(primaryClasses).toContain('font-medium')
      expect(primaryClasses).toContain('transition-colors')

      expect(secondaryClasses).toContain('inline-flex')
      expect(secondaryClasses).toContain('items-center')
      expect(secondaryClasses).toContain('justify-center')
    })
  })

  describe('Data Generation', () => {
    it('should generate valid hero block data', () => {
      const data = generateHeroBlockData()

      expect(validateHeroBlockProps(data)).toBe(true)
      expect(data.title).toBe('Welcome to Our Platform')
      expect(data.subtitle).toBe('Innovation at its Best')
      expect(data.description).toBeTruthy()
      expect(data.buttons).toHaveLength(2)
    })

    it('should generate proper button structure', () => {
      const data = generateHeroBlockData()

      expect(data.buttons?.[0]).toEqual({
        label: 'Get Started',
        url: '/signup',
        appearance: 'primary'
      })

      expect(data.buttons?.[1]).toEqual({
        label: 'Learn More',
        url: '/about',
        appearance: 'secondary'
      })
    })
  })

  describe('Edge Cases', () => {
    it('should handle props with only title', () => {
      const minimalProps: HeroBlockProps = {
        title: 'Minimal Hero'
      }

      expect(validateHeroBlockProps(minimalProps)).toBe(true)
    })

    it('should handle props with empty buttons array', () => {
      const propsWithEmptyButtons: HeroBlockProps = {
        title: 'Hero with No Buttons',
        buttons: []
      }

      expect(validateHeroBlockProps(propsWithEmptyButtons)).toBe(true)
    })

    it('should handle whitespace-only title correctly', () => {
      const propsWithWhitespaceTitle: HeroBlockProps = {
        title: '   '
      }

      expect(validateHeroBlockProps(propsWithWhitespaceTitle)).toBe(false)
    })
  })
})