import type { Block } from 'payload'

export const BigHero: Block = {
  slug: 'big-hero',
  interfaceName: 'BigHeroBlock',
  labels: {
    singular: 'Big Hero',
    plural: 'Big Heroes',
  },
  fields: [
    // Layout Settings
    {
      type: 'collapsible',
      label: 'Layout Settings',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'height',
              type: 'select',
              label: 'Section Height',
              options: [
                { label: '100vh (Full Screen)', value: '100vh' },
                { label: '90vh', value: '90vh' },
                { label: '80vh', value: '80vh' },
                { label: '70vh', value: '70vh' },
                { label: 'Auto', value: 'auto' },
              ],
              defaultValue: '100vh',
              admin: {
                width: '50%',
              },
            },
            {
              name: 'contentPosition',
              type: 'select',
              label: 'Content Position',
              options: [
                { label: 'Center', value: 'center' },
                { label: 'Top Center', value: 'top-center' },
                { label: 'Bottom Center', value: 'bottom-center' },
                { label: 'Left Center', value: 'left-center' },
                { label: 'Right Center', value: 'right-center' },
              ],
              defaultValue: 'center',
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'enableParallax',
          type: 'checkbox',
          label: 'Enable Parallax Effect',
          defaultValue: true,
          admin: {
            description: 'Enable subtle parallax scrolling effect on background elements.',
          },
        },
      ],
    },

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
          admin: {
            description: 'Use line breaks to create multi-line titles.',
          },
        },
        {
          name: 'subtitle',
          type: 'textarea',
          label: 'Subtitle',
          admin: {
            description: 'Optional subtitle or tagline.',
          },
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Description',
        },
        {
          name: 'callToActions',
          type: 'array',
          label: 'Call to Actions (Optional)',
          maxRows: 2,
          admin: {
            description: 'CTAs are optional for BigHero - focus on visual impact.',
          },
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
              defaultValue: 'lg',
            },
          ],
        },
      ],
    },

    // Background Settings
    {
      type: 'collapsible',
      label: 'Background Settings',
      admin: {
        initCollapsed: false,
      },
      fields: [
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
                { label: 'Video', value: 'video' },
                { label: 'None', value: 'none' },
              ],
              defaultValue: 'gradient',
              required: true,
            },
            {
              name: 'color',
              type: 'text',
              label: 'Background Color',
              defaultValue: '#000000',
              admin: {
                condition: (data, siblingData) => siblingData.type === 'color',
              },
            },
            {
              name: 'gradientFrom',
              type: 'text',
              label: 'Gradient From Color',
              defaultValue: '#1e293b',
              admin: {
                condition: (data, siblingData) => siblingData.type === 'gradient',
              },
            },
            {
              name: 'gradientTo',
              type: 'text',
              label: 'Gradient To Color',
              defaultValue: '#0f172a',
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
            {
              name: 'videoUrl',
              type: 'text',
              label: 'Video URL',
              admin: {
                condition: (data, siblingData) => siblingData.type === 'video',
                description: 'MP4 video URL for background video',
              },
            },
            {
              name: 'videoPoster',
              type: 'upload',
              relationTo: 'media',
              label: 'Video Poster Image',
              admin: {
                condition: (data, siblingData) => siblingData.type === 'video',
                description: 'Fallback image shown before video loads',
              },
            },
          ],
        },
        {
          name: 'overlay',
          type: 'group',
          label: 'Background Overlay',
          fields: [
            {
              name: 'enabled',
              type: 'checkbox',
              label: 'Enable Overlay',
              defaultValue: true,
            },
            {
              name: 'color',
              type: 'text',
              label: 'Overlay Color',
              defaultValue: '#000000',
              admin: {
                condition: (data, siblingData) => siblingData.enabled,
              },
            },
            {
              name: 'opacity',
              type: 'number',
              label: 'Overlay Opacity',
              defaultValue: 0.5,
              min: 0,
              max: 1,
              admin: {
                step: 0.1,
                condition: (data, siblingData) => siblingData.enabled,
              },
            },
          ],
        },
      ],
    },

    // Typography Settings
    {
      type: 'collapsible',
      label: 'Typography',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'textColor',
          type: 'select',
          label: 'Text Color Theme',
          options: [
            { label: 'White', value: 'white' },
            { label: 'Dark', value: 'dark' },
            { label: 'Primary', value: 'primary' },
          ],
          defaultValue: 'white',
        },
        {
          name: 'textAlignment',
          type: 'select',
          label: 'Text Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'center',
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
            { label: 'Hero Size', value: 'hero' },
          ],
          defaultValue: 'hero',
        },
      ],
    },

    // Animation Settings
    {
      type: 'collapsible',
      label: 'Animations',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'enableAnimations',
          type: 'checkbox',
          label: 'Enable Animations',
          defaultValue: true,
        },
        {
          name: 'showScrollIndicator',
          type: 'checkbox',
          label: 'Show Scroll Indicator',
          defaultValue: true,
          admin: {
            description: 'Show animated scroll indicator at the bottom for full-height heroes.',
          },
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