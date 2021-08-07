import React, { useEffect, useState } from 'react'
import { unwrapResult } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import FilterPanel from 'src/components/FilterPanel/FilterPanel'
import SearchItemResult from 'src/components/SearchItemResult/SearchItemResult'

import { getCategories, getProducts } from './home.slice'
import * as S from './home.style'

export default function Home() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState({})

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
      .then(unwrapResult)
      .then(res => {
        setCategories(res.data)
      })
  }, [dispatch])

  useEffect(() => {
    const _getProducts = async () => {
      const productData = await dispatch(getProducts())
      const productRes = unwrapResult(productData)

      setProducts(productRes.data)
    }

    _getProducts()
  }, [dispatch])

  return (
    <div>
      <S.Container className="container">
        <S.Side>
          <FilterPanel categories={categories} />
        </S.Side>
        <S.Main>
          <SearchItemResult products={products} />
        </S.Main>
      </S.Container>
    </div>
  )
}
