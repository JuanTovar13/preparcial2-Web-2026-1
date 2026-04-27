import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../store/store'
import type { Incident } from '../types/IncidentTypes'
import { handleChangePriority, handleChangeStatus } from '../store/slices/incidentsSlice'
import { FeatureButton } from './FeatureButton'
import '../styles/IncidentCard.css'

interface IncidentCardProps {
  incident: Incident
}

export const IncidentCard = ({ incident }: IncidentCardProps) => {
  const dispatch = useDispatch<AppDispatch>()


  return (
    <li className='card' key={incident.id}>
      <h2>{incident.title}</h2>
      <h4>{incident.user}</h4>
      <h4>{incident.category}</h4>
      <select
        value={incident.priority}
        onChange={(e) => dispatch(handleChangePriority({ id: incident.id, priority: e.target.value }))}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <select
        value={incident.status}
        onChange={(e) => dispatch(handleChangeStatus({ id: incident.id, status: e.target.value }))}
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="resolved">Resolved</option>
      </select>
      <p>{incident.description}</p>
      <small>{incident.date}</small>
      <br />
      <FeatureButton incident={incident} />
    </li>
  )
}
