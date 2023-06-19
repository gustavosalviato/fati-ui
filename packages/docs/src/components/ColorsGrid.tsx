import { Home } from '../components/Home'
import { colors } from '@fati-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return (
    <Home title="Fati UI">
      {Object.entries(colors).map(([key, value]) => {
        return (
          <div key={key} style={{ backgroundColor: value, padding: '2rem' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'monospace',
                color: getContrast(value, '#FFF') < 3.5 ? '#000' : '#FFF',
                fontSize: '16px',
              }}
            >
              <strong>${key}</strong>
              <span>{value}</span>
            </div>
          </div>
        )
      })}
    </Home>
  )
}
