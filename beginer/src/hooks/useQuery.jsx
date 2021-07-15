import { useMemo } from 'react'
import qs from 'query-string'
import { useLocation } from 'react-router'

export default function useQuery() {
  const location = useLocation()
  const queryString = useMemo(() => qs.parse(location.search), [location.search])
  return queryString
}
