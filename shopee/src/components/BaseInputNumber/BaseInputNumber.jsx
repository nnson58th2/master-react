import React from 'react'
import PropTypes from 'prop-types'

export default function BaseInputNumber({ onChange, value, ...props }) {
  const handleChange = event => {
    const value = event.target.value

    if ((/^\d+$/.test(value) || value === '') && onChange) {
      onChange(value)
    }
  }

  return <input type="text" onChange={handleChange} value={value} {...props} />
}

BaseInputNumber.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
}
