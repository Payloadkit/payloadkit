import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      label: 'Navigation Items',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          required: true,
        },
        {
          name: 'type',
          type: 'radio',
          label: 'Link Type',
          options: [
            {
              label: 'Internal Link',
              value: 'reference',
            },
            {
              label: 'Custom URL',
              value: 'custom',
            },
          ],
          defaultValue: 'reference',
          admin: {
            layout: 'horizontal',
          },
        },
        {
          name: 'reference',
          type: 'relationship',
          label: 'Document to link to',
          relationTo: ['pages'],
          required: true,
          maxDepth: 1,
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'reference',
          },
        },
        {
          name: 'url',
          type: 'text',
          label: 'Custom URL',
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'custom',
          },
        },
        {
          name: 'newTab',
          type: 'checkbox',
          label: 'Open in new tab',
          admin: {
            style: {
              alignSelf: 'flex-end',
            },
          },
        },
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
      },
    },
  ],
}