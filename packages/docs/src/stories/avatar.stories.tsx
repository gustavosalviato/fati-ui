import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@fati-ui/react'

export default {
  title: 'Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/gustavosalviato.png',
    alt: 'Gustavo Henrique',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: '',
  },
}
