import { call, put, takeEvery } from 'redux-saga/effects'
import { actions } from './actions'
import { IUser } from 'types/users'
import { http } from 'api/http'

function* fetchUsersList() {
  try {
    const users: IUser[] = yield call(http, '/users', 'GET', null, { 'Content-Type': 'application/json' })

    yield put(actions.setUsersList(users))
  } catch (error) {
    console.error(error)
  }
}

export function* usersSaga() {
  yield takeEvery('[USERS] FETCH_USERS_LIST', fetchUsersList)
}
