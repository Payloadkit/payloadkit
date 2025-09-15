import type { Block } from 'payload'

export const ArchiveBlock: Block = {
  slug: 'archive-block',
  interfaceName: 'ArchiveBlock',
  labels: {
    singular: 'Archive Block',
    plural: 'Archive Blocks',
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
      admin: {
        description: 'Main heading for the archive section',
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

    // Archive configuration
    {
      name: 'populateBy',
      type: 'select',
      label: 'Populate By',
      options: [
        { label: 'Collection Query', value: 'collection' },
        { label: 'Individual Selection', value: 'selection' },
      ],
      defaultValue: 'collection',
      required: true,
    },

    // Collection-based population
    {
      name: 'relationTo',
      type: 'select',
      label: 'Collection to Display',
      options: [
        { label: 'Posts', value: 'posts' },
        { label: 'Pages', value: 'pages' },
        { label: 'Projects', value: 'projects' },
        { label: 'Products', value: 'products' },
      ],
      defaultValue: 'posts',
      admin: {
        condition: (data, siblingData) => siblingData.populateBy === 'collection',
      },
    },

    {
      name: 'categories',
      type: 'relationship',
      label: 'Filter by Categories',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        condition: (data, siblingData) => siblingData.populateBy === 'collection',
        description: 'Leave empty to show all categories',
      },
    },

    {
      name: 'limit',
      type: 'number',
      label: 'Number of Items',
      defaultValue: 6,
      min: 1,
      max: 50,
      admin: {
        condition: (data, siblingData) => siblingData.populateBy === 'collection',
        description: 'Maximum number of items to display',
      },
    },

    {
      name: 'sortBy',
      type: 'select',
      label: 'Sort By',
      options: [
        { label: 'Created Date (Newest)', value: '-createdAt' },
        { label: 'Created Date (Oldest)', value: 'createdAt' },
        { label: 'Updated Date (Newest)', value: '-updatedAt' },
        { label: 'Updated Date (Oldest)', value: 'updatedAt' },
        { label: 'Title (A-Z)', value: 'title' },
        { label: 'Title (Z-A)', value: '-title' },
      ],
      defaultValue: '-createdAt',
      admin: {
        condition: (data, siblingData) => siblingData.populateBy === 'collection',
      },
    },

    // Manual selection
    {
      name: 'selectedDocs',
      type: 'relationship',
      label: 'Selected Items',
      relationTo: ['posts', 'pages', 'projects', 'products'],
      hasMany: true,
      admin: {
        condition: (data, siblingData) => siblingData.populateBy === 'selection',
        description: 'Manually select specific items to display',
      },
    },

    // Layout options
    {
      name: 'layout',
      type: 'select',
      label: 'Layout',
      options: [
        { label: 'Grid (2 columns)', value: 'grid-2' },
        { label: 'Grid (3 columns)', value: 'grid-3' },
        { label: 'Grid (4 columns)', value: 'grid-4' },
        { label: 'List', value: 'list' },
        { label: 'Masonry', value: 'masonry' },
      ],
      defaultValue: 'grid-3',
      required: true,
    },

    // Display options
    {
      name: 'showImage',
      type: 'checkbox',
      label: 'Show Featured Images',
      defaultValue: true,
    },

    {
      name: 'showExcerpt',
      type: 'checkbox',
      label: 'Show Excerpts',
      defaultValue: true,
    },

    {
      name: 'showDate',
      type: 'checkbox',
      label: 'Show Dates',
      defaultValue: true,
    },

    {
      name: 'showAuthor',
      type: 'checkbox',
      label: 'Show Authors',
      defaultValue: false,
    },

    {
      name: 'showCategories',
      type: 'checkbox',
      label: 'Show Categories',
      defaultValue: true,
    },

    // Background and spacing
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