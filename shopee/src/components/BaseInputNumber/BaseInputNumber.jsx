import React from 'react'
import PropTypes from 'prop-types'

export default function BaseInputNumber({ onBlur, onChange, value, ...props }) {
  const handleChange = event => {
    const value = event.target.value

    if ((/^\d+$/.test(value) || value === '') && onChange) {
      onChange(value)
    }
  }

  const handleBlur = event => {
    const value = event.target.value
    onBlur && onBlur(value)
  }

  return <input type="text" value={value} onBlur={handleBlur} onChange={handleChange} {...props} />
}

BaseInputNumber.propTypes = {
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
