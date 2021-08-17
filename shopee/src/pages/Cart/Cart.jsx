import React, { useEffect, useState } from 'react'
import { createNextState, unwrapResult } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import Checkbox from 'src/components/Checkbox/Checkbox'
import ProductQuantityController from 'src/components/ProductQuantityController/ProductQuantityController'
import { path } from 'src/constants/path'
import { formatMoney } from 'src/utils/helper'

import { getCartPurchases, updatePurchase } from './cart.slice'

import * as S from './cart.style'

export default function Cart() {
  const purchases = useSelector(state => state.cart.purchases)

  const dispatch = useDispatch()

  const [localPurchases, setLocalPurchases] = useState(() =>
    createNextState(purchases, draft => {
      draft.forEach(purchase => {
        purchase.disabled = false
        purchase.checked = false
      })
    })
  )

  useEffect(() => {
    setLocalPurchases(
      createNextState(purchases, draft => {
        draft.forEach(purchase => (purchase.disabled = false))
      })
    )
  }, [purchases])

  const handleBlurQuantity = indexPurchase => async value => {
    const purchase = localPurchases[indexPurchase]

    setLocalPurchases(localPurchases =>
      createNextState(localPurchases, draft => {
        draft[indexPurchase].disabled = true
      })
    )

    await dispatch(
      updatePurchase({
        product_id: purchase.product._id,
        buy_count: value
      })
    ).then(unwrapResult)

    await dispatch(getCartPurchases()).then(unwrapResult)

    setLocalPurchases(localPurchases =>
      createNextState(localPurchases, draft => {
        draft[indexPurchase].disabled = false
      })
    )
  }

  const handleInputQuantity = indexPurchase => value => {
    const newLocalPurchases = createNextState(localPurchases, draft => {
      draft[indexPurchase].buy_count = value
    })

    setLocalPurchases(newLocalPurchases)
  }

  const handleIncreaseAndDecrease = indexPurchase => async value => {
    const purchase = localPurchases[indexPurchase]

    setLocalPurchases(localPurchases =>
      createNextState(localPurchases, draft => {
        draft[indexPurchase].disabled = true
        draft[indexPurchase].buy_count = value
      })
    )

    await dispatch(
      updatePurchase({
        product_id: purchase.product._id,
        buy_count: value
      })
    ).then(unwrapResult)

    await dispatch(getCartPurchases()).then(unwrapResult)

    setLocalPurchases(localPurchases =>
      createNextState(localPurchases, draft => {
        draft[indexPurchase].disabled = false
      })
    )
  }

  return (
    <div className="container">
      <div>
        <S.ProductHeader>
          <S.ProductHeaderCheckbox>
            <Checkbox />
          </S.ProductHeaderCheckbox>

          <S.ProductHeaderName>Sản phẩm</S.ProductHeaderName>
          <S.ProductHeaderUnitPrice>Đơn giá</S.ProductHeaderUnitPrice>
          <S.ProductHeaderQuantity>Số lượng</S.ProductHeaderQuantity>
          <S.ProductHeaderTotalPrice>Số tiền</S.ProductHeaderTotalPrice>
          <S.ProductHeaderAction>Thao tác</S.ProductHeaderAction>
        </S.ProductHeader>

        <S.ProductSection>
          {localPurchases.map((purChase, index) => (
            <S.CartItem key={purChase._id}>
              <S.CartItemCheckbox>
                <Checkbox />
              </S.CartItemCheckbox>

              <S.CartItemOverview>
                <S.CartItemOverviewImage to={path}>
                  <img src={purChase.product.image} alt={purChase.product.name} />
                </S.CartItemOverviewImage>
                <S.CartItemOverviewNameWrapper>
                  <S.CartItemOverviewName to={path}>{purChase.product.name}</S.CartItemOverviewName>
                </S.CartItemOverviewNameWrapper>
              </S.CartItemOverview>

              <S.CartItemUnitPrice>
                <span>đ{formatMoney(purChase.product.price_before_discount)}</span>
                <span>đ{formatMoney(purChase.product.price)}</span>
              </S.CartItemUnitPrice>

              <S.CartItemQuantity>
                <ProductQuantityController
                  maxValue={purChase.product.quantity}
                  value={purChase.buy_count}
                  disabled={purChase.disabled}
                  onBlur={handleBlurQuantity(index)}
                  onInput={handleInputQuantity(index)}
                  onIncrease={handleIncreaseAndDecrease(index)}
                  onDecrease={handleIncreaseAndDecrease(index)}
                />
              </S.CartItemQuantity>

              <S.CartItemTotalPrice>
                <span>đ{formatMoney(purChase.product.price * purChase.buy_count)}</span>
              </S.CartItemTotalPrice>

              <S.CartItemAction>
                <S.CartItemActionButton>Xóa</S.CartItemActionButton>
              </S.CartItemAction>
            </S.CartItem>
          ))}
        </S.ProductSection>
      </div>

      <S.CartFooter>
        <S.CartFooterCheckbox>
          <Checkbox />
        </S.CartFooterCheckbox>
        <S.CartFooterButton>Chọn tất cả ({localPurchases.length})</S.CartFooterButton>
        <S.CartFooterButton>Xóa</S.CartFooterButton>
        <S.CartFooterSpaceBetween />
        <S.CartFooterPrice>
          <S.CartFooterPriceTop>
            <div>Tổng thanh toán (1 sản phẩm)</div>
            <div>đ1000</div>
          </S.CartFooterPriceTop>
          <S.CartFooterPriceBot>
            <div>Tiết kiệm</div>
            <div>đ1000</div>
          </S.CartFooterPriceBot>
        </S.CartFooterPrice>

        <S.CartFooterCheckout>Mua hàng</S.CartFooterCheckout>
      </S.CartFooter>
    </div>
  )
}
