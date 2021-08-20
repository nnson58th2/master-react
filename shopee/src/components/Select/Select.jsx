import React from 'react'
import PropTypes from 'prop-types'

import * as S from './select.style'

export default function Select({ option = [], title, titleValue = '', value = '', onChange, ...props }) {
  const handleChangeSelect = event => {
    const value = event.target.value
    onChange && onChange(value)
  }

  return (
    <S.Select value={value} onChange={handleChangeSelect} {...props}>
      <option disabled value={titleValue}>
        {title}
      </option>
      {option.map(({ name, value }, index) => (
        <option key={index} value={value}>
          {name}
        </option>
      ))}
    </S.Select>
  )
}

Select.propTypes = {
  option: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      titleValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  titleValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func
}
