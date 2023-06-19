import type { Meta, StoryObj } from '@storybook/react'
import { TokensGrid } from '../components/TokensGrid'
import { fontWeights } from '@fati-ui/tokens'

export default {
  title: 'Tokens/Font weights',
  component: TokensGrid,
} as Meta

export const Default: StoryObj = {
  args: {
    subtitle: 'Font weights',
    tokens: fontWeights,
  },
}
