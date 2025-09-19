import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const CallToAction: Block = {
  slug: 'cta',
  interfaceName: 'CallToActionBlock',
  labels: {
    plural: 'Calls to Action',
    singular: 'Call to Action',
  },
  fields: [
    {
      name: 'richText',
      type: 'richText',
      label: 'Content',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      required: true,
    },
    {
      name: 'links',
      type: 'array',
      label: 'Links',
      maxRows: 2,
      fields: [
        {
          name: 'link',
          type: 'group',
          label: 'Link',
          fields: [
            {
              name: 'type',
              type: 'radio',
              label: 'Type',
              options: [
                { label: 'Internal Link', value: 'reference' },
                { label: 'Custom URL', value: 'custom' },
              ],
              defaultValue: 'reference',
              admin: {
                layout: 'horizontal',
              },
            },
            {
              name: 'newTab',
              type: 'checkbox',
              label: 'Open in new tab',
              admin: {
                condition: (_, { type }) => type === 'custom',
              },
            },
            {
              name: 'reference',
              type: 'relationship',
              label: 'Document to link to',
              relationTo: ['pages', 'posts'],
              required: true,
              maxDepth: 1,
              admin: {
                condition: (_, { type }) => type === 'reference',
              },
            },
            {
              name: 'url',
              type: 'text',
              label: 'Custom URL',
              required: true,
              admin: {
                condition: (_, { type }) => type === 'custom',
              },
            },
            {
              name: 'label',
              type: 'text',
              label: 'Link Label',
              required: true,
            },
            {
              name: 'appearance',
              type: 'select',
              label: 'Appearance',
              options: [
                { label: 'Default', value: 'default' },
                { label: 'Outline', value: 'outline' },
              ],
              defaultValue: 'default',
            },
          ],
        },
      ],
    },
    {
      name: 'height',
      type: 'select',
      label: 'Section Height',
      options: [
        { label: 'Auto', value: 'auto' },
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
        { label: 'Extra Large', value: 'xl' },
      ],
      defaultValue: 'auto',
      admin: {
        description: 'Controls the vertical padding of the section',
      },
    },
  ],
}