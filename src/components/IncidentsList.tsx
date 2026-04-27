import { useSelector } from 'react-redux'
import type { RootState} from '../store/store'
import { IncidentCard } from './IncidentCard'
import '../styles/IncidentsList.css'

export const IncidentsList = () => {
  const incidents = useSelector((state: RootState) => state.incidents.incidents)

  if (incidents.length === 0) {
    return <p>No incidents available.</p>
  }

  return (
    <ul style={{ listStyleType: 'none', padding: 0 }} className='list'>
      {incidents.map((incident) => (
            <IncidentCard incident={incident} />
      ))}
    </ul>
  )
}
