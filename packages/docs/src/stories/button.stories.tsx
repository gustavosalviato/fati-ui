import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@fati-ui/react'

export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Button',
  },
} as Meta<ButtonProps>

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
  },
}
