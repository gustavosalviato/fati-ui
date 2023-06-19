import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@fati-ui/react'

export default {
  title: 'Form/Text',
  component: Text,

  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolorum.',
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const CustomText: StoryObj<TextProps> = {
  args: {
    as: 'strong',
  },
}
