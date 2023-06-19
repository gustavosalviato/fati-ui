import type { Meta, StoryObj } from '@storybook/react'
import { TokensGrid } from '../components/TokensGrid'
import { space } from '@fati-ui/tokens'

export default {
  title: 'Tokens/Spacings',
  component: TokensGrid,
} as Meta

export const Default: StoryObj = {
  args: {
    subtitle: 'Spacings',
    tokens: space,
    hasRem: true,
  },
}
