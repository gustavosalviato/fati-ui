import { ComponentProps, ReactNode } from 'react'
import { Input, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  icon?: ReactNode
}

export function TextInput({ icon, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {icon && icon}
      <Input {...props} />
    </TextInputContainer>
  )
}
