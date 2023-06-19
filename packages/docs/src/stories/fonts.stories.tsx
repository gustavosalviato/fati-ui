import type { Meta, StoryObj } from '@storybook/react'
import { TokensGrid } from '../components/TokensGrid'
import { fonts } from '@fati-ui/tokens'

export default {
  title: 'Tokens/Font family',
  component: TokensGrid,
} as Meta

export const Default: StoryObj = {
  args: {
    subtitle: 'Font families',
    tokens: fonts,
  },
}
