import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],

  user: {
    email: '',
    score: 0,
    address: '',
    id: '',
  },
  cats: {
    listcat: [],
    isLoading: false,
  },
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
    updateID: (state, action) => {
      state.user.id = action.payload
    },
    updateEmail: (state, action) => {
      state.user.address = action.payload
    },
    loadingCat: state => {
      state.cats.isLoading = true
    },
    getListCat: (state, action) => {
      state.cats.listcat = action.payload
      state.cats.isLoading = false
    },
    getCatFailure: state => {
      state.cats.isLoading = false
    },
  },
})

export const {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  loadingCat,
  getListCat,
  getCatFailure,
} = cartItemReducer.actions
export default cartItemReducer.reducer
