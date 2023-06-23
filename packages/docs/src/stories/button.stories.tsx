import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@fati-ui/react'
import { ArrowRight } from 'lucide-react'
export default {
  title: 'Display/Button',
  component: Button,
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: <>Send</>,
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: <>Edit</>,
    variant: 'secondary',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    children: <>Cancel</>,
    variant: 'tertiary',
  },
}

export const Medium: StoryObj<ButtonProps> = {
  args: {
    children: <>Cancel</>,
    variant: 'secondary',
    size: 'medium',
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: <>Send</>,
    disabled: true,
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next Step <ArrowRight />{' '}
      </>
    ),
  },
}
