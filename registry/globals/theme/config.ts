import type { GlobalConfig } from 'payload'

export const Theme: GlobalConfig = {
  slug: 'theme',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'mode',
      type: 'select',
      label: 'Theme Mode',
      options: [
        { label: 'Auto (System)', value: 'auto' },
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
      ],
      defaultValue: 'auto',
      admin: {
        description: 'Choose the default color scheme for your site',
      },
    },
    {
      name: 'primaryColor',
      type: 'text',
      label: 'Primary Color',
      defaultValue: '#3b82f6',
      admin: {
        description: 'Primary brand color (hex format)',
        placeholder: '#3b82f6',
      },
      validate: (val) => {
        if (val && !val.match(/^#[0-9A-F]{6}$/i)) {
          return 'Please enter a valid hex color (e.g., #3b82f6)'
        }
        return true
      },
    },
    {
      name: 'secondaryColor',
      type: 'text',
      label: 'Secondary Color',
      defaultValue: '#64748b',
      admin: {
        description: 'Secondary brand color (hex format)',
        placeholder: '#64748b',
      },
      validate: (val) => {
        if (val && !val.match(/^#[0-9A-F]{6}$/i)) {
          return 'Please enter a valid hex color (e.g., #64748b)'
        }
        return true
      },
    },
    {
      name: 'accentColor',
      type: 'text',
      label: 'Accent Color',
      defaultValue: '#10b981',
      admin: {
        description: 'Accent color for highlights and CTAs (hex format)',
        placeholder: '#10b981',
      },
      validate: (val) => {
        if (val && !val.match(/^#[0-9A-F]{6}$/i)) {
          return 'Please enter a valid hex color (e.g., #10b981)'
        }
        return true
      },
    },
    {
      name: 'borderRadius',
      type: 'select',
      label: 'Border Radius',
      options: [
        { label: 'None (0px)', value: 'none' },
        { label: 'Small (4px)', value: 'sm' },
        { label: 'Medium (8px)', value: 'md' },
        { label: 'Large (12px)', value: 'lg' },
        { label: 'Extra Large (16px)', value: 'xl' },
      ],
      defaultValue: 'md',
      admin: {
        description: 'Global border radius for components',
      },
    },
    {
      name: 'fontFamily',
      type: 'select',
      label: 'Font Family',
      options: [
        { label: 'Inter (Sans-serif)', value: 'inter' },
        { label: 'Roboto (Sans-serif)', value: 'roboto' },
        { label: 'Open Sans (Sans-serif)', value: 'open-sans' },
        { label: 'Playfair Display (Serif)', value: 'playfair' },
        { label: 'Crimson Text (Serif)', value: 'crimson' },
        { label: 'JetBrains Mono (Monospace)', value: 'jetbrains' },
      ],
      defaultValue: 'inter',
      admin: {
        description: 'Primary font family for the site',
      },
    },
  ],
}