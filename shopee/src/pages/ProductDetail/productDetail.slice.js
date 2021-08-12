import { createAsyncThunk } from '@reduxjs/toolkit'

import productApi from 'src/api/product.api'
import purchaseApi from 'src/api/purchase.api'

import { payloadCreator } from 'src/utils/helper'

export const getProductById = createAsyncThunk(
  'productDetail/getProductById',
  payloadCreator(productApi.getProductById)
)

export const addToCart = createAsyncThunk('productDetail/addToCart', payloadCreator(purchaseApi.addToCart))
