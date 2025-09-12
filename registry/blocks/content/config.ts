import type { Block } from 'payload'
import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

export const ContentBlock: Block = {
  slug: 'content',
  interfaceName: 'ContentBlock',
  labels: {
    singular: 'Content Block',
    plural: 'Content Blocks',
  },
  fields: [
    {
      type: 'collapsible',
      label: 'Columns',
      fields: [
        {
          name: 'columns',
          type: 'array',
          admin: {
            initCollapsed: true,
          },
          fields: [
            {
              name: 'size',
              type: 'select',
              defaultValue: 'oneThird',
              options: [
                {
                  label: 'One Third',
                  value: 'oneThird',
                },
                {
                  label: 'Half',
                  value: 'half',
                },
                {
                  label: 'Two Thirds',
                  value: 'twoThirds',
                },
                {
                  label: 'Full',
                  value: 'full',
                },
              ],
            },
            {
              name: 'richText',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures, defaultFeatures }) => {
                  return [
                    ...defaultFeatures,
                    ...rootFeatures,
                    FixedToolbarFeature(),
                  ]
                },
              }),
              label: false,
            },
            {
              name: 'enableLink',
              type: 'checkbox',
              label: 'Enable Link',
            },
            {
              name: 'link',
              type: 'group',
              label: 'Link',
              admin: {
                condition: (_data, siblingData) => {
                  return Boolean(siblingData?.enableLink)
                },
              },
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  label: 'Link Text',
                },
                {
                  name: 'href',
                  type: 'text',
                  label: 'Link URL',
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
          maxRows: 4,
        },
      ],
    },
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
          label: 'Custom HTML ID',
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