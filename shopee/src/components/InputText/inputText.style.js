import styled from 'styled-components'

export const FormControl = styled.div`
  display: flex;
  height: 4rem;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.14);
  box-shadow: inset 0 2px rgb(0 0 0 /2%);
  border-color: ${({ focus }) => (focus ? 'rgba(0, 0, 0, 0.54)' : '')};
  border-radius: 2px;

  input {
    outline: none;
    border: 0;
    padding: 1.2rem;
    flex-grow: 1;
  }
`
