import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  fontSize: '$sm',
  fontFamily: '$default',
  color: '$white',

  resize: 'none',
  minHeight: 120,
  fontWeight: '$medium',

  '&:focus': {
    outline: 0,
    borderColor: '$gray100',
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'
