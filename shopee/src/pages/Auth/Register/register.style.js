import { Button } from 'src/assets/styles/utils'
import styled from 'styled-components'

export const StyledRegister = styled.div`
  background-color: rgb(238, 77, 45);
  min-width: max-content;
`

export const Container = styled.div`
  display: flex;
  padding: 8rem;
`

export const Banner = styled.div`
  flex: 0 0 60%;
  max-width: 60%;

  background-image: url('https://cf.shopee.vn/file/5569eb9dc7e09e2dbed5315b8f2ea8ba');
  background-size: cover;
  background-repeat: no-repeat;
`

export const FormWrapper = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  box-shadow: 0 3px 10px 0 rgb(0 0 0 / 14%);
  border-radius: 0%.4rem;
  background-color: #fff;
  padding: 3.5rem 3rem 5rem;
`

export const FormTitle = styled.div`
  font-size: 20px;
  margin-bottom: 3rem;
  color: #222;
  text-transform: capitalize;
`

export const Form = styled.form``

export const FormControl = styled.div`
  margin-bottom: 2.5rem;
`

export const FormButton = styled.div`
  margin-bottom: 3rem;
  ${Button} {
    width: 100%;
    height: 4rem;
    font-size: 1.4rem;
    text-transform: uppercase;
  }
`

export const FormFooter = styled.div`
  text-align: center;

  span {
    margin-right: 1rem;
    color: rgba(0, 0, 0, 0.26);
  }
`
