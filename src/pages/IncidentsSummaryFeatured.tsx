import { FeaturedList } from '../components/FeaturedList'
import { Summary } from '../components/Summary'
import { useNavigate } from 'react-router-dom'
import '../styles/IncidentsSummaryFeatured.css'

export const IncidentsSummaryFeatured = () => {
  const navigate = useNavigate()
  return (
    <div className="secondPageContainer">
        <button onClick={() => navigate('/')}>Back to Dashboard</button>
      <div className='containersContainer'>
      <div className="featuredContainer">
        <FeaturedList />
      </div>
      <div className="summaryContainer">
        <Summary />
      </div>
      </div>
      
    </div>
  )
}
