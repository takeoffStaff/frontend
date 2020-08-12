import { actions as appActions } from 'store/app/actions'
import { call, put, takeEvery } from 'redux-saga/effects'
import { actions } from './actions'
import { notification } from 'antd'
import { IMainUser } from 'types/users'
import { http } from 'api/http'
import { omit } from 'lodash'

const onCatch = (error: any) => {
  console.error(error.message)
  localStorage.removeItem('token')
  put(actions.destroyUserData())
}

function* fetchUserLogin(action: ReturnType<typeof actions.fetchUserLogin>) {
  try {
    // TODO: нужно разобраться с any!
    const user: IMainUser = yield call(
      http as any,
      '/auth/login',
      'POST',
      JSON.stringify({ ...action.payload.loginValues }),
      { 'Content-Type': 'application/json' }
    )

    yield put(actions.setUserData(user))
    yield localStorage.setItem('token', user.token)
  } catch (error) {
    onCatch(error)
  }
}

function* fetchUserRegistration(action: ReturnType<typeof actions.fetchUserRegistration>) {
  try {
    // TODO: нужно разобраться с any!
    const user: IMainUser = yield call(
      http as any,
      '/auth/registration',
      'POST',
      JSON.stringify({ ...omit(action.payload.registrationValues, ['confirm'] )}),
      { 'Content-Type': 'application/json' }
    )

    yield put(actions.setUserData(user))
    yield localStorage.setItem('token', user.token)
  } catch (error) {
    onCatch(error)
  }
}

function* fetchUserUpdate(action: ReturnType<typeof actions.fetchUserUpdate>){
  try {
    const { profileValues, userId } = action.payload
    const user: IMainUser = yield call(
      http as any,
      '/users',
      'PATCH',
      JSON.stringify({ ...profileValues, id: userId }),
      { 'Content-Type': 'application/json' }
    )

    yield put(actions.setUserData(user))
    yield localStorage.setItem('token', user.token)

    yield notification.success({
      message: 'Успех!',
      description: 'Данные успешно изменены',
    })

  } catch (error) {
    onCatch(error)
  }
}

function* checkUserAccessRights() {
  try {
    yield put(appActions.setAppReady(false))

    const user: IMainUser = yield call(http, '/auth/check')

    yield put(actions.setUserData(user))
    yield localStorage.setItem('token', user.token)
    yield put(appActions.setAppReady(true))

    yield notification.success({
      message: 'Успех!',
      description: 'Вы успешно авторизованы',
    })

  } catch (error) {
    console.error(error.message)
    yield put(actions.destroyUserData())
    yield put(appActions.setAppReady(true))
  }
}

export function* userSaga() {
  yield takeEvery('[USER] FETCH_USER_LOGIN', fetchUserLogin)
  yield takeEvery('[USER] FETCH_USER_UPDATE', fetchUserUpdate)
  yield takeEvery('[USER] FETCH_USER_REGISTRATION', fetchUserRegistration)
  yield takeEvery('[USER] CHECK_USER_ACCESS_RIGHTS', checkUserAccessRights)
}
