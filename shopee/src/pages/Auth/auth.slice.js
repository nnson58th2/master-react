import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import authApi from 'src/api/auth.api'
import userApi from 'src/api/user.api'
import LocalStorage from 'src/constants/localStorage'
import { payloadCreator } from 'src/utils/helper'

export const login = createAsyncThunk('auth/login', payloadCreator(authApi.login))
export const register = createAsyncThunk('auth/register', payloadCreator(authApi.register))
export const logout = createAsyncThunk('auth/logout', payloadCreator(authApi.logout))
export const updateMe = createAsyncThunk('auth/updateMe', payloadCreator(userApi.updateMe))

const handleAuthFulfilled = (state, action) => {
  const { user, access_token } = action.payload.data

  state.profile = user
  localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile))
  localStorage.setItem(LocalStorage.accessToken, access_token)
}

const handleUnauthorized = state => {
  state.profile = {}
  localStorage.removeItem(LocalStorage.accessToken)
  localStorage.removeItem(LocalStorage.user)
}

const auth = createSlice({
  name: 'auth',
  initialState: { profile: JSON.parse(localStorage.getItem(LocalStorage.user)) || {} },
  reducers: {
    unauthorize: handleUnauthorized
  },
  extraReducers: {
    [login.fulfilled]: handleAuthFulfilled,
    [register.fulfilled]: handleAuthFulfilled,
    [logout.fulfilled]: handleUnauthorized,
    [updateMe.fulfilled]: (state, action) => {
      state.profile = action.payload.data
      localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile))
    }
  }
})

const authReducer = auth.reducer
export default authReducer
export const unauthorize = auth.actions.unauthorize
