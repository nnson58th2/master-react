import { Link } from 'react-router-dom'
import { Button } from 'src/assets/styles/utils'
import styled from 'styled-components'

export const Header = styled.header`
  margin-bottom: 3rem;
  width: 100%;
  min-width: max-content;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
`

export const Navbar = styled.div`
  color: #fff;
  background: linear-gradient(-180deg, #f53d2d, #f63);
`

export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10rem;
`

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  flex-shrink: 1;
  padding-left: 1.8rem;

  svg {
    width: 13rem;
    height: auto;
    cursor: pointer;
    fill: #ee4d2d;
  }
`

export const LogoPageName = styled.div`
  margin-top: 1rem;
  margin-left: 1.5rem;
  padding-left: 1.5rem;
  border-left: 1px solid #ee4d2d;
  color: #ee4d2d;
  font-size: 2rem;
  line-height: 1.5;
  text-transform: capitalize;
`

export const Form = styled.form`
  display: flex;
  align-items: stretch;
  flex: 0 0 50%;
  border: 2px solid #ee4d2d;
  height: 3.6rem;
  border-radius: 2px;
  background-color: #fff;
`

export const Input = styled.input`
  flex-grow: 1;
  border: 0;
  padding: 0 1rem;
`

export const ButtonSearch = styled(Button)`
  width: 8rem;
  height: unset;
  border-radius: 0;
`
