import type { Block } from 'payload'

export const FeatureStepsBlock: Block = {
  slug: 'feature-steps-block',
  interfaceName: 'FeatureStepsBlock',
  labels: {
    singular: 'Feature Steps Block',
    plural: 'Feature Steps Blocks',
  },
  fields: [
    // Layout Settings
    {
      name: 'sectionLayout',
      type: 'select',
      label: 'Section Layout',
      options: [
        { label: 'Stacked (default)', value: 'stacked' },
        { label: '2 columns (content left, steps right)', value: 'two-column' },
      ],
      defaultValue: 'stacked',
    },

    // Header content
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
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description Content',
    },

    // Background and styling
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
          defaultValue: 'gradient',
          required: true,
        },
        {
          name: 'color',
          type: 'text',
          label: 'Background Color',
          defaultValue: '#f0f9ff',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'color',
          },
        },
        {
          name: 'gradientFrom',
          type: 'text',
          label: 'Gradient From Color',
          defaultValue: '#f0f9ff',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'gradient',
          },
        },
        {
          name: 'gradientTo',
          type: 'text',
          label: 'Gradient To Color',
          defaultValue: '#dbeafe',
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
            { label: 'To Left', value: 'to-l' },
            { label: 'To Top Left', value: 'to-tl' },
            { label: 'To Top', value: 'to-t' },
            { label: 'To Top Right', value: 'to-tr' },
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

    // Steps configuration
    {
      name: 'stepsTitle',
      type: 'text',
      label: 'Steps Section Title',
      defaultValue: 'How it works',
    },
    {
      name: 'stepsLayout',
      type: 'select',
      label: 'Steps Layout',
      options: [
        { label: '2 columns', value: 'grid-2' },
        { label: '3 columns', value: 'grid-3' },
        { label: '4 columns', value: 'grid-4' },
        { label: 'Vertical list', value: 'vertical' },
        { label: 'Staggered stair', value: 'stair' },
      ],
      defaultValue: 'grid-3',
    },
    {
      name: 'stepAlignment',
      type: 'select',
      label: 'Step Content Alignment',
      options: [
        { label: 'Left aligned', value: 'left' },
        { label: 'Center aligned', value: 'center' },
      ],
      defaultValue: 'left',
    },
    {
      name: 'cardStyle',
      type: 'select',
      label: 'Card Style',
      options: [
        { label: 'Elevated (with shadow)', value: 'elevated' },
        { label: 'Flat (subtle border)', value: 'flat' },
        { label: 'Minimal (no border)', value: 'minimal' },
      ],
      defaultValue: 'elevated',
    },
    {
      name: 'showStepNumbers',
      type: 'checkbox',
      label: 'Show Step Numbers',
      defaultValue: true,
    },

    // Steps array
    {
      name: 'steps',
      type: 'array',
      label: 'Steps',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            { label: '🎯 Target', value: 'target' },
            { label: '💬 Message', value: 'message-circle' },
            { label: '📈 Trending Up', value: 'trending-up' },
            { label: '📚 Book', value: 'book-open' },
            { label: '💡 Lightbulb', value: 'lightbulb' },
            { label: '⚡ Zap', value: 'zap' },
            { label: '🔍 Search', value: 'search' },
            { label: '⭐ Star', value: 'star' },
            { label: '🚀 Rocket', value: 'rocket' },
            { label: '🎓 Graduation', value: 'graduation-cap' },
            { label: '⚙️ Settings', value: 'settings' },
            { label: '📊 Bar Chart', value: 'bar-chart' },
            { label: '🛡️ Shield', value: 'shield' },
            { label: '❤️ Heart', value: 'heart' },
            { label: '🏆 Trophy', value: 'trophy' },
            { label: '🎨 Palette', value: 'palette' },
          ],
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Step Title',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Step Description',
          required: true,
        },
        {
          name: 'showImage',
          type: 'checkbox',
          label: 'Show Image (for stair layout)',
          defaultValue: false,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Step Image',
          admin: {
            condition: (data, siblingData) => siblingData?.showImage === true,
          },
        },
      ],
    },

    // Advantages section
    {
      name: 'showAdvantages',
      type: 'checkbox',
      label: 'Show Advantages Section',
      defaultValue: true,
    },
    {
      name: 'advantagesTitle',
      type: 'text',
      label: 'Advantages Section Title',
      defaultValue: 'Key Benefits',
      admin: {
        condition: (data, siblingData) => siblingData?.showAdvantages,
      },
    },
    {
      name: 'advantagesCardStyle',
      type: 'select',
      label: 'Advantages Card Style',
      options: [
        { label: 'Elevated (with shadow)', value: 'elevated' },
        { label: 'Flat (subtle border)', value: 'flat' },
        { label: 'Minimal (no border)', value: 'minimal' },
      ],
      defaultValue: 'elevated',
      admin: {
        condition: (data, siblingData) => siblingData?.showAdvantages,
      },
    },
    {
      name: 'advantages',
      type: 'array',
      label: 'Advantages',
      maxRows: 8,
      admin: {
        condition: (data, siblingData) => siblingData?.showAdvantages,
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Advantage Text',
          required: true,
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
  ],
}