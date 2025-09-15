import { describe, it, expect } from 'vitest'
import { SimpleHero } from '../config'

// Helper function to find fields recursively in nested structures
function findFieldRecursively(fields: any[], fieldName: string): any {
  for (const field of fields) {
    if (field.name === fieldName) {
      return field
    }
    if (field.fields && Array.isArray(field.fields)) {
      const found = findFieldRecursively(field.fields, fieldName)
      if (found) return found
    }
  }
  return undefined
}

describe('SimpleHero Config - Basic Structure', () => {
  it('should have correct basic properties', () => {
    expect(SimpleHero.slug).toBe('simple-hero')
    expect(SimpleHero.interfaceName).toBe('SimpleHeroBlock')
    expect(SimpleHero).toHaveProperty('labels')
    expect(SimpleHero).toHaveProperty('fields')
    expect(Array.isArray(SimpleHero.fields)).toBe(true)
  })

  it('should have collapsible sections', () => {
    const collapsibles = SimpleHero.fields.filter((field: any) => field.type === 'collapsible')
    expect(collapsibles.length).toBeGreaterThan(0)

    // Chercher une section Content
    const contentSection = collapsibles.find((field: any) => field.label === 'Content')
    expect(contentSection).toBeDefined()
  })

  it('should have title field somewhere in structure', () => {
    const titleField = findFieldRecursively(SimpleHero.fields, 'title')
    expect(titleField).toBeDefined()
    expect(titleField.type).toBe('textarea')
    expect(titleField.label).toBe('Main Title')
  })

  it('should have eyebrow field in content section', () => {
    const eyebrowField = findFieldRecursively(SimpleHero.fields, 'eyebrow')
    expect(eyebrowField).toBeDefined()
    expect(eyebrowField.type).toBe('text')
  })

  it('should have proper field structure', () => {
    // Vérifier que chaque field a les propriétés de base
    function validateField(field: any) {
      expect(field).toHaveProperty('type')

      if (field.name) {
        expect(typeof field.name).toBe('string')
      }

      if (field.fields) {
        expect(Array.isArray(field.fields)).toBe(true)
        field.fields.forEach(validateField)
      }
    }

    SimpleHero.fields.forEach(validateField)
  })

  it('should be a valid PayloadCMS block configuration', () => {
    expect(typeof SimpleHero).toBe('object')
    expect(SimpleHero.slug).toBeTruthy()
    expect(SimpleHero.fields).toBeTruthy()
    expect(SimpleHero.labels?.singular).toBe('Simple Hero')
    expect(SimpleHero.labels?.plural).toBe('Simple Heroes')
  })
})