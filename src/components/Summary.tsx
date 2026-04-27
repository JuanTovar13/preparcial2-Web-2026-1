import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import '../styles/Summary.css'

export const Summary = () => {
  const incidents = useSelector((state: RootState) => state.incidents.incidents)
  const incidentsFeature = useSelector(
    (state: RootState) => state.incidents.incidentsFeature
  )

  return (
    <div>
      <h1>Summary</h1>
      <p>Total incidents: {incidents.length}</p>
      <p>Pendings: {incidents.filter((i) => i.status === 'pending').length}</p>
      <p>In progress: {incidents.filter((i) => i.status === 'in-progress').length}</p>
      <p>Resolved: {incidents.filter((i) => i.status === 'resolved').length}</p>
      <p>Featured: {incidentsFeature.length}</p>
      <p>High Priority: {incidents.filter((i) => i.priority === 'high').length}</p>
    </div>
  )
}
