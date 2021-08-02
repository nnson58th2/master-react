import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Button } from 'src/assets/styles/utils'
import BaseInputNumber from '../BaseInputNumber/BaseInputNumber'

export const CategoryTitleLink = styled(Link)`
  display: flex;
  align-items: center;

  font-size: 1.6rem;
  font-weight: 700;

  padding: 1.5rem 0;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.8);

  svg {
    width: 1.25rem;
    margin-right: 1rem;
    stroke: currentColor;
  }
`

export const CategoryList = styled.ul``

export const CategoryItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 12px 10px;

  a {
    color: rgba(0, 0, 0, 0.8);

    &.active {
      font-weight: 700;
      color: #ee4d2d;
    }
  }
`

export const CategoryTitle = styled.div`
  display: flex;
  align-items: center;

  font-weight: 700;
  font-size: 1.6rem;

  padding: 1.5rem 0;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.8);

  svg {
    width: 1.25rem;
    margin-right: 1rem;
    stroke: currentColor;
  }
`

export const FilterGroup = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
`

export const FilterGroupHeader = styled.div`
  margin-bottom: 1rem;
`

export const PriceRange = styled.div`
  margin: 1rem auto 2rem;
`

export const PriceRangeGroup = styled.div`
  display: flex;
  align-items: center;
`

export const PriceRangeInput = styled(BaseInputNumber)`
  width: 8rem;
  height: 3rem;

  padding: 1px 5px 2px;
  border-radius: 1px;
  border: 1px solid rgba(0, 0, 0, 0.26);
`

export const PriceRangeLine = styled.div`
  flex: 1;
  height: 1px;
  background: #bdbdbd;
  margin: 0 1rem;
`

export const PriceErrorMessage = styled.div`
  padding: 1rem 0;
  font-size: 1.2rem;
  text-align: center;
  color: #ff424f;
`

export const PriceRangeButton = styled(Button)`
  margin: 2rem 0 0;
  text-transform: uppercase;
  width: 100%;
`

export const RemoveFilterButton = styled(PriceRangeButton)``
