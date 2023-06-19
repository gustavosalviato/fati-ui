import './styles.css'

interface TokenProps {
  title: string
  subtitle: string
  tokens: Record<string, string>
  hasRem?: boolean
}

export function TokensGrid({ subtitle, tokens, hasRem = false }: TokenProps) {
  return (
    <div className="container">
      <h1>Fati UI</h1>
      <h3>{subtitle}</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            {hasRem && <th>Pixels</th>}
          </tr>
        </thead>
        <tbody>
          {Object.entries(tokens).map(([key, value]) => {
            return (
              <tr key={key}>
                <td key={value}>{key}</td>
                <td key={key}>{value}</td>
                {hasRem && (
                  <td key={key}>{Number(value.replace('rem', '')) * 16}</td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
