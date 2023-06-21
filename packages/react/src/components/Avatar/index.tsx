import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { ComponentProps } from 'react'
import { User } from 'lucide-react'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar({ ...rest }: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...rest} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
