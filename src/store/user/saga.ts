import { call, put, takeEvery } from 'redux-saga/effects'
import { actions } from './actions'
import { http } from 'api/http'
import { omit } from 'lodash'

function* fetchUserLogin(action: ReturnType<typeof actions.fetchUserLogin>) {
  try {
    // TODO: нужно разобраться с any!
    const user = yield call(http as any, '/auth/login', 'POST', { ...action.payload.loginValues })
    yield put(actions.setUserData(user))
  } catch (error) {
    console.error(error.message)
    yield put(actions.destroyUserData())
  }
}

function* fetchUserRegistration(action: ReturnType<typeof actions.fetchUserRegistration>) {
  try {
    // TODO: нужно разобраться с any!
    const user = yield call(http as any, '/auth/registration', 'POST', {
      ...omit(action.payload.registrationValues, ['confirm']),
    })
    yield put(actions.setUserData(user))
  } catch (error) {
    console.error(error.message)
    yield put(actions.destroyUserData())
  }
}

export function* userSaga() {
  yield takeEvery('[USER] FETCH_USER_LOGIN', fetchUserLogin)
  yield takeEvery('[USER] FETCH_USER_REGISTRATION', fetchUserRegistration)
}
