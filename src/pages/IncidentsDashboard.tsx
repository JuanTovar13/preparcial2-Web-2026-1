import { IncidentsList } from '../components/IncidentsList'
import { useNavigate } from 'react-router-dom'
import '../styles/IncidentsDashboard.css'
export const IncidentsDashboard = () => {
  const navigate = useNavigate()
  return (
    <div className="mainPageContainer">
    <button onClick={() => navigate('/summary-featured')}>
        View Summary and Featured Incidents
      </button>
      <h1>Incidents Dashboard</h1>

      <IncidentsList />
      
    </div>
  )
}
