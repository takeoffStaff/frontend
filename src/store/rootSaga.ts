import { all } from 'redux-saga/effects'

import { userSaga } from 'store/user/saga'
import { usersSaga } from 'store/users/saga'

export function* rootSaga() {
  yield all([
    userSaga(),
    usersSaga()
  ])
}
