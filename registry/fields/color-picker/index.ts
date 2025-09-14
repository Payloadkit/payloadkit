import type { Field } from 'payload'

interface ColorPickerFieldOptions {
  name: string
  label: string
  defaultValue?: string
  required?: boolean
  admin?: {
    description?: string
    placeholder?: string
    condition?: (data: any, siblingData: any) => boolean
  }
}

export const colorPickerField = ({
  name,
  label,
  defaultValue = '#000000',
  required = false,
  admin = {}
}: ColorPickerFieldOptions): Field => {
  return {
    name,
    type: 'text',
    label,
    defaultValue,
    required,
    admin: {
      ...admin,
      components: {
        Field: './ColorPicker',
      },
    },
  }
}