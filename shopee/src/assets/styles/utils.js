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
`
