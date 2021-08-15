import React from 'react'
import PropTypes from 'prop-types'

import Footer from 'src/components/Footer/Footer'
import HeaderCart from 'src/components/HeaderCart/HeaderCart'

export default function CartLayout({ children }) {
  return (
    <div>
      <HeaderCart />
      {children}
      <Footer />
    </div>
  )
}

CartLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
}
