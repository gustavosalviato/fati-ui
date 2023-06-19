import type { Meta, StoryObj } from '@storybook/react'
import { Home, HomeProps } from '../components/Home'

export default {
  title: 'Home',
  component: Home,
} as Meta<HomeProps>

export const Default: StoryObj = {
  args: {
    title: 'Fati UI',
  },
}
