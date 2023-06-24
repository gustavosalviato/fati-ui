import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@fati-ui/react'

export default {
  title: 'Form/Text',
  component: Text,

  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolorum.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const CustomText: StoryObj<TextProps> = {
  args: {
    as: 'strong',
  },
}
