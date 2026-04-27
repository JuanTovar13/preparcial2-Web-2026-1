import { useDispatch } from 'react-redux'
import { handleIncidentFeature } from '../store/slices/incidentsSlice'
import type { Incident } from '../types/IncidentTypes'
import { useState } from 'react'
import '../styles/FeatureButton.css'

interface FeatureButtonProps {
  incident: Incident
}

export const FeatureButton = ({ incident }: FeatureButtonProps) => {
  const dispatch = useDispatch()
  const [isFeatured, setIsFeatured] = useState(false)
  const handleFeatureClick = () => {
    dispatch(handleIncidentFeature({ incident }))
    setIsFeatured(!isFeatured)
  }

  return (
    <button onClick={handleFeatureClick}>{isFeatured ? 'Unfeature' : 'Feature'}</button>
  )
}
