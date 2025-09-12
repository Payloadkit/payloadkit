import type { Block } from 'payload'

export const BannerBlock: Block = {
  slug: 'banner',
  interfaceName: 'BannerBlock',
  labels: {
    singular: 'Banner',
    plural: 'Banners',
  },
  fields: [
    {
      type: 'collapsible',
      label: 'Content',
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
          label: 'Eyebrow Text',
          admin: {
            description: 'Small text above the main title'
          }
        },
        {
          name: 'title',
          type: 'text',
          label: 'Main Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Call to Actions',
      fields: [
        {
          name: 'actions',
          type: 'array',
          label: 'Actions',
          maxRows: 2,
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Button Text',
              required: true,
            },
            {
              name: 'href',
              type: 'text',
              label: 'Link URL',
              required: true,
            },
            {
              name: 'appearance',
              type: 'select',
              label: 'Appearance',
              defaultValue: 'default',
              options: [
                {
                  label: 'Default',
                  value: 'default',
                },
                {
                  label: 'Outline',
                  value: 'outline',
                },
              ],
            },
            {
              name: 'newTab',
              type: 'checkbox',
              label: 'Open in New Tab',
              defaultValue: false,
            },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Layout & Styling',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'backgroundColor',
          type: 'select',
          label: 'Background Color',
          defaultValue: 'transparent',
          options: [
            { label: 'Transparent', value: 'transparent' },
            { label: 'White', value: 'white' },
            { label: 'Gray Light', value: 'gray-light' },
            { label: 'Gray Dark', value: 'gray-dark' },
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
          ],
        },
        {
          name: 'textAlignment',
          type: 'select',
          label: 'Text Alignment',
          defaultValue: 'center',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
        },
        {
          name: 'height',
          type: 'select',
          label: 'Section Height',
          defaultValue: 'auto',
          options: [
            { label: 'Auto', value: 'auto' },
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
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
          admin: {
            description: 'Custom HTML ID for this section (useful for anchor links).',
          },
        },
        {
          name: 'htmlClasses',
          type: 'text',
          label: 'Additional CSS Classes',
          admin: {
            description: 'Additional Tailwind classes or custom CSS classes.',
          },
        },
      ],
    },
  ],
}