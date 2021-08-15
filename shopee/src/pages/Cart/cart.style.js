import { Link } from 'react-router-dom'
import { Button } from 'src/assets/styles/utils'
import styled from 'styled-components'

export const ProductHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  color: #888;
  margin-bottom: 12px;
  padding: 0 20px;
  height: 5.5rem;
  overflow: hidden;
  font-size: 1.4rem;
  text-transform: capitalize;
`

export const ProductHeaderCheckbox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 12px 0 20px;
  min-width: 58px;
`

export const ProductHeaderName = styled.div`
  color: rgba(0, 0, 0, 0.8);
  width: 45%;
`

export const ProductHeaderUnitPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
`

export const ProductHeaderQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
`

export const ProductHeaderTotalPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11%;
`

export const ProductHeaderAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12%;
`

export const ProductSection = styled.div`
  margin-bottom: 2.5rem;
  padding: 20px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
`

export const CartItem = styled.div`
  display: flex;
  margin-bottom: 2.2rem;
  padding: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 2px;
`

export const CartItemCheckbox = styled(ProductHeaderCheckbox)``
export const CartItemOverview = styled(ProductHeaderName)`
  display: flex;
`

export const CartItemOverviewImage = styled(Link)`
  flex-shrink: 0;
  width: 8rem;
  height: 8rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`

export const CartItemOverviewNameWrapper = styled.div`
  flex-grow: 1;
  padding: 0.5rem 2rem 0 1rem;
  overflow: hidden;
`

export const CartItemOverviewName = styled(Link)`
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin-bottom: 0.3125rem;
  color: rgba(0, 0, 0, 0.8);
  text-overflow: ellipsis;
  overflow: hidden;
`

export const CartItemUnitPrice = styled(ProductHeaderUnitPrice)`
  span:first-child {
    margin-right: 1rem;
    color: rgba(0, 0, 0, 0.54);
    text-decoration: line-through;
  }
`

export const CartItemQuantity = styled(ProductHeaderQuantity)``
export const CartItemTotalPrice = styled(ProductHeaderTotalPrice)`
  span {
    color: #ee4d2d;
    text-align: right;
  }
`

export const CartItemAction = styled(ProductHeaderAction)``
export const CartItemActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.1s ease;

  :hover {
    color: #ee4d2d;
  }
`

export const CartFooter = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  bottom: 0;
  padding: 1rem 0;
  background-color: #fff;
  border-radius: 3px;
  font-size: 1.6rem;
  z-index: 2;

  :before {
    content: '';
    position: absolute;
    top: -1rem;
    left: 0;
    height: 1rem;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.06));
  }
`

export const CartFooterCheckbox = styled(ProductHeaderCheckbox)``
export const CartFooterButton = styled.button`
  margin: 0 1rem;
  background: none;
  border: none;
  cursor: pointer;
`

export const CartFooterSpaceBetween = styled.div`
  flex-grow: 1;
`

export const CartFooterPrice = styled.div`
  margin-left: 1rem;
`

export const CartFooterPriceTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  div {
    :first-child {
      color: #222;
    }

    :last-child {
      margin-left: 5px;
      font-size: 2.4rem;
      color: #ee4d2d;
    }
  }
`

export const CartFooterPriceBot = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  div {
    :first-child {
      font-size: 1.4rem;
    }

    :last-child {
      padding-left: 2.4rem;
      color: #ee4d2d;
    }
  }
`

export const CartFooterCheckout = styled(Button)`
  width: 21rem;
  height: 4rem;
  margin: 0 2rem;
  font-size: 1.4rem;
  font-weight: 300;
  text-transform: capitalize;
`
