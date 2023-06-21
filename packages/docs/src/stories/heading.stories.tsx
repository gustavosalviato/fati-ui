import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@fati-ui/react'

export default {
  title: 'Form/Heading',
  component: Heading,

  args: {
    children: <Heading>Lorem ipsum</Heading>,
  },
  parameters: {
    docs: {
      descriptions: {
        story:
          'The title by default will always be `h2` but we can change it with `as` property',
      },
    },
  },
} as Meta<HeadingProps>

export const Default: StoryObj = {}
