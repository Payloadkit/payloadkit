import type { Block } from 'payload'

export const OutlineBlock: Block = {
  slug: 'outline-block',
  interfaceName: 'OutlineBlock',
  labels: {
    singular: 'Outline Block',
    plural: 'Outline Blocks',
  },
  fields: [
    // Content Source Settings
    {
      type: 'collapsible',
      label: 'Content Source',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'sourceType',
          type: 'select',
          label: 'Source Type',
          options: [
            { label: 'Auto-detect from page content', value: 'auto' },
            { label: 'Manual outline items', value: 'manual' },
          ],
          defaultValue: 'auto',
          required: true,
        },
        {
          name: 'contentSelector',
          type: 'text',
          label: 'Content Selector',
          defaultValue: '.prose, .content, article, main',
          admin: {
            condition: (data, siblingData) => siblingData.sourceType === 'auto',
            description: 'CSS selector for the content area to scan for headings (comma-separated for multiple)',
          },
        },
        {
          name: 'headingLevels',
          type: 'array',
          label: 'Heading Levels to Include',
          admin: {
            condition: (data, siblingData) => siblingData.sourceType === 'auto',
          },
          fields: [
            {
              name: 'level',
              type: 'select',
              label: 'Heading Level',
              options: [
                { label: 'H1', value: 'h1' },
                { label: 'H2', value: 'h2' },
                { label: 'H3', value: 'h3' },
                { label: 'H4', value: 'h4' },
                { label: 'H5', value: 'h5' },
                { label: 'H6', value: 'h6' },
              ],
              required: true,
            },
          ],
        },
        {
          name: 'manualItems',
          type: 'array',
          label: 'Manual Outline Items',
          admin: {
            condition: (data, siblingData) => siblingData.sourceType === 'manual',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Item Title',
              required: true,
            },
            {
              name: 'anchor',
              type: 'text',
              label: 'Anchor Link',
              required: true,
              admin: {
                description: 'The ID or hash to scroll to (e.g., "#section-1")',
              },
            },
            {
              name: 'level',
              type: 'select',
              label: 'Nesting Level',
              options: [
                { label: 'Level 1', value: 1 },
                { label: 'Level 2', value: 2 },
                { label: 'Level 3', value: 3 },
                { label: 'Level 4', value: 4 },
              ],
              defaultValue: 1,
            },
          ],
        },
      ],
    },

    // Appearance Settings
    {
      type: 'collapsible',
      label: 'Appearance',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Block Title',
          defaultValue: 'Table of Contents',
        },
        {
          name: 'position',
          type: 'select',
          label: 'Position',
          options: [
            { label: 'Inline (within content flow)', value: 'inline' },
            { label: 'Sticky Left', value: 'sticky-left' },
            { label: 'Sticky Right', value: 'sticky-right' },
            { label: 'Floating (bottom right)', value: 'floating' },
          ],
          defaultValue: 'inline',
        },
        {
          name: 'style',
          type: 'select',
          label: 'Visual Style',
          options: [
            { label: 'Simple List', value: 'simple' },
            { label: 'Card with Border', value: 'card' },
            { label: 'Pills/Badges', value: 'pills' },
            { label: 'Numbered List', value: 'numbered' },
            { label: 'Progress Dots', value: 'dots' },
          ],
          defaultValue: 'card',
        },
        {
          name: 'maxWidth',
          type: 'select',
          label: 'Maximum Width',
          options: [
            { label: 'Small (200px)', value: 'sm' },
            { label: 'Medium (300px)', value: 'md' },
            { label: 'Large (400px)', value: 'lg' },
            { label: 'Full Width', value: 'full' },
          ],
          defaultValue: 'md',
          admin: {
            condition: (data) => data.position !== 'floating',
          },
        },
        {
          name: 'collapsible',
          type: 'checkbox',
          label: 'Make Collapsible',
          defaultValue: false,
          admin: {
            description: 'Allow users to expand/collapse the outline',
          },
        },
        {
          name: 'initiallyCollapsed',
          type: 'checkbox',
          label: 'Initially Collapsed',
          defaultValue: false,
          admin: {
            condition: (data) => data.collapsible,
          },
        },
      ],
    },

    // Behavior Settings
    {
      type: 'collapsible',
      label: 'Behavior',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'smoothScroll',
          type: 'checkbox',
          label: 'Smooth Scrolling',
          defaultValue: true,
          admin: {
            description: 'Enable smooth scrolling animation when clicking links',
          },
        },
        {
          name: 'highlightActive',
          type: 'checkbox',
          label: 'Highlight Active Section',
          defaultValue: true,
          admin: {
            description: 'Highlight the current section as user scrolls',
          },
        },
        {
          name: 'scrollOffset',
          type: 'number',
          label: 'Scroll Offset (px)',
          defaultValue: 100,
          admin: {
            description: 'Offset from top when scrolling to sections (useful for fixed headers)',
          },
        },
        {
          name: 'autoHide',
          type: 'checkbox',
          label: 'Auto-hide on Mobile',
          defaultValue: false,
          admin: {
            description: 'Automatically hide the outline on mobile devices',
          },
        },
        {
          name: 'showProgress',
          type: 'checkbox',
          label: 'Show Reading Progress',
          defaultValue: false,
          admin: {
            description: 'Show a progress indicator based on scroll position',
          },
        },
      ],
    },

    // Styling Options
    {
      type: 'collapsible',
      label: 'Styling',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'theme',
          type: 'select',
          label: 'Color Theme',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Primary', value: 'primary' },
            { label: 'Neutral', value: 'neutral' },
            { label: 'Dark', value: 'dark' },
          ],
          defaultValue: 'default',
        },
        {
          name: 'fontSize',
          type: 'select',
          label: 'Font Size',
          options: [
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
          ],
          defaultValue: 'sm',
        },
        {
          name: 'spacing',
          type: 'select',
          label: 'Item Spacing',
          options: [
            { label: 'Compact', value: 'compact' },
            { label: 'Normal', value: 'normal' },
            { label: 'Relaxed', value: 'relaxed' },
          ],
          defaultValue: 'normal',
        },
      ],
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
            description: 'Custom CSS for advanced styling',
          },
        },
        {
          name: 'excludeSelectors',
          type: 'text',
          label: 'Exclude Selectors',
          admin: {
            description: 'CSS selectors for headings to exclude (comma-separated)',
          },
        },
        {
          name: 'htmlId',
          type: 'text',
          label: 'HTML ID',
          admin: {
            description: 'Custom HTML ID for this outline',
          },
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