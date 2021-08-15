import React from 'react'
import PropTypes from 'prop-types'

import * as S from './checkbox.style'

export default function Checkbox({ checked, onChange, ...props }) {
  const handleChangeCheckbox = event => {
    const _value = event.target.value

    onChange && onChange(_value)
  }

  return (
    <S.Checkbox>
      <S.CheckboxInput type="checkbox" checked={checked} onChange={handleChangeCheckbox} {...props} />
      <S.CheckboxBox />
    </S.Checkbox>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
}
