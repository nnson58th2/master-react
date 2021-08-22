import { createSlice } from '@reduxjs/toolkit'

const app = createSlice({
  name: 'app',
  initialState: {
    loading: 0,
    status: 200
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.loading = state.loading + 1
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled') || action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = state.loading - 1
          state.status = action.payload.status
        }
      )
  }
})

const appReducer = app.reducer
export default appReducer
