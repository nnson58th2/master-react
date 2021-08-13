import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { path } from 'src/constants/path'
import { unauthorize } from 'src/pages/Auth/auth.slice'

export default function Authorization() {
  const status = useSelector(state => state.app.status)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (status === 401) {
      dispatch(unauthorize)
      history.push(path.login)
    }
  }, [status, dispatch, history])

  return null
}
