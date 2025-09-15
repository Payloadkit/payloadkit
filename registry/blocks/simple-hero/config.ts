import type { Block } from 'payload'

export const SimpleHero: Block = {
  slug: 'simple-hero',
  interfaceName: 'SimpleHeroBlock',
  labels: {
    singular: 'Simple Hero',
    plural: 'Simple Heroes',
  },
  fields: [
    // Content Settings
    {
      type: 'collapsible',
      label: 'Content',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
          label: 'Eyebrow Text',
          admin: {
            description: 'Small text above the main title',
          },
        },
        {
          name: 'title',
          type: 'textarea',
          label: 'Main Title',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'textarea',
          label: 'Subtitle',
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Description',
        },
        {
          name: 'callToActions',
          type: 'array',
          label: 'Call to Actions',
          maxRows: 2,
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Button Text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'URL',
              required: true,
            },
            {
              name: 'appearance',
              type: 'select',
              label: 'Button Style',
              options: [
                { label: 'Primary', value: 'primary' },
                { label: 'Secondary', value: 'secondary' },
                { label: 'Outline', value: 'outline' },
              ],
              defaultValue: 'primary',
            },
            {
              name: 'size',
              type: 'select',
              label: 'Button Size',
              options: [
                { label: 'Small', value: 'sm' },
                { label: 'Default', value: 'default' },
                { label: 'Large', value: 'lg' },
              ],
              defaultValue: 'default',
            },
          ],
        },
      ],
    },

    // Layout Settings
    {
      type: 'collapsible',
      label: 'Layout',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'layout',
          type: 'select',
          label: 'Layout Style',
          options: [
            { label: 'Centered', value: 'centered' },
            { label: 'Left Aligned', value: 'left' },
            { label: 'Right Aligned', value: 'right' },
            { label: 'Split (Content + Image)', value: 'split' },
          ],
          defaultValue: 'centered',
        },
        {
          name: 'contentWidth',
          type: 'select',
          label: 'Content Width',
          options: [
            { label: 'Narrow', value: 'narrow' },
            { label: 'Medium', value: 'medium' },
            { label: 'Wide', value: 'wide' },
            { label: 'Full', value: 'full' },
          ],
          defaultValue: 'medium',
          admin: {
            condition: (data) => data.layout !== 'split',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Hero Image',
          admin: {
            condition: (data) => data.layout === 'split',
          },
        },
        {
          name: 'imagePosition',
          type: 'select',
          label: 'Image Position',
          options: [
            { label: 'Right', value: 'right' },
            { label: 'Left', value: 'left' },
          ],
          defaultValue: 'right',
          admin: {
            condition: (data) => data.layout === 'split',
          },
        },
      ],
    },

    // Background Settings
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
            { label: 'Color', value: 'color' },
            { label: 'Gradient', value: 'gradient' },
            { label: 'Image', value: 'image' },
            { label: 'None', value: 'none' },
          ],
          defaultValue: 'none',
          required: true,
        },
        {
          name: 'color',
          type: 'text',
          label: 'Background Color',
          defaultValue: '#ffffff',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'color',
          },
        },
        {
          name: 'gradientFrom',
          type: 'text',
          label: 'Gradient From Color',
          defaultValue: '#f8fafc',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'gradient',
          },
        },
        {
          name: 'gradientTo',
          type: 'text',
          label: 'Gradient To Color',
          defaultValue: '#e2e8f0',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'gradient',
          },
        },
        {
          name: 'gradientDirection',
          type: 'select',
          label: 'Gradient Direction',
          options: [
            { label: 'To Right', value: 'to-r' },
            { label: 'To Bottom Right', value: 'to-br' },
            { label: 'To Bottom', value: 'to-b' },
            { label: 'To Bottom Left', value: 'to-bl' },
          ],
          defaultValue: 'to-br',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'gradient',
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

    // Typography & Styling
    {
      type: 'collapsible',
      label: 'Typography & Styling',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'textColor',
          type: 'select',
          label: 'Text Color Theme',
          options: [
            { label: 'Dark (for light backgrounds)', value: 'dark' },
            { label: 'Light (for dark backgrounds)', value: 'light' },
            { label: 'Primary Theme Color', value: 'primary' },
          ],
          defaultValue: 'dark',
        },
        {
          name: 'titleSize',
          type: 'select',
          label: 'Title Size',
          options: [
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
            { label: 'Extra Large', value: 'xl' },
          ],
          defaultValue: 'lg',
        },
      ],
    },

    // Spacing
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
      defaultValue: 'xl',
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
      defaultValue: 'xl',
    },

    // Advanced Settings
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
          label: 'HTML ID',
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