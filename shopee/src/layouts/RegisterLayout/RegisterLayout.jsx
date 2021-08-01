import React from 'react'
import PropTypes from 'prop-types'

import Footer from 'src/components/Footer/Footer'
import HeaderRegister from 'src/components/HeaderRegister/HeaderRegister'

export default function RegisterLayout({ children, title }) {
  return (
    <div>
      <HeaderRegister title={title} />
      {children}
      <Footer />
    </div>
  )
}

RegisterLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
}
