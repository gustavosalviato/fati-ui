import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },

  '&:has(input:focus)': {
    borderColor: '$gray100',
  },

  '&:has(input:disabled)': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  svg: {
    width: '$4',
    height: '$4',
    color: '$gray100',
  },
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  border: 0,
  backgroundColor: 'transparent',
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placehholder': {
    color: '$gray800',
  },
})
