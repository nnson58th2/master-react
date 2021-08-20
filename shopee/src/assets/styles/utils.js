import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 3rem;
  padding: 1px 6px;
  background-color: #ee4d2d;
  border-radius: 2px;
  border: 0;
  color: #fff;
  transition: background 0.2s ease;

  &:hover {
    background-color: #f05d40;
  }

  ${({ light }) => {
    if (light) {
      return `
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, .09);
        box-shadow: 0 1px 1px 0 rbg(0 0 0 / 3%);
        color: #555;

        &:hover {
          background-color: rgba(0, 0, 0, .03)
        }
      `
    }
  }}
`

export const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 3rem;
  padding: 1px 6px;
  background-color: #ee4d2d;
  border-radius: 2px;
  border: 0;
  color: #fff;
  transition: background 0.2s ease;

  &:hover {
    background-color: #f05d40;
  }
`
