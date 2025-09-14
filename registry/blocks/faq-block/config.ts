import type { Block } from 'payload'

export const FaqBlock: Block = {
  slug: 'faq-block',
  interfaceName: 'FaqBlock',
  labels: {
    singular: 'FAQ Block',
    plural: 'FAQ Blocks',
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
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      admin: {
        description: 'Main heading for the FAQ section',
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
        { label: 'Single Column (stacked)', value: 'single' },
        { label: 'Two Columns (title left, FAQ right)', value: 'two-column' },
      ],
      defaultValue: 'single',
      required: true,
    },

    // Styling options
    {
      name: 'showBorder',
      type: 'checkbox',
      label: 'Show FAQ Borders',
      defaultValue: true,
      admin: {
        description: 'Add borders between FAQ items',
      },
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
            description: 'Hex color code (e.g., #f8fafc)',
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

    // FAQ Cards Background
    {
      name: 'cardBackground',
      type: 'text',
      label: 'FAQ Cards Background Color',
      admin: {
        description: 'Background color for FAQ cards (default: card background)',
      },
    },

    // FAQs array
    {
      name: 'faqs',
      type: 'array',
      label: 'Frequently Asked Questions',
      minRows: 1,
      maxRows: 15,
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icon (Optional)',
          options: [
            { label: 'None', value: '' },
            { label: '❓ Help Circle', value: 'help-circle' },
            { label: '💡 Lightbulb', value: 'lightbulb' },
            { label: '⚡ Lightning', value: 'zap' },
            { label: '🎯 Target', value: 'target' },
            { label: '⭐ Star', value: 'star' },
            { label: '📋 Clipboard', value: 'clipboard' },
            { label: '🔍 Search', value: 'search' },
            { label: '💬 Message Circle', value: 'message-circle' },
            { label: '📱 Smartphone', value: 'smartphone' },
            { label: '⏱️ Timer', value: 'timer' },
            { label: '🔒 Lock', value: 'lock' },
            { label: '🚀 Rocket', value: 'rocket' },
            { label: '✅ Check Circle', value: 'check-circle' },
            { label: '🔧 Settings', value: 'settings' },
          ],
        },
        {
          name: 'question',
          type: 'text',
          label: 'Question',
          required: true,
          admin: {
            description: 'The question or heading for this FAQ item',
          },
        },
        {
          name: 'answer',
          type: 'richText',
          label: 'Answer',
          required: true,
          admin: {
            description: 'The detailed answer or content for this FAQ item',
          },
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