import { fork, all } from "redux-saga/effects";
import { ProductSagas } from './pages/product/sagas'

export default function* rootSaga() {
    yield all([fork(ProductSagas)])
}

