import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
}
export const cartItemReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      // state.list = action.payload
      state.list = [...state.list, action.payload]
    },
    REMOVE_FROM_CART: (state, action) => {
      state.list = state.list.filter(
        cartItem => cartItem.id !== action.payload.id,
      )
    },
  },
})

export const { ADD_TO_CART, REMOVE_FROM_CART } = cartItemReducer.actions
export default cartItemReducer.reducer
