import type { GlobalConfig } from 'payload'
import { colorPickerField } from '../../fields/color-picker'

// Font options
const fontOptions = [
  { label: 'Inter', value: 'Inter, sans-serif' },
  { label: 'Poppins', value: 'Poppins, sans-serif' },
  { label: 'Open Sans', value: 'Open Sans, sans-serif' },
  { label: 'Roboto', value: 'Roboto, sans-serif' },
  { label: 'Lato', value: 'Lato, sans-serif' },
  { label: 'Montserrat', value: 'Montserrat, sans-serif' },
  { label: 'Source Sans Pro', value: 'Source Sans Pro, sans-serif' },
  { label: 'Raleway', value: 'Raleway, sans-serif' },
  { label: 'Ubuntu', value: 'Ubuntu, sans-serif' },
  { label: 'Nunito', value: 'Nunito, sans-serif' },
  { label: 'Geist Sans', value: 'var(--font-geist-sans)' },
  { label: 'System', value: 'system-ui, sans-serif' },
]

const serifFontOptions = [
  { label: 'Georgia', value: 'Georgia, serif' },
  { label: 'Times New Roman', value: 'Times New Roman, serif' },
  { label: 'Playfair Display', value: 'Playfair Display, serif' },
  { label: 'Merriweather', value: 'Merriweather, serif' },
  { label: 'Lora', value: 'Lora, serif' },
  { label: 'Crimson Text', value: 'Crimson Text, serif' },
  { label: 'Libre Baskerville', value: 'Libre Baskerville, serif' },
  { label: 'Caveat Brush', value: 'Caveat Brush, cursive' },
  { label: 'System Serif', value: 'serif' },
]

const monospaceFontOptions = [
  { label: 'Fira Code', value: 'Fira Code, monospace' },
  { label: 'JetBrains Mono', value: 'JetBrains Mono, monospace' },
  { label: 'Source Code Pro', value: 'Source Code Pro, monospace' },
  { label: 'Monaco', value: 'Monaco, monospace' },
  { label: 'Menlo', value: 'Menlo, monospace' },
  { label: 'Consolas', value: 'Consolas, monospace' },
  { label: 'Geist Mono', value: 'var(--font-geist-mono)' },
  { label: 'System Monospace', value: 'ui-monospace, monospace' },
]

const radiusOptions = [
  { label: 'None (0)', value: '0' },
  { label: 'Small (0.125rem)', value: '0.125rem' },
  { label: 'Default (0.25rem)', value: '0.25rem' },
  { label: 'Medium (0.375rem)', value: '0.375rem' },
  { label: 'Large (0.5rem)', value: '0.5rem' },
  { label: 'Extra Large (0.625rem)', value: '0.625rem' },
  { label: 'Rounded (0.75rem)', value: '0.75rem' },
  { label: 'Full (1rem)', value: '1rem' },
]

