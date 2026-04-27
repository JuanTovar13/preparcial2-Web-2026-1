export type IncidentPriority = 'low' | 'medium' | 'high'

export type IncidentState = 'pending' | 'in-progress' | 'resolved'

export type Incident = {
  id: string | number
  title: string
  user: string
  category: string
  priority: string
  status: string
  date: string
  description: string
}

export type InitialIncident = {
  incidents: Incident[]
  incidentsFeature: Incident[]
}
