// import * as types from './counter.constants'
import { createAction, createReducer } from '@reduxjs/toolkit'

export const increase = createAction('counter/increase')
export const decrease = createAction('counter/decrease')

const initialState = {
  count: 0
}

// Những chức năng đơn giản, nếu trường hợp này thì như thế nào, nếu trường hợp kia thì như thế kia
// const counterReducer = createReducer(initialState, {
//   [increase]: (state, action) => {
//     state.count = state.count + 1
//   },
//   [decrease]: (state, action) => {
//     state.count = state.count - 1
//   }
// })

const counterReducer = createReducer(initialState, builder => {
  builder
    .addCase(increase, (state, action) => {
      state.count = state.count + 1
    })
    .addCase(decrease, (state, action) => {
      state.count = state.count - 1
    })
    .addMatcher(
      action => {
        return action.type.endsWith('crease')
      },
      (state, action) => {
        console.log('Handle here')
      }
    )
})

export default counterReducer
