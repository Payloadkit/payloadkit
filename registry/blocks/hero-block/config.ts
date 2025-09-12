import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  labels: {
    singular: 'Hero Block',
    plural: 'Hero Blocks',
  },
  fields: [
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      admin: {
        description: 'Small text above the main title'
      }
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      admin: {
        description: 'Main hero title'
      }
    },
    {
      name: 'description', 
      type: 'textarea',
      label: 'Description',
      admin: {
        description: 'Text below the title'
      }
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      admin: {
        description: 'Optional background image'
      }
    },
    {
      name: 'buttons',
      type: 'array',
      label: 'Call-to-Action Buttons',
      maxRows: 3,
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Button Text',
          required: true
        },
        {
          name: 'url',
          type: 'text', 
          label: 'URL',
          required: true
        },
        {
          name: 'type',
          type: 'select',
          label: 'Button Style',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' }
          ],
          defaultValue: 'primary'
        }
      ]
    }
  ]
}