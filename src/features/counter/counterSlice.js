import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incredement: state => {
      state.value += 1
    },
    decredement: state => {
      state.value -= 1
    },
    incredementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { incredement, decredement, incredementByAmount } =
  counterSlice.actions
export default counterSlice.reducer
