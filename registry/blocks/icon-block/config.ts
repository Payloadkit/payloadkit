import type { Block } from 'payload'

export const IconBlock: Block = {
  slug: 'iconBlock',
  interfaceName: 'IconBlock',
  labels: {
    singular: 'Icon Block',
    plural: 'Icon Blocks',
  },
  fields: [
    {
      type: 'collapsible',
      label: 'Icon',
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          required: true,
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
            { label: 'Check', value: 'check' },
            { label: 'Warning', value: 'warning' },
            { label: 'Info', value: 'info' },
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
            { label: 'Success', value: 'success' },
            { label: 'Warning', value: 'warning' },
            { label: 'Error', value: 'error' },
            { label: 'Gray', value: 'gray' },
          ],
        },
        {
          name: 'iconSize',
          type: 'select',
          label: 'Icon Size',
          defaultValue: 'medium',
          options: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Content',
      fields: [
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
          name: 'backgroundColor',
          type: 'select',
          label: 'Background Color',
          defaultValue: 'transparent',
          options: [
            { label: 'Transparent', value: 'transparent' },
            { label: 'White', value: 'white' },
            { label: 'Gray Light', value: 'gray-light' },
            { label: 'Primary Light', value: 'primary-light' },
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