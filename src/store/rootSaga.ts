import { all } from 'redux-saga/effects'

import { authSaga } from 'store/auth/saga'
import { usersSaga } from 'store/users/saga'
import { articlesSaga } from 'store/articles/saga'
import { articleSaga } from 'store/article/saga'

export function* rootSaga() {
  yield all([authSaga(), usersSaga(), articlesSaga(), articleSaga()])
}
