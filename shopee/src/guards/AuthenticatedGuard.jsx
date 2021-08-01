import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import { path } from 'src/constants/path'
import { useAuthenticated } from 'src/hooks/useAuthenticated'

export default function AuthenticatedGuard({ children }) {
  const authenticated = useAuthenticated()

  if (!authenticated) {
    return <Redirect to={path.login} />
  }

  return <Fragment>{children}</Fragment>
}

AuthenticatedGuard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
}
