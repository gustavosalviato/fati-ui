import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@fati-ui/react'

export default {
  title: 'Form/Box',
  component: Box,

  args: {
    children: (
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
        aspernatur.
      </Text>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Default: StoryObj = {}
