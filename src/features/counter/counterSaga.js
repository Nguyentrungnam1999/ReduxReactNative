import { takeEvery } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { incredement } from './counterSlice'

function* log(action: PayloadAction) {
  console.log('Log', action)
}
export default function* counterSaga() {
  console.log('counter saga')
  yield takeEvery('*', log)
}
