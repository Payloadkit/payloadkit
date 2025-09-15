import type { Block } from 'payload'

export const BannerBlock: Block = {
  slug: 'banner-block',
  interfaceName: 'BannerBlock',
  labels: {
    singular: 'Banner Block',
    plural: 'Banner Blocks',
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
      required: true,
      admin: {
        description: 'Main heading for the banner',
      },
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      admin: {
        description: 'Optional subtitle below the main title',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description',
      admin: {
        description: 'Optional description content',
      },
    },

    // Layout and styling
    {
      name: 'textAlignment',
      type: 'select',
      label: 'Text Alignment',
      options: [
        { label: 'Center', value: 'center' },
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      defaultValue: 'center',
    },

    {
      name: 'textColor',
      type: 'select',
      label: 'Text Color Theme',
      options: [
        { label: 'Light (for dark backgrounds)', value: 'light' },
        { label: 'Dark (for light backgrounds)', value: 'dark' },
        { label: 'Primary Theme Color', value: 'primary' },
      ],
      defaultValue: 'light',
    },

    // Background configuration
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
          ],
          defaultValue: 'color',
          required: true,
        },
        {
          name: 'color',
          type: 'text',
          label: 'Background Color',
          defaultValue: '#3b82f6',
          admin: {
            description: 'Hex color code (e.g., #3b82f6)',
            condition: (data, siblingData) => siblingData.type === 'color',
          },
        },
        {
          name: 'gradientFrom',
          type: 'text',
          label: 'Gradient From Color',
          defaultValue: '#3b82f6',
          admin: {
            description: 'Starting color for gradient',
            condition: (data, siblingData) => siblingData.type === 'gradient',
          },
        },
        {
          name: 'gradientTo',
          type: 'text',
          label: 'Gradient To Color',
          defaultValue: '#1d4ed8',
          admin: {
            description: 'Ending color for gradient',
            condition: (data, siblingData) => siblingData.type === 'gradient',
          },
        },
        {
          name: 'gradientDirection',
          type: 'select',
          label: 'Gradient Direction',
          options: [
            { label: 'To Right', value: 'to-r' },
            { label: 'To Left', value: 'to-l' },
            { label: 'To Bottom', value: 'to-b' },
            { label: 'To Top', value: 'to-t' },
            { label: 'To Bottom Right', value: 'to-br' },
            { label: 'To Bottom Left', value: 'to-bl' },
            { label: 'To Top Right', value: 'to-tr' },
            { label: 'To Top Left', value: 'to-tl' },
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
          name: 'overlay',
          type: 'checkbox',
          label: 'Add Dark Overlay',
          defaultValue: false,
          admin: {
            description: 'Add semi-transparent overlay for better text readability',
            condition: (data, siblingData) => siblingData.type === 'image',
          },
        },
        {
          name: 'overlayOpacity',
          type: 'select',
          label: 'Overlay Opacity',
          options: [
            { label: '10%', value: '10' },
            { label: '20%', value: '20' },
            { label: '30%', value: '30' },
            { label: '40%', value: '40' },
            { label: '50%', value: '50' },
            { label: '60%', value: '60' },
            { label: '70%', value: '70' },
          ],
          defaultValue: '40',
          admin: {
            condition: (data, siblingData) => siblingData.type === 'image' && siblingData.overlay,
          },
        },
      ],
    },

    // Call-to-action buttons
    {
      name: 'callToActions',
      type: 'array',
      label: 'Call to Action Buttons',
      maxRows: 3,
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Button Label',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
          required: true,
          admin: {
            description: 'Internal path (/about) or external URL (https://...)',
          },
        },
        {
          name: 'style',
          type: 'select',
          label: 'Button Style',
          options: [
            { label: 'Primary (filled)', value: 'primary' },
            { label: 'Secondary (outline)', value: 'secondary' },
            { label: 'Ghost (text only)', value: 'ghost' },
          ],
          defaultValue: 'primary',
        },
        {
          name: 'size',
          type: 'select',
          label: 'Button Size',
          options: [
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
          ],
          defaultValue: 'md',
        },
        {
          name: 'newTab',
          type: 'checkbox',
          label: 'Open in New Tab',
          defaultValue: false,
        },
      ],
    },

    // Height control
    {
      name: 'height',
      type: 'select',
      label: 'Banner Height',
      options: [
        { label: 'Auto (content height)', value: 'auto' },
        { label: 'Small (50vh)', value: 'small' },
        { label: 'Medium (60vh)', value: 'medium' },
        { label: 'Large (75vh)', value: 'large' },
        { label: 'Full Screen (100vh)', value: 'full' },
      ],
      defaultValue: 'medium',
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