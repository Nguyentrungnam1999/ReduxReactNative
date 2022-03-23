// import { createStore } from 'redux'
// import cartItemReducer from './cartItemReducer'

import { configureStore } from '@reduxjs/toolkit'
import cartItemReducer from '../redux/reducer'

// const store = createStore(cartItemReducer)

// export default storee
const store = configureStore({
  reducer: {
    cart: cartItemReducer,
  },
})

export default store
