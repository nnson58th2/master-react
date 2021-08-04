import React from 'react'
import { Link } from 'react-router-dom'

import ProductRating from '../ProductRating/ProductRating'

import * as S from './productItem.style'

export default function ProductItem() {
  return (
    <S.Product>
      <Link to="">
        <S.ProductItem>
          <S.ProductItemImage>
            <img src="https://cf.shopee.vn/file/c4146c350bffa2f7e9843f5e95507c46_tn" alt="" />
          </S.ProductItemImage>
          <S.ProductItemInfo>
            <S.ProductItemTitle>
              Giá đỡ Laptop , MacBook , Ultrabook chất liệu bằng nhôm điều chỉnh độ cao , chống mỏi cổ, hỗ trợ tản
              nhiệt, dễ gấp gọn
            </S.ProductItemTitle>
            <S.ProductItemPrice>
              <S.ProductItemPriceOriginal>đ8.700</S.ProductItemPriceOriginal>
              <S.ProductItemPriceSale>đ6.700</S.ProductItemPriceSale>
            </S.ProductItemPrice>
            <S.ProductItemMeta>
              <ProductRating />
              <S.ProductItemSold>
                <span>1.7k</span>
                <span>Đã bán</span>
              </S.ProductItemSold>
            </S.ProductItemMeta>
          </S.ProductItemInfo>
        </S.ProductItem>
      </Link>
    </S.Product>
  )
}
