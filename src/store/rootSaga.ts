import { all } from 'redux-saga/effects'

import { userSaga } from 'store/user/saga'

export function* rootSaga() {
  yield all([userSaga()])
}
