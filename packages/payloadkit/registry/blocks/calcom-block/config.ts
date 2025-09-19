import type { Block } from 'payload'

export const CalComBlock: Block = {
  slug: 'calcom-block',
  interfaceName: 'CalComBlock',
  labels: {
    singular: 'Cal.com Block',
    plural: 'Cal.com Blocks',
  },
  fields: [
    // Cal.com Settings
    {
      type: 'collapsible',
      label: 'Cal.com Configuration',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'calcomUsername',
          type: 'text',
          label: 'Cal.com Username',
          required: true,
          admin: {
            description: 'Your Cal.com username (e.g., "john-doe" from cal.com/john-doe)',
          },
        },
        {
          name: 'eventType',
          type: 'text',
          label: 'Event Type',
          admin: {
            description: 'Specific event type slug (optional). Leave empty for default booking page.',
          },
        },
        {
          name: 'theme',
          type: 'select',
          label: 'Calendar Theme',
          options: [
            { label: 'Auto (follows system)', value: 'auto' },
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' },
          ],
          defaultValue: 'auto',
        },
      ],
    },

    // Layout Settings
    {
      type: 'collapsible',
      label: 'Layout Settings',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'layout',
          type: 'select',
          label: 'Block Layout',
          options: [
            { label: 'Full Width Calendar', value: 'full-width' },
            { label: 'Content + Calendar (50/50)', value: 'split-content' },
            { label: 'Calendar + Content (50/50)', value: 'split-calendar' },
          ],
          defaultValue: 'full-width',
        },
        {
          name: 'height',
          type: 'select',
          label: 'Calendar Height',
          options: [
            { label: 'Small (400px)', value: 'sm' },
            { label: 'Medium (600px)', value: 'md' },
            { label: 'Large (800px)', value: 'lg' },
            { label: 'Auto', value: 'auto' },
          ],
          defaultValue: 'lg',
        },
      ],
    },

    // Content Settings (for split layouts)
    {
      type: 'collapsible',
      label: 'Content Settings',
      admin: {
        initCollapsed: true,
        condition: (data) => data.layout === 'split-content' || data.layout === 'split-calendar',
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
          type: 'text',
          label: 'Main Title',
          defaultValue: 'Schedule a Meeting',
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Subtitle',
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Description',
          admin: {
            description: 'Content to display alongside the calendar',
          },
        },
        {
          name: 'features',
          type: 'array',
          label: 'Features List',
          maxRows: 6,
          admin: {
            description: 'List of features or benefits to highlight',
          },
          fields: [
            {
              name: 'icon',
              type: 'select',
              label: 'Icon',
              options: [
                { label: '📅 Calendar', value: 'calendar' },
                { label: '⏰ Clock', value: 'clock' },
                { label: '💬 Message Circle', value: 'message-circle' },
                { label: '📞 Phone', value: 'phone' },
                { label: '🎯 Target', value: 'target' },
                { label: '✅ Check', value: 'check' },
                { label: '🌟 Star', value: 'star' },
                { label: '🔒 Shield', value: 'shield' },
              ],
              defaultValue: 'check',
            },
            {
              name: 'text',
              type: 'text',
              label: 'Feature Text',
              required: true,
            },
          ],
        },
      ],
    },

    // Background and Styling
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
          name: 'customCss',
          type: 'code',
          label: 'Custom CSS',
          admin: {
            language: 'css',
            description: 'Custom CSS for advanced styling. Use with caution.',
          },
        },
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