import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@fati-ui/react'

export default {
  title: 'Form/Box',
  component: Box,

  args: {
    children: <span style={{ color: 'white' }}>Box</span>,
  },
} as Meta<BoxProps>

export const Default: StoryObj = {}