export const Theme: GlobalConfig = {
  slug: 'theme',
  label: 'Theme Configuration',
  access: {
    read: () => true,
    update: ({ req: { user } }) => {
      return Boolean(user)
    },
  },
  admin: {
    components: {
      views: {
        edit: {
          Preview: {
            path: './components/ThemePreview',
            clientProps: {
              initialData: undefined,
            },
          },
        },
      },
    },
  },
  fields: [
    // Preset Manager Interface
    {
      type: 'ui',
      name: 'presetManager',
      admin: {
        components: {
          Field: './components/PresetManager',
        },
      },
    },

    // Current active preset
    {
      name: 'currentPreset',
      type: 'text',
      label: 'Current Preset',
      defaultValue: 'Default',
      admin: {
        description: 'Name of the currently active preset',
        position: 'sidebar',
        readOnly: true,
      },
    },

    // Dynamic presets array (hidden - managed by PresetManager)
    {
      name: 'presets',
      type: 'array',
      label: 'Theme Presets',
      admin: {
        description: 'List of available theme presets',
        position: 'sidebar',
        hidden: true,
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Preset Name',
          required: true,
        },

        // Base Colors
        {
          type: 'collapsible',
          label: 'Base Colors',
          fields: [
            colorPickerField({
              name: 'backgroundColor',
              label: 'Background',
              defaultValue: '#ffffff',
            }),
            colorPickerField({
              name: 'foregroundColor',
              label: 'Foreground',
              defaultValue: '#09090b',
            }),
            colorPickerField({
              name: 'cardBackground',
              label: 'Card Background',
              defaultValue: '#ffffff',
            }),
            colorPickerField({
              name: 'cardForeground',
              label: 'Card Foreground',
              defaultValue: '#09090b',
            }),
            colorPickerField({
              name: 'popoverBackground',
              label: 'Popover Background',
              defaultValue: '#ffffff',
            }),
            colorPickerField({
              name: 'popoverForeground',
              label: 'Popover Foreground',
              defaultValue: '#09090b',
            }),
          ],
        },

        // Interactive Colors
        {
          type: 'collapsible',
          label: 'Interactive Colors',
          fields: [
            colorPickerField({
              name: 'primaryColor',
              label: 'Primary',
              defaultValue: '#18181b',
            }),
            colorPickerField({
              name: 'primaryForeground',
              label: 'Primary Foreground',
              defaultValue: '#fafafa',
            }),
            colorPickerField({
              name: 'secondaryColor',
              label: 'Secondary',
              defaultValue: '#f4f4f5',
            }),
            colorPickerField({
              name: 'secondaryForeground',
              label: 'Secondary Foreground',
              defaultValue: '#18181b',
            }),
            colorPickerField({
              name: 'accentColor',
              label: 'Accent',
              defaultValue: '#f4f4f5',
            }),
            colorPickerField({
              name: 'accentForeground',
              label: 'Accent Foreground',
              defaultValue: '#18181b',
            }),
            colorPickerField({
              name: 'mutedColor',
              label: 'Muted',
              defaultValue: '#f4f4f5',
            }),
            colorPickerField({
              name: 'mutedForeground',
              label: 'Muted Foreground',
              defaultValue: '#71717a',
            }),
          ],
        },

        // Status Colors
        {
          type: 'collapsible',
          label: 'Status Colors',
          fields: [
            colorPickerField({
              name: 'destructiveColor',
              label: 'Destructive',
              defaultValue: '#ef4444',
            }),
            colorPickerField({
              name: 'destructiveForeground',
              label: 'Destructive Foreground',
              defaultValue: '#fafafa',
            }),
            colorPickerField({
              name: 'successColor',
              label: 'Success',
              defaultValue: '#22c55e',
            }),
            colorPickerField({
              name: 'successForeground',
              label: 'Success Foreground',
              defaultValue: '#fafafa',
            }),
            colorPickerField({
              name: 'warningColor',
              label: 'Warning',
              defaultValue: '#f59e0b',
            }),
            colorPickerField({
              name: 'warningForeground',
              label: 'Warning Foreground',
              defaultValue: '#fafafa',
            }),
          ],
        },

        // Form Colors
        {
          type: 'collapsible',
          label: 'Form Colors',
          fields: [
            colorPickerField({
              name: 'inputBorder',
              label: 'Input Border',
              defaultValue: '#e4e4e7',
            }),
            colorPickerField({
              name: 'borderColor',
              label: 'Border',
              defaultValue: '#e4e4e7',
            }),
            colorPickerField({
              name: 'ringColor',
              label: 'Ring',
              defaultValue: '#18181b',
            }),
          ],
        },

        // Typography
        {
          type: 'collapsible',
          label: 'Typography',
          fields: [
            {
              name: 'fontSans',
              type: 'select',
              label: 'Font Sans-Serif',
              options: fontOptions,
              defaultValue: 'Inter, sans-serif',
            },
            {
              name: 'fontSerif',
              type: 'select',
              label: 'Font Serif',
              options: serifFontOptions,
              defaultValue: 'Georgia, serif',
            },
            {
              name: 'fontMono',
              type: 'select',
              label: 'Font Monospace',
              options: monospaceFontOptions,
              defaultValue: 'Fira Code, monospace',
            },
            {
              name: 'headingFont',
              type: 'select',
              label: 'Heading Font',
              options: [
                { label: 'Use Sans-Serif', value: 'sans' },
                { label: 'Use Serif', value: 'serif' },
                ...fontOptions.map(font => ({ ...font, label: `Custom: ${font.label}` })),
              ],
              defaultValue: 'sans',
            },
          ],
        },

        // Design Tokens
        {
          type: 'collapsible',
          label: 'Design Tokens',
          fields: [
            {
              name: 'borderRadius',
              type: 'select',
              label: 'Border Radius',
              options: radiusOptions,
              defaultValue: '0.25rem',
            },
            {
              name: 'letterSpacing',
              type: 'text',
              label: 'Letter Spacing',
              defaultValue: '0.025em',
            },
          ],
        },
      ],
    },

    // Theme Mode
    {
      name: 'mode',
      type: 'select',
      label: 'Theme Mode',
      options: [
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
        { label: 'Auto (System)', value: 'auto' },
      ],
      defaultValue: 'auto',
      admin: {
        description: 'Default theme display mode',
        position: 'sidebar',
      },
    },

    // Current Theme Colors (always visible)
    {
      type: 'collapsible',
      label: 'Current Theme Colors',
      admin: {
        description: 'Colors of the currently selected preset. Modify here to adjust the theme.',
      },
      fields: [
        // Base Colors
        {
          type: 'row',
          fields: [
            colorPickerField({
              name: 'backgroundColor',
              label: 'Background',
              defaultValue: '#ffffff',
            }),
            colorPickerField({
              name: 'foregroundColor',
              label: 'Foreground',
              defaultValue: '#09090b',
            }),
          ],
        },
        {
          type: 'row',
          fields: [
            colorPickerField({
              name: 'cardBackground',
              label: 'Card Background',
              defaultValue: '#ffffff',
            }),
            colorPickerField({
              name: 'cardForeground',
              label: 'Card Foreground',
              defaultValue: '#09090b',
            }),
          ],
        },
        {
          type: 'row',
          fields: [
            colorPickerField({
              name: 'popoverBackground',
              label: 'Popover Background',
              defaultValue: '#ffffff',
            }),
            colorPickerField({
              name: 'popoverForeground',
              label: 'Popover Foreground',
              defaultValue: '#09090b',
            }),
          ],
        },

        // Interactive Colors
        {
          type: 'row',
          fields: [
            colorPickerField({
              name: 'primaryColor',
              label: 'Primary',
              defaultValue: '#18181b',
              admin: {
                description: 'Primary color (buttons, links)',
              },
            }),
            colorPickerField({
              name: 'primaryForeground',
              label: 'Primary Foreground',
              defaultValue: '#fafafa',
            }),
          ],
        },
        {
          type: 'row',
          fields: [
            colorPickerField({
              name: 'secondaryColor',
              label: 'Secondary',
              defaultValue: '#f4f4f5',
            }),
            colorPickerField({
              name: 'secondaryForeground',
              label: 'Secondary Foreground',
              defaultValue: '#18181b',
            }),
          ],
        },
        {
          type: 'row',
          fields: [
            colorPickerField({
              name: 'accentColor',
              label: 'Accent',
              defaultValue: '#f4f4f5',
              admin: {
                description: 'Color for hover and focus effects',
              },
            }),
            colorPickerField({
              name: 'accentForeground',
              label: 'Accent Foreground',
              defaultValue: '#18181b',
            }),
          ],
        },
        {
          type: 'row',
          fields: [
            colorPickerField({
              name: 'mutedColor',
              label: 'Muted',
              defaultValue: '#f4f4f5',
            }),
            colorPickerField({
              name: 'mutedForeground',
              label: 'Muted Foreground',
              defaultValue: '#71717a',
            }),
          ],
        },

        // Status Colors
        {
          type: 'row',
          fields: [
            colorPickerField({
              name: 'destructiveColor',
              label: 'Destructive',
              defaultValue: '#ef4444',
              admin: {
                description: 'Color for destructive actions and errors',
              },
            }),
            colorPickerField({
              name: 'destructiveForeground',
              label: 'Destructive Foreground',
              defaultValue: '#fafafa',
            }),
          ],
        },
        {
          type: 'row',
          fields: [
            colorPickerField({
              name: 'successColor',
              label: 'Success',
              defaultValue: '#22c55e',
            }),
            colorPickerField({
              name: 'successForeground',
              label: 'Success Foreground',
              defaultValue: '#fafafa',
            }),
          ],
        },
        {
          type: 'row',
          fields: [
            colorPickerField({
              name: 'warningColor',
              label: 'Warning',
              defaultValue: '#f59e0b',
            }),
            colorPickerField({
              name: 'warningForeground',
              label: 'Warning Foreground',
              defaultValue: '#fafafa',
            }),
          ],
        },

        // Form Colors
        {
          type: 'row',
          fields: [
            colorPickerField({
              name: 'inputBorder',
              label: 'Input Border',
              defaultValue: '#e4e4e7',
              admin: {
                description: 'Border color for form fields',
              },
            }),
            colorPickerField({
              name: 'borderColor',
              label: 'Border',
              defaultValue: '#e4e4e7',
            }),
          ],
        },
        {
          type: 'row',
          fields: [
            colorPickerField({
              name: 'ringColor',
              label: 'Ring',
              defaultValue: '#18181b',
              admin: {
                description: 'Focus ring color',
              },
            }),
          ],
        },
      ],
    },

    // Typography
    {
      type: 'collapsible',
      label: 'Typography',
      fields: [
        {
          name: 'fontSans',
          type: 'select',
          label: 'Sans-Serif Font',
          options: fontOptions,
          defaultValue: 'Inter, sans-serif',
          admin: {
            description: 'Primary font for text',
          },
        },
        {
          name: 'fontSerif',
          type: 'select',
          label: 'Serif Font',
          options: serifFontOptions,
          defaultValue: 'Georgia, serif',
          admin: {
            description: 'Font for special headings',
          },
        },
        {
          name: 'fontMono',
          type: 'select',
          label: 'Monospace Font',
          options: monospaceFontOptions,
          defaultValue: 'Fira Code, monospace',
          admin: {
            description: 'Font for code and monospace text',
          },
        },
        {
          name: 'headingFont',
          type: 'select',
          label: 'Heading Font',
          options: [
            { label: 'Use Sans-Serif', value: 'sans' },
            { label: 'Use Serif', value: 'serif' },
            ...fontOptions.map(font => ({ ...font, label: `Custom: ${font.label}` })),
          ],
          defaultValue: 'sans',
          admin: {
            description: 'Specific font for headings',
          },
        },
      ],
    },

    // Design Tokens
    {
      type: 'collapsible',
      label: 'Design Tokens',
      fields: [
        {
          name: 'borderRadius',
          type: 'select',
          label: 'Border Radius',
          options: radiusOptions,
          defaultValue: '0.25rem',
          admin: {
            description: 'Default radius for rounded borders',
          },
        },
        {
          name: 'letterSpacing',
          type: 'text',
          label: 'Letter Spacing',
          defaultValue: '0.025em',
          admin: {
            description: 'Default spacing between letters',
          },
        },
      ],
    },

    // Custom CSS Variables
    {
      type: 'collapsible',
      label: 'Custom CSS Variables',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'customVariables',
          type: 'array',
          label: 'Custom Variables',
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Variable Name',
              admin: {
                placeholder: 'Ex: --custom-color',
              },
            },
            {
              name: 'lightValue',
              type: 'text',
              label: 'Light Mode Value',
              admin: {
                placeholder: 'Ex: 255 255 255',
              },
            },
            {
              name: 'darkValue',
              type: 'text',
              label: 'Dark Mode Value',
              admin: {
                placeholder: 'Ex: 0 0 0',
              },
            },
          ],
        },
      ],
    },
  ],
}

export default Theme