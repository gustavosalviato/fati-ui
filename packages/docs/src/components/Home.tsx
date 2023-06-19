import { ComponentProps, ReactNode } from 'react'

export type HomeProps = ComponentProps<'div'> & {
  title: string
  subtitle?: string
  children?: ReactNode
}

export function Home({ title, subtitle, children }: HomeProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1
        style={{
          fontSize: '36px',
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'Roboto',
        }}
      >
        {title}
      </h1>

      <p style={{ fontFamily: 'Roboto', fontSize: '16', color: 'white' }}>
        {subtitle}
      </p>

      {children}
    </div>
  )
}
