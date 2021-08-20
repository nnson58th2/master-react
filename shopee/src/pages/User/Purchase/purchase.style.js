import { NavLink } from 'react-router-dom'
import { ButtonLink } from 'src/assets/styles/utils'
import styled from 'styled-components'

export const PurchaseTabs = styled.div`
  display: flex;
  margin-bottom: 1.2rem;
  background-color: #fff;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
`

export const PurchaseTabItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 1.7rem 0;
  font-size: 1.4rem;
  color: inherit;
  user-select: none;
  cursor: pointer;

  &.active {
    color: #ee4d2d;
    border-bottom: 2px solid #ee4d2d;
  }
`

export const PurchaseList = styled.div``
export const OrderCard = styled.div`
  margin-bottom: 1.5rem;
  padding: 2rem;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
`

export const OrderCardContent = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`

export const OrderCardDetail = styled.div`
  display: flex;
  flex-grow: 1;

  > img {
    width: 8rem;
    height: 8rem;
  }
`

export const OrderCardPrice = styled.div`
  width: 12rem;
  padding-left: 5px;
  text-align: right;
`

export const OrderContent = styled.div`
  margin-left: 1rem;
  flex-grow: 1;
`

export const OrderName = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`

export const OrderQuantity = styled.div``
export const OrderCardButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PurchaseButton = styled(ButtonLink)`
  height: 4rem;
`

export const TotalPrice = styled.div`
  display: flex;
  align-items: flex-end;
`

export const TotalPriceLabel = styled.div`
  margin-right: 1rem;
`

export const TotalPricePrice = styled.div`
  font-size: 3rem;
  color: #ee4d2d;
`
