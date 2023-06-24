import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@fati-ui/react'
import { ArrowRight } from 'lucide-react'
export default {
  title: 'Form/Button',
  component: Button,
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'medium',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },

    size: {
      options: ['small', 'medium'],
      control: {
        type: 'inline-radio',
      },
    },

    onClick: {
      action: 'clicked',
    },
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
