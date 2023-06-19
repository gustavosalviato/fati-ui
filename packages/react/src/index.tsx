import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  border: 0,
  fontSize: 14,
  borderRadius: '$sm',
  backgroundColor: '$black',
  fontWeight: 'bold',
  color: '$white',
  cursor: 'pointer',
  fontFamily: '$default',

  variants: {
    size: {
      small: {
        padding: '$2 $4',
        fontSize: '$sm',
      },
      large: {
        padding: '$3 $6',
        fontSize: '$md',
      },
    },
  },

  defaultVariants: {
    size: 'large',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
