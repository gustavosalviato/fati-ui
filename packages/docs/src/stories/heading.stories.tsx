import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@fati-ui/react'

export default {
  title: 'Form/Heading',
  component: Heading,

  args: {
    children: 'Heading text',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Default: StoryObj = {}
