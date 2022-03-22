// import { configureStore } from '@reduxjs/toolkit'
// import counterSlice from '../features/counter/counterSlice'

// export const store = configureStore({
//   reducer: {
//     counter: counterSlice,
//   },
// })
import { createStore } from 'redux'
import cartItemReducer from './cartItemReducer'

const store = createStore(cartItemReducer)

export default store
