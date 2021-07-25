import styled from 'styled-components'

export const FormControl = styled.div`
  display: flex;
  height: 4rem;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-color: ${({ focus }) => (focus ? 'rgba(0, 0, 0, 0.54)' : '')};
  box-shadow: inset 0 2px 0 rgb(0 0 0 /2%);
  border-radius: 2px;

  input {
    flex-grow: 1;
    outline: none;
    border: 0;
    padding: 1.2rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border: none;
    outline: none;
    padding: 0 1.5rem;
    background-color: transparent;

    svg {
      width: 2rem;
    }
  }
`
