import type { Meta, StoryObj } from '@storybook/react'
import { TokensGrid } from '../components/TokensGrid'
import { fontSizes } from '@fati-ui/tokens'

export default {
  title: 'Tokens/Font sizes',
  component: TokensGrid,
} as Meta

export const Default: StoryObj = {
  args: {
    subtitle: 'Font sizes',
    tokens: fontSizes,
    hasRem: true,
  },
}
