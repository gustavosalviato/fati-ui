import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@fati-ui/react'

export default {
  title: 'Form/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/gustavosalviato.png',
    alt: 'Gusavo Henrique',
  },
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: '',
  },
}
