import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../store/store'
import { filterIncidents } from '../store/slices/incidentsSlice'
import { useState } from 'react'
import '../styles/IncidentFilter.css'

export const IncidentFilter = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [filter, setFilter] = useState('')

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter incidents by category/status/priority..."
      />
      <button onClick={() => dispatch(filterIncidents({ filter }))}>Filter</button>
    </div>
  )
}
