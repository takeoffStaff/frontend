import { actions as appActions } from 'store/app/actions'
import { call, put, takeEvery } from 'redux-saga/effects'
import { actions } from './actions'
import { notification } from 'antd'
import { IAuthedUser } from 'types/users'
import { http } from 'api/http'
import { omit } from 'lodash'

function* fetchUserLogin(action: ReturnType<typeof actions.fetchUserLogin>) {
  try {
    const user: IAuthedUser = yield call(
      http,
      '/auth/login',
      'POST',
      JSON.stringify({ ...action.payload.loginValues }),
      { 'Content-Type': 'application/json' }
    )

    yield put(actions.fetchUserSuccess(user))

    localStorage.setItem('token', user.token)
  } catch (error) {
    yield put(actions.destroyUserData())
    yield put(actions.fetchUserError(error.message))

    console.error(error.message)
    localStorage.removeItem('token')
  }
}

function* fetchUserRegistration(action: ReturnType<typeof actions.fetchUserRegistration>) {
  try {
    const user: IAuthedUser = yield call(
      http,
      '/auth/registration',
      'POST',
      JSON.stringify({ ...omit(action.payload.registrationValues, ['confirm']) }),
      { 'Content-Type': 'application/json' }
    )

    yield put(actions.fetchUserSuccess(user))

    localStorage.setItem('token', user.token)
  } catch (error) {
    yield put(actions.destroyUserData())
    yield put(actions.fetchUserError(error.message))

    console.error(error.message)
    localStorage.removeItem('token')
  }
}

function* fetchUserUpdate(action: ReturnType<typeof actions.fetchUserUpdate>) {
  try {
    const { profileValues, userId } = action.payload

    const user: IAuthedUser = yield call(http, '/users', 'PATCH', JSON.stringify({ ...profileValues, id: userId }), {
      'Content-Type': 'application/json',
    })

    yield put(actions.fetchUserSuccess(user))

    localStorage.setItem('token', user.token)

    notification.success({
      message: 'Успех!',
      description: 'Данные успешно изменены',
    })
  } catch (error) {
    yield put(actions.destroyUserData())
    yield put(actions.fetchUserError(error.message))

    console.error(error.message)
    localStorage.removeItem('token')
  }
}

function* checkUserAccessRights() {
  try {
    yield put(appActions.setAppReady(false))

    const user: IAuthedUser = yield call(http, '/auth/check')

    yield put(actions.fetchUserSuccess(user))
    yield localStorage.setItem('token', user.token)
    yield put(appActions.setAppReady(true))

    yield notification.success({
      message: 'Успех!',
      description: 'Вы успешно авторизованы',
    })
  } catch (error) {
    console.error(error.message)
    yield put(actions.fetchUserError(error.message))
    yield put(actions.destroyUserData())
    yield put(appActions.setAppReady(true))
  }
}

export function* authSaga() {
  yield takeEvery('[USER] FETCH_USER_LOGIN', fetchUserLogin)
  yield takeEvery('[USER] FETCH_USER_UPDATE', fetchUserUpdate)
  yield takeEvery('[USER] FETCH_USER_REGISTRATION', fetchUserRegistration)
  yield takeEvery('[USER] CHECK_USER_ACCESS_RIGHTS', checkUserAccessRights)
}
