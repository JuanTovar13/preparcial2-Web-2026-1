import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Incident, InitialIncident } from '../../types/IncidentTypes'
import { initialIncidents } from '../../data/data'
const data = initialIncidents

const initialState: InitialIncident = {
  incidents: [...data],
  incidentsFeature: [],
}

const incidentSlice = createSlice({
  name: 'incidents',
  initialState,
  reducers: {
    addIncident(state, action: PayloadAction<{ incident: Incident }>) {
      state.incidents.push(action.payload.incident)
    },
    handleIncidentFeature(state, action: PayloadAction<{ incident: Incident }>) {
      const exists = state.incidentsFeature.some(
        (item) => item.id === action.payload.incident.id
      )
      if (exists) {
        state.incidentsFeature = state.incidentsFeature.filter(
          (item) => item.id !== action.payload.incident.id
        )
      } else {
        state.incidentsFeature.push(action.payload.incident)
      }
    },
    filterIncidents(state, action: PayloadAction<{ filter: string }>) {
      const { filter } = action.payload
      if (!filter) {
        state.incidents = [...data]
        state.incidentsFeature = state.incidentsFeature.filter((incident) =>
          data.some((item) => item.id === incident.id)
        )
        return
      }
      state.incidents = [...data].filter(
        (incident) =>
          incident.category.trim().toLowerCase() === filter ||
          incident.status.trim().toLowerCase() === filter ||
          incident.priority.trim().toLowerCase() === filter
      )
      state.incidentsFeature = state.incidentsFeature.filter((incident) => 
        incident.category.trim().toLowerCase() === filter ||
          incident.status.trim().toLowerCase() === filter ||
          incident.priority.trim().toLowerCase() === filter
)

    },
    handleChangePriority(
      state,
      action: PayloadAction<{ id: string | number; priority: string }>
    ) {
      const { id, priority } = action.payload
      const incident = state.incidents.find((item) => item.id === id)
      if (incident) incident.priority = priority
      const featured = state.incidentsFeature.find((item) => item.id === id)
      if (featured) featured.priority = priority
    },
    handleChangeStatus(
      state,
      action: PayloadAction<{ id: string | number; status: string }>
    ) {
      const { id, status } = action.payload
      const incident = state.incidents.find((item) => item.id === id)
      if (incident) incident.status = status
      const featured = state.incidentsFeature.find((item) => item.id === id)
      if (featured) featured.status = status
    },
  },
})

export const {
  addIncident,
  handleIncidentFeature,
  filterIncidents,
  handleChangePriority,
  handleChangeStatus
} = incidentSlice.actions
export default incidentSlice.reducer
