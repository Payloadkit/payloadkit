import type { Block } from 'payload'

export const FeatureBlock: Block = {
  slug: 'feature-block',
  interfaceName: 'FeatureBlock',
  labels: {
    singular: 'Feature Block',
    plural: 'Feature Blocks',
  },
  fields: [
    // Header section
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow Text',
      admin: {
        description: 'Small text above the main title',
      },
    },
    {
      name: 'eyebrowStyle',
      type: 'select',
      label: 'Eyebrow Style',
      options: [
        { label: 'Simple Text', value: 'text' },
        { label: 'Badge Style', value: 'badge' },
      ],
      defaultValue: 'text',
      admin: {
        condition: (data, siblingData) => Boolean(siblingData.eyebrow),
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      admin: {
        description: 'Main heading for the feature block',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description',
      admin: {
        description: 'Optional description below the title',
      },
    },

    // Layout options
    {
      name: 'layout',
      type: 'select',
      label: 'Layout',
      options: [
        { label: '2 Columns', value: 'grid-2' },
        { label: '3 Columns', value: 'grid-3' },
        { label: '4 Columns', value: 'grid-4' },
        { label: 'Vertical List', value: 'list' },
      ],
      defaultValue: 'grid-3',
      required: true,
    },

    // Background
    {
      name: 'background',
      type: 'group',
      label: 'Background',
      fields: [
        {
          name: 'type',
          type: 'select',
          label: 'Background Type',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Color', value: 'color' },
            { label: 'Gradient', value: 'gradient' },
            { label: 'Image', value: 'image' },
          ],
          defaultValue: 'none',
          required: true,
        },
        {
          name: 'color',
          type: 'text',
          label: 'Background Color',
          admin: {
            description: 'Hex color code (e.g., #ffffff)',
            condition: (data, siblingData) => siblingData.type === 'color',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Background Image',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'image',
          },
        },
      ],
    },

    // Features array
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      minRows: 1,
      maxRows: 8,
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
            { label: 'Smartphone', value: 'smartphone' },
            { label: 'Globe', value: 'globe' },
            { label: 'Lock', value: 'lock' },
            { label: 'Rocket', value: 'rocket' },
            { label: 'Clock', value: 'clock' },
            { label: 'CheckCircle', value: 'check-circle' },
          ],
        },
        {
          name: 'iconColor',
          type: 'text',
          label: 'Icon Color',
          defaultValue: '#3b82f6',
          admin: {
            description: 'Hex color code for the icon background',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Feature Title',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Feature Description',
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
              name: 'url',
              type: 'text',
              label: 'URL',
              admin: {
                description: 'Internal or external URL',
              },
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

    // Spacing options
    {
      name: 'paddingTop',
      type: 'select',
      label: 'Top Padding',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'lg' },
        { label: 'Extra Large', value: 'xl' },
      ],
      defaultValue: 'lg',
    },
    {
      name: 'paddingBottom',
      type: 'select',
      label: 'Bottom Padding',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'lg' },
        { label: 'Extra Large', value: 'xl' },
      ],
      defaultValue: 'lg',
    },
  ],
}