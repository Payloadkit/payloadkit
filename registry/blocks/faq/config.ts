import type { Block } from 'payload'
import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

export const FaqBlock: Block = {
  slug: 'faq',
  interfaceName: 'FaqBlock',
  labels: {
    singular: 'FAQ Block',
    plural: 'FAQ Blocks',
  },
  fields: [
    {
      type: 'collapsible',
      label: 'Content',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Section Title',
          defaultValue: 'Frequently Asked Questions',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Questions & Answers',
      fields: [
        {
          name: 'faqs',
          type: 'array',
          label: 'FAQ Items',
          minRows: 1,
          fields: [
            {
              name: 'question',
              type: 'text',
              label: 'Question',
              required: true,
            },
            {
              name: 'answer',
              type: 'richText',
              label: 'Answer',
              required: true,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    FixedToolbarFeature(),
                  ]
                },
              }),
            },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Layout & Styling',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'backgroundColor',
          type: 'select',
          label: 'Background Color',
          defaultValue: 'transparent',
          options: [
            { label: 'Transparent', value: 'transparent' },
            { label: 'White', value: 'white' },
            { label: 'Gray Light', value: 'gray-light' },
            { label: 'Gray Dark', value: 'gray-dark' },
          ],
        },
        {
          name: 'textColor',
          type: 'select',
          label: 'Text Color',
          defaultValue: 'default',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'White', value: 'white' },
            { label: 'Gray', value: 'gray' },
          ],
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