import React from 'react'
import { useParams, useRouteMatch } from 'react-router'

export default function ProfileInfo() {
  const params = useParams()
  const match = useRouteMatch

  return (
    <div>
      <h2>Profile Info</h2>
    </div>
  )
}
