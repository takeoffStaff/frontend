import { all } from 'redux-saga/effects'

import { authSaga } from 'store/auth/saga'
import { usersSaga } from 'store/users/saga'

export function* rootSaga() {
  yield all([authSaga(), usersSaga()])
}
