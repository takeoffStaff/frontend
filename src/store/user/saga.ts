import { call, takeEvery, put } from 'redux-saga/effects'
import { actions } from './actions'
import { http } from 'api/http'
import { IUser } from 'types/users'

function* fetchUser(action: ReturnType<typeof actions.fetchUserRequest>) {
  try {
    const user: IUser = yield call(http, `/users/${action.payload.userId}`, 'GET')
    yield put(actions.fetchUserSuccess(user))
  } catch (error) {
    console.error(error)
    yield put(actions.fetchUserError(error))
  }
}

export function* userSaga() {
  yield takeEvery('[USER] FETCH_USER_REQUEST', fetchUser)
}
