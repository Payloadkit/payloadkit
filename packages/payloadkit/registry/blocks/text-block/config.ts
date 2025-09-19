import type { Block } from 'payload'
import { FixedToolbarFeature, InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

export const TextBlock: Block = {
  slug: 'textBlock',
  interfaceName: 'TextBlock',
  labels: {
    singular: 'Text Block',
    plural: 'Text Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title (optional)',
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    {
      type: 'collapsible',
      label: 'Layout & Styling',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'textAlignment',
          type: 'select',
          label: 'Text Alignment',
          defaultValue: 'left',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
        },
        {
          name: 'maxWidth',
          type: 'select',
          label: 'Max Width',
          defaultValue: 'prose',
          options: [
            { label: 'Prose (readable)', value: 'prose' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
            { label: 'Full', value: 'full' },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Advanced Settings',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'htmlId',
          type: 'text',
          label: 'Custom HTML ID',
        },
        {
          name: 'htmlClasses',
          type: 'text',
          label: 'Additional CSS Classes',
        },
      ],
    },
  ],
}