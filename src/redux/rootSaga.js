import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import counterSaga from '../features/counter/counterSaga'
function* helloSaga() {
  console.log('hello saga')
}

export default function* rootSaga() {
  console.log('root Saga')
  yield all([helloSaga(), counterSaga()])
}
