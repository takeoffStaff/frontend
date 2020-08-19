import { actions as appActions } from 'store/app/actions'
import { call, put, takeEvery } from 'redux-saga/effects'
import { actions } from './actions'
import { notification } from 'antd'
import { IAuthedUser } from 'types/users'
import { http } from 'api/http'
import { omit } from 'lodash'

function* fetchAuthLogin(action: ReturnType<typeof actions.fetchAuthLogin>) {
  try {
    const user: IAuthedUser = yield call(
      http,
      '/auth/login',
      'POST',
      JSON.stringify({ ...action.payload.loginValues }),
      { 'Content-Type': 'application/json' }
    )

    yield put(actions.fetchAuthSuccess(user))

    localStorage.setItem('token', user.token)
  } catch (error) {
    yield put(actions.destroyAuthData())
    yield put(actions.fetchAuthError(error.message))

    console.error(error.message)
    localStorage.removeItem('token')
  }
}

function* fetchAuthRegistration(action: ReturnType<typeof actions.fetchAuthRegistration>) {
  try {
    const user: IAuthedUser = yield call(
      http,
      '/auth/registration',
      'POST',
      JSON.stringify({ ...omit(action.payload.registrationValues, ['confirm']) }),
      { 'Content-Type': 'application/json' }
    )

    yield put(actions.fetchAuthSuccess(user))

    localStorage.setItem('token', user.token)
  } catch (error) {
    yield put(actions.destroyAuthData())
    yield put(actions.fetchAuthError(error.message))

    console.error(error.message)
    localStorage.removeItem('token')
  }
}

function* fetchAuthUpdate(action: ReturnType<typeof actions.fetchAuthUpdate>) {
  try {
    const { profileValues, userId } = action.payload

    const user: IAuthedUser = yield call(http, '/users', 'PATCH', JSON.stringify({ ...profileValues, id: userId }), {
      'Content-Type': 'application/json',
    })

    yield put(actions.fetchAuthSuccess(user))

    localStorage.setItem('token', user.token)

    notification.success({
      message: 'Успех!',
      description: 'Данные успешно изменены',
    })
  } catch (error) {
    yield put(actions.destroyAuthData())
    yield put(actions.fetchAuthError(error.message))

    console.error(error.message)
    localStorage.removeItem('token')
  }
}

function* checkAuthAccessRights() {
  try {
    yield put(appActions.setAppReady(false))

    const user: IAuthedUser = yield call(http, '/auth/check')

    yield put(actions.fetchAuthSuccess(user))
    yield localStorage.setItem('token', user.token)
    yield put(appActions.setAppReady(true))

    yield notification.success({
      message: 'Успех!',
      description: 'Вы успешно авторизованы',
    })
  } catch (error) {
    console.error(error.message)
    yield put(actions.fetchAuthError(error.message))
    yield put(actions.destroyAuthData())
    yield put(appActions.setAppReady(true))
  }
}

export function* authSaga() {
  yield takeEvery('[AUTH] FETCH_AUTH_LOGIN', fetchAuthLogin)
  yield takeEvery('[AUTH] FETCH_AUTH_UPDATE', fetchAuthUpdate)
  yield takeEvery('[AUTH] FETCH_AUTH_REGISTRATION', fetchAuthRegistration)
  yield takeEvery('[AUTH] CHECK_AUTH_ACCESS_RIGHTS', checkAuthAccessRights)
}
