import './App.css'
import { IncidentFilter } from './components/IncidentFilter'
import { IncidentsDashboard } from './pages/IncidentsDashboard'
import { IncidentsSummaryFeatured } from './pages/IncidentsSummaryFeatured'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <IncidentFilter />
      <Routes>
        <Route path="/" element={<IncidentsDashboard />} />
        <Route path="/summary-featured" element={<IncidentsSummaryFeatured />} />
      </Routes>
    </>
  )
}

export default App
