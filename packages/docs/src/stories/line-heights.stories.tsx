import type { Meta, StoryObj } from '@storybook/react'
import { TokensGrid } from '../components/TokensGrid'
import { lineHeights } from '@fati-ui/tokens'

export default {
  title: 'Tokens/Line Height',
  component: TokensGrid,
} as Meta

export const Default: StoryObj = {
  args: {
    subtitle: 'Line Heights',
    tokens: lineHeights,
  },
}
