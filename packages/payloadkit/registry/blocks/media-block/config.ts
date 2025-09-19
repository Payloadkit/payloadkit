import type { Block } from 'payload'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  interfaceName: 'MediaBlock',
  labels: {
    singular: 'Media Block',
    plural: 'Media Blocks',
  },
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Media File',
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Caption (optional)',
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
          label: 'Media Alignment',
          defaultValue: 'center',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
        },
        {
          name: 'size',
          type: 'select',
          label: 'Media Size',
          defaultValue: 'full',
          options: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
            { label: 'Full Width', value: 'full' },
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