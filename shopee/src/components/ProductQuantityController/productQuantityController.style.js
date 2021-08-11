import styled from 'styled-components'
import BaseInputNumber from '../BaseInputNumber/BaseInputNumber'

export const ProductQuantityController = styled.div`
  display: flex;
  align-items: center;
`

export const ProductQuantityButton = styled.button`
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  outline: none;
  width: 32px;
  height: 32px;
  cursor: pointer;

  svg {
    width: 10px;
    height: 10px;
  }

  &[disabled] {
    border-color: rgba(0, 0, 0, 0.09);
    color: #ccc;

    svg {
      fill: #ccc;
    }
  }
`

export const ProductQuantityInput = styled(BaseInputNumber)`
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-left: none;
  border-right: none;
  width: 50px;
  height: 32px;
  padding: 1px 2px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  cursor: text;

  &[disabled] {
    border-color: rgba(0, 0, 0, 0.09);
    color: #ccc;
  }
`
