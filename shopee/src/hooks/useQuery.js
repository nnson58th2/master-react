import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import qs from 'query-string'

export default function useQuery() {
  const location = useLocation()
  const querySting = useMemo(() => qs.parse(location.search), [location.search])

  return querySting
}
