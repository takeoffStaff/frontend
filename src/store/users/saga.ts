import { call, put, takeEvery } from 'redux-saga/effects'
import { actions } from './actions'
import { actions as paginateActions } from 'store/pagination/actions'
import { IUser } from 'types/users'
import { http } from 'api/http'
import { IPaginate } from 'types/common'
import { omit } from 'lodash'

function* fetchUsersList(action: ReturnType<typeof actions.fetchUsersListRequest>) {
  try {
		const { page, perPage } = action.payload.requestParams

    const users: IPaginate<IUser[]> = yield call(http, `/users?page=${page}&size=${perPage}`, 'GET')

		yield put(paginateActions.setPagination(omit(users, ['data'])))
    yield put(actions.fetchUsersListSuccess(users.data))
  } catch (error) {
    console.error(error)
    yield put(actions.fetchUsersListError(error.message))
  }
}

export function* usersSaga() {
  yield takeEvery('[USERS] FETCH_USERS_REQUEST', fetchUsersList)
}
