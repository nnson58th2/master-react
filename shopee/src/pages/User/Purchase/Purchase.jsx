import React from 'react'

import * as S from './purchase.style'

export default function Purchase() {
  return (
    <div>
      <S.PurchaseTabs>
        <S.PurchaseTabItem to="">Tất cả</S.PurchaseTabItem>
        <S.PurchaseTabItem to="">Chờ xác nhận</S.PurchaseTabItem>
        <S.PurchaseTabItem to="">Chờ lấy hàng</S.PurchaseTabItem>
        <S.PurchaseTabItem to="">Đang giao</S.PurchaseTabItem>
        <S.PurchaseTabItem to="">Đã hủy</S.PurchaseTabItem>
      </S.PurchaseTabs>

      <S.PurchaseList>
        <S.OrderCard>
          <S.OrderCardContent>
            <S.OrderCardDetail>
              <img src="https://cf.shopee.vn/file/dac4b2e9ca0c82bacac25a275f17a758_tn" alt="Image purchase" />

              <S.OrderContent>
                <S.OrderName>
                  Cáp Lightning Aukey CB-BAL1 MFi Apple Nhựa Tổng Hợp Cao Cấp 1,2m - Hàng Chính Hãng
                </S.OrderName>
                <S.OrderQuantity>x 1</S.OrderQuantity>
              </S.OrderContent>
            </S.OrderCardDetail>
            <S.OrderCardPrice>đ10000</S.OrderCardPrice>
          </S.OrderCardContent>

          <S.OrderCardButtonsContainer>
            <S.PurchaseButton light={1} to="">
              Xem sản phẩm
            </S.PurchaseButton>
            <S.TotalPrice>
              <S.TotalPriceLabel>Tổng giá tiền:</S.TotalPriceLabel>
              <S.TotalPricePrice>đ20000</S.TotalPricePrice>
            </S.TotalPrice>
          </S.OrderCardButtonsContainer>
        </S.OrderCard>
      </S.PurchaseList>
    </div>
  )
}
