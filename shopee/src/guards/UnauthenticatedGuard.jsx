import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import { path } from 'src/constants/path'
import { useAuthenticated } from 'src/hooks/useAuthenticated'

export default function UnauthenticatedGuard({ children }) {
  const authenticated = useAuthenticated()

  if (authenticated) {
    return <Redirect to={path.home} />
  }

  return <Fragment>{children}</Fragment>
}

UnauthenticatedGuard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
}
