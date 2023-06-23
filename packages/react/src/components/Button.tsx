import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontWeight: '$medium',
  fontSize: '$md',
  fontFamily: '$default',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',
  transitionProperty: 'all',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '300ms',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.6,
  },

  variants: {
    variant: {
      primary: {
        color: '$gray900',
        backgroundColor: '$gray100',

        '&:not(:disabled):hover': {
          filter: 'brightness(65%)',
        },
      },

      secondary: {
        backgroundColor: '$black',
        border: '1px solid $gray800',
        color: '$gray100',

        '&:not(:disabled):hover': {
          borderColor: '$gray100',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },
      },
    },

    size: {
      small: {
        height: 36,
      },
      medium: {
        height: 48,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'small',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {}
