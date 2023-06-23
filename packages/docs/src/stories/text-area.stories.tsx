import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@fati-ui/react'
export default {
  title: 'Form/TextArea',
  component: TextArea,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Description</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Default: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'description',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'description',
    disabled: true,
  },
}
