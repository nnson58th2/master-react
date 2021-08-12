import React from 'react'
import PropTypes from 'prop-types'

import * as S from './productQuantityController.style'

export default function ProductQuantityController({ value, maxValue, onChange }) {
  const handleChangeProductQuantity = value => {
    let _value = Number(value)

    if (_value > maxValue) {
      _value = maxValue
    }

    if (_value < 1) {
      _value = 1
    }

    onChange && onChange(_value)
  }

  const increase = () => {
    let _value = value + 1

    if (_value > maxValue) {
      _value = maxValue
    }

    onChange && onChange(_value)
  }

  const decrease = () => {
    let _value = value - 1

    if (_value < 1) {
      _value = 1
    }

    onChange && onChange(_value)
  }

  return (
    <S.ProductQuantityController>
      <S.ProductQuantityButton onClick={decrease}>
        <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x={0} y={0} className="shopee-svg-icon ">
          <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5" />
        </svg>
      </S.ProductQuantityButton>

      <S.ProductQuantityInput value={value} onChange={handleChangeProductQuantity} />

      <S.ProductQuantityButton onClick={increase}>
        <svg
          enableBackground="new 0 0 10 10"
          viewBox="0 0 10 10"
          x={0}
          y={0}
          className="shopee-svg-icon icon-plus-sign"
        >
          <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" />
        </svg>
      </S.ProductQuantityButton>
    </S.ProductQuantityController>
  )
}

ProductQuantityController.propTypes = {
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  onChange: PropTypes.func
}
