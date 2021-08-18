import React, { useEffect, useState } from 'react'
import { createNextState, unwrapResult } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import keyBy from 'lodash/keyBy'

import Checkbox from 'src/components/Checkbox/Checkbox'
import ProductQuantityController from 'src/components/ProductQuantityController/ProductQuantityController'
import { path } from 'src/constants/path'
import { formatMoney } from 'src/utils/helper'

import { buyPurChases, deletePurchases, getCartPurchases, updatePurchase } from './cart.slice'

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

  const checkedPurchases = localPurchases.filter(purchase => purchase.checked)
  const isCheckedAllPurchases = localPurchases.every(purchase => purchase.checked)
  const totalCheckedPurchases = checkedPurchases.length

  const totalCheckedPurchasesPrice = checkedPurchases.reduce((result, current) => {
    return result + current.product.price * current.buy_count
  }, 0)

  const totalCheckedPurchasesSavingPrice = checkedPurchases.reduce((result, current) => {
    return result + (current.product.price_before_discount - current.product.price) * current.buy_count
  }, 0)

  useEffect(() => {
    setLocalPurchases(localPurchases => {
      const localPurchasesObject = keyBy(localPurchases, '_id')

      return createNextState(purchases, draft => {
        draft.forEach(purchase => {
          purchase.disabled = false
          purchase.checked = Boolean(localPurchasesObject[purchase._id]?.checked)
        })
      })
    })
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

  const handleBuyPurchase = async () => {
    if (!checkedPurchases.length) {
      return
    }

    const payload = checkedPurchases.map(purchase => ({
      product_id: purchase.product._id,
      buy_count: purchase.buy_count
    }))

    await dispatch(buyPurChases(payload)).then(unwrapResult)
    await dispatch(getCartPurchases()).then(unwrapResult)

    toast.success('Đặt đơn hàng thành công', {
      position: 'top-center',
      autoClose: 2500
    })
  }

  const handleCheckBox = indexPurchase => value => {
    setLocalPurchases(localPurchases =>
      createNextState(localPurchases, draft => {
        draft[indexPurchase].checked = value
      })
    )
  }

  const handleCheckBoxAll = () => {
    setLocalPurchases(localPurchases =>
      createNextState(localPurchases, draft => {
        draft.forEach(purchase => {
          purchase.checked = !isCheckedAllPurchases
        })
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

  const handleRemovePurchases = (indexPurchase, isRemoveMany) => async () => {
    // indexPurchase = -1 is remove many purchase
    let purchaseIds = []

    if (isRemoveMany) {
      purchaseIds = checkedPurchases.map(purchase => purchase._id)
    } else {
      purchaseIds = [localPurchases[indexPurchase]._id]
    }

    await dispatch(deletePurchases(purchaseIds)).then(unwrapResult)
    await dispatch(getCartPurchases()).then(unwrapResult)

    toast.success('Xóa đơn hàng thành công', {
      position: 'top-center',
      autoClose: 2000
    })
  }

  return (
    <div className="container">
      <div>
        <S.ProductHeader>
          <S.ProductHeaderCheckbox>
            <Checkbox checked={isCheckedAllPurchases} onChange={handleCheckBoxAll} />
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
                <Checkbox checked={purChase.checked} onChange={handleCheckBox(index)} />
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
                <S.CartItemActionButton onClick={handleRemovePurchases(index, false)}>Xóa</S.CartItemActionButton>
              </S.CartItemAction>
            </S.CartItem>
          ))}
        </S.ProductSection>
      </div>

      <S.CartFooter>
        <S.CartFooterCheckbox>
          <Checkbox checked={isCheckedAllPurchases} onChange={handleCheckBoxAll} />
        </S.CartFooterCheckbox>
        <S.CartFooterButton onClick={handleCheckBoxAll}>Chọn tất cả ({localPurchases.length})</S.CartFooterButton>
        <S.CartFooterButton onClick={handleRemovePurchases(-1, true)}>Xóa</S.CartFooterButton>
        <S.CartFooterSpaceBetween />
        <S.CartFooterPrice>
          <S.CartFooterPriceTop>
            <div>Tổng thanh toán ({totalCheckedPurchases} sản phẩm)</div>
            <div>đ{formatMoney(totalCheckedPurchasesPrice)}</div>
          </S.CartFooterPriceTop>
          <S.CartFooterPriceBot>
            <div>Tiết kiệm</div>
            <div>đ{formatMoney(totalCheckedPurchasesSavingPrice)}</div>
          </S.CartFooterPriceBot>
        </S.CartFooterPrice>

        <S.CartFooterCheckout onClick={handleBuyPurchase}>Mua hàng</S.CartFooterCheckout>
      </S.CartFooter>
    </div>
  )
}
