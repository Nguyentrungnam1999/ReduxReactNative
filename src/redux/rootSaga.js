import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import counterSaga from '../features/counter/counterSaga'
import { getListCat, loadingCat } from './reducer'
// function* helloSaga() {
//   console.log('hello saga')
// }

// export default function* rootSaga() {
//   console.log('root Saga')
//   yield all([helloSaga(), counterSaga()])
// }
function* workGetCatsFetch() {
  const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'))
  const formattedCats = yield cats.json()
  // console.log(formattedCats)
  const formattedCatsShortened = formattedCats.slice(0, 10)
  yield put(getListCat(formattedCatsShortened))
}

function* catSaga() {
  yield takeEvery('cart/loadingCat', workGetCatsFetch)
}
export default catSaga
