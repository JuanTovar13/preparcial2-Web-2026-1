import { useSelector} from 'react-redux'
import type { RootState, } from '../store/store'
import { IncidentCard } from './IncidentCard'

export const FeaturedList = () => {
  const incidentsFeature = useSelector(
    (state: RootState) => state.incidents.incidentsFeature
  )

  return (
    <div>
      <h1>Featured Incidents</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {incidentsFeature.map((incidentFeat) => (
          <IncidentCard incident={incidentFeat} />
        ))}
      </ul>
    </div>
  )
}
