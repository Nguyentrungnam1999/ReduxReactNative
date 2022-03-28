// import { createStore } from 'redux'
// import cartItemReducer from './cartItemReducer'

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'
import cartItemReducer from '../redux/reducer'
import createSagaMiddleware from '@redux-saga/core'
// import rootSaga from './rootSaga'
import catSaga from './rootSaga'

// const store = createStore(cartItemReducer)

// export default storee
const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: {
    cart: cartItemReducer,
    counter: counterSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(catSaga)

export default store
