import type { Meta, StoryObj } from '@storybook/react'
import { TokensGrid } from '../components/TokensGrid'
import { radii } from '@fati-ui/tokens'

export default {
  title: 'Tokens/Border Radius',
  component: TokensGrid,
} as Meta

export const Default: StoryObj = {
  args: {
    subtitle: 'Border radius',
    tokens: radii,
  },
}
