import styled from 'styled-components'

export const Checkbox = styled.label`
  display: inline-block;
  position: relative;
  cursor: pointer;
  user-select: none;
`

export const CheckboxBox = styled.div`
  position: relative;
  width: 18px;
  height: 18px;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 2px;
  box-shadow: inset 0 2px 0 0 rgb(0 0 0 / 2%);
  text-align: center;
  user-select: none;

  :before {
    content: '';
    display: none;
    position: absolute;
    left: 3px;
    top: 3px;
    width: 9px;
    height: 5px;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    transform: rotate(-45deg);
  }

  :hover {
    box-shadow: inset 0 2px 1px 0 rgb(0 0 0 / 9%);
  }
`

export const CheckboxInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;

  :checked ~ ${CheckboxBox} {
    background-color: #ee4d2d;
    border-color: #ee4d2d;
  }

  :checked ~ ${CheckboxBox}:before {
    display: block;
  }
`
