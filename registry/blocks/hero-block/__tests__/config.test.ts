import { describe, it, expect } from 'vitest'
import { HeroBlock } from '../config'

describe('HeroBlock Config', () => {
  it('should have correct slug', () => {
    expect(HeroBlock.slug).toBe('hero')
  })

  it('should be configured as a block', () => {
    // Un bloc PayloadCMS doit avoir un slug et des fields
    expect(HeroBlock).toHaveProperty('slug')
    expect(HeroBlock).toHaveProperty('fields')
  })

  it('should have required fields', () => {
    expect(HeroBlock.fields).toBeDefined()
    expect(Array.isArray(HeroBlock.fields)).toBe(true)
    expect(HeroBlock.fields.length).toBeGreaterThan(0)
  })

  it('should have title field', () => {
    const titleField = HeroBlock.fields.find((field: any) => field.name === 'title')
    expect(titleField).toBeDefined()
    expect(titleField.type).toBe('text')
    expect(titleField.required).toBe(true)
  })

  it('should have subtitle field', () => {
    const subtitleField = HeroBlock.fields.find((field: any) => field.name === 'subtitle')
    expect(subtitleField).toBeDefined()
    expect(subtitleField.type).toBe('text')
  })

  it('should have description field', () => {
    const descriptionField = HeroBlock.fields.find((field: any) => field.name === 'description')
    expect(descriptionField).toBeDefined()
    expect(descriptionField.type).toBe('textarea')
  })

  it('should have backgroundImage field', () => {
    const backgroundImageField = HeroBlock.fields.find((field: any) => field.name === 'backgroundImage')
    expect(backgroundImageField).toBeDefined()
    expect(backgroundImageField.type).toBe('upload')
  })

  it('should have buttons array field', () => {
    const buttonsField = HeroBlock.fields.find((field: any) => field.name === 'buttons')
    expect(buttonsField).toBeDefined()
    expect(buttonsField.type).toBe('array')

    // Vérifier les sous-fields des boutons
    if (buttonsField?.fields) {
      const labelField = buttonsField.fields.find((field: any) => field.name === 'label')
      const urlField = buttonsField.fields.find((field: any) => field.name === 'url')
      const typeField = buttonsField.fields.find((field: any) => field.name === 'type')

      expect(labelField).toBeDefined()
      expect(urlField).toBeDefined()
      expect(typeField).toBeDefined()
    }
  })

  it('should have proper labels', () => {
    expect(HeroBlock).toHaveProperty('labels')
    if (HeroBlock.labels) {
      expect(HeroBlock.labels.singular).toBeDefined()
      expect(HeroBlock.labels.plural).toBeDefined()
    }
  })

  it('should have interfaceName defined', () => {
    expect(HeroBlock).toHaveProperty('interfaceName')
    expect(HeroBlock.interfaceName).toBe('HeroBlock')
  })

  it('should be properly exported', () => {
    // Vérifier que la config peut être utilisée dans PayloadCMS
    expect(typeof HeroBlock).toBe('object')
    expect(HeroBlock.slug).toBeTruthy()
    expect(HeroBlock.fields).toBeTruthy()
  })
})