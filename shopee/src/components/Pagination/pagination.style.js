import styled from 'styled-components'

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 3rem auto 4rem;
`

const ButtonPaginate = styled.button`
  min-width: 4rem;
  height: 3rem;
  margin: 0 1.5rem;
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.4);
  border: none;
  background-color: transparent;
  border-radius: 2px;
`

export const ButtonIcon = styled(ButtonPaginate)`
  svg {
    width: 1.4rem;
    height: 1.4rem;
    fill: currentColor;
  }
`

export const ButtonNoOutline = styled(ButtonPaginate)`
  &.active {
    color: #fff;
    background-color: #ee4d2d;
    transition: background 0.2s ease;

    &:hover {
      background-color: #f05d40;
    }
  }
`
