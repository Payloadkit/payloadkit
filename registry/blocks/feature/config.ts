import type { Block } from 'payload'

export const FeatureBlock: Block = {
  slug: 'feature',
  interfaceName: 'FeatureBlock',
  labels: {
    singular: 'Feature Block',
    plural: 'Feature Blocks',
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
      label: 'Grid Configuration',
      fields: [
        {
          name: 'layout',
          type: 'select',
          label: 'Layout',
          options: [
            { label: '2 Columns Grid', value: 'grid-2' },
            { label: '3 Columns Grid', value: 'grid-3' },
            { label: '4 Columns Grid', value: 'grid-4' },
            { label: 'Vertical List', value: 'list' },
          ],
          defaultValue: 'grid-3',
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Features',
      fields: [
        {
          name: 'features',
          type: 'array',
          label: 'Features',
          minRows: 1,
          maxRows: 6,
          fields: [
            {
              name: 'icon',
              type: 'select',
              label: 'Icon',
              options: [
                { label: 'Star', value: 'star' },
                { label: 'Lightning', value: 'zap' },
                { label: 'Shield', value: 'shield' },
                { label: 'Heart', value: 'heart' },
                { label: 'Settings', value: 'settings' },
                { label: 'Chart', value: 'chart' },
                { label: 'Target', value: 'target' },
                { label: 'Lightbulb', value: 'lightbulb' },
                { label: 'Trophy', value: 'trophy' },
                { label: 'Users', value: 'users' },
              ],
            },
            {
              name: 'iconColor',
              type: 'select',
              label: 'Icon Color',
              defaultValue: 'primary',
              options: [
                { label: 'Primary', value: 'primary' },
                { label: 'Secondary', value: 'secondary' },
                { label: 'Gray', value: 'gray' },
                { label: 'Red', value: 'red' },
                { label: 'Green', value: 'green' },
                { label: 'Blue', value: 'blue' },
              ],
            },
            {
              name: 'title',
              type: 'text',
              label: 'Title',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
              required: true,
            },
            {
              name: 'link',
              type: 'group',
              label: 'Optional Link',
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  label: 'Link Text',
                },
                {
                  name: 'href',
                  type: 'text',
                  label: 'Link URL',
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