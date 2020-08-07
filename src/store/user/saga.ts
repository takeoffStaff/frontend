import { actions as appActions } from 'store/app/actions'
import { call, put, takeEvery } from 'redux-saga/effects'
import { actions } from './actions'
import { notification } from 'antd'
import { IUser } from 'types/user'
import { http } from 'api/http'
import { omit } from 'lodash'

function* fetchUserLogin(action: ReturnType<typeof actions.fetchUserLogin>) {
  try {
    // TODO: нужно разобраться с any!
    const user: IUser = yield call(http as any, '/auth/login', 'POST', { ...action.payload.loginValues })
    yield put(actions.setUserData(user))
    yield localStorage.setItem('token', user.token)
  } catch (error) {
    console.error(error.message)
    yield put(actions.destroyUserData())
  }
}

function* fetchUserRegistration(action: ReturnType<typeof actions.fetchUserRegistration>) {
  try {
    // TODO: нужно разобраться с any!
    const user: IUser = yield call(http as any, '/auth/registration', 'POST', {
      ...omit(action.payload.registrationValues, ['confirm']),
    })
    yield put(actions.setUserData(user))
    yield localStorage.setItem('token', user.token)
  } catch (error) {
    console.error(error.message)
    yield put(actions.destroyUserData())
  }
}

function* checkUserAccessRights() {
  try {
    yield put(appActions.setAppReady(false))

    const user: IUser = yield call(http, '/auth/check')
    
    yield put(actions.setUserData(user))
    yield localStorage.setItem('token', user.token)
    yield put(appActions.setAppReady(true))
  
    yield notification.success({
      message: 'Успех!',
      description: 'Вы успешно авторизованы',
    })
  } catch (error) {
    console.error(error.message)
    yield notification.error({
      message: 'Ошибка!',
      description: error.message,
    })
    yield put(actions.destroyUserData())
    yield put(appActions.setAppReady(true))
  }
}

export function* userSaga() {
  yield takeEvery('[USER] FETCH_USER_LOGIN', fetchUserLogin)
  yield takeEvery('[USER] FETCH_USER_REGISTRATION', fetchUserRegistration)
  yield takeEvery('[USER] CHECK_USER_ACCESS_RIGHTS', checkUserAccessRights)
}
