import { Plugin } from 'payload'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { getServerSideURL } from '@/utilities/getURL'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { Page } from '@/payload-types'

const generateTitle: GenerateTitle<Page> = ({ doc }) => {
  return doc?.title ? `${doc.title} | PayloadKit` : 'PayloadKit'
}

const generateURL: GenerateURL<Page> = ({ doc }) => {
  const url = getServerSideURL()
  return doc?.slug ? `${url}/${doc.slug}` : url
}

/**
 * Basic plugins configuration for PayloadKit
 * Essential plugins for most PayloadCMS applications
 */
export const pluginsConfig: Plugin[] = [
  // SEO plugin for meta tags and search optimization
  seoPlugin({
    generateTitle,
    generateURL,
  }),

  // Form builder for contact forms and lead generation
  formBuilderPlugin({
    fields: {
      payment: false,
    },
  }),

  // Redirects management
  redirectsPlugin({
    collections: ['pages'],
  }),
]

/**
 * Extended plugins configuration
 * Add more plugins as needed for your project
 */
export function createPluginsConfig(additionalPlugins: Plugin[] = []) {
  return [
    ...pluginsConfig,
    ...additionalPlugins,
  ]
}