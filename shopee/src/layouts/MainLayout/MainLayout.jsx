import React from 'react'
import PropTypes from 'prop-types'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer/Footer'

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
}
