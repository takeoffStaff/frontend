import { call, put, takeEvery } from 'redux-saga/effects'
import { actions } from './actions'
import { actions as paginateActions } from 'store/pagination/actions'
import { IUser } from 'types/users'
import { http } from 'api/http'
import { IPaginate } from 'types/common'
import { omit } from 'lodash'

function* fetchUsersList(action: ReturnType<typeof actions.fetchUsersRequest>) {
  try {
		const { page, perPage } = action.payload.requestParams

    const users: IPaginate<IUser[]> = yield call(http, `/users?page=${page}&size=${perPage}`, 'GET', null, {
      'Content-Type': 'application/json',
    })

		yield put(paginateActions.setPagination(omit(users, ['data'])))
    yield put(actions.fetchUsersSuccess(users.data))
  } catch (error) {
    console.error(error)
    yield put(actions.fetchUsersError(error.message))
  }
}

export function* usersSaga() {
  yield takeEvery('[USERS] FETCH_USERS_REQUEST', fetchUsersList)
}
