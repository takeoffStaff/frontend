import { IUser } from 'types/users'
import { IRequestParams } from 'types/api'

export const actions = {
  fetchUsersRequest: (requestParams: IRequestParams) =>
    ({
			type: '[USERS] FETCH_USERS_REQUEST',
			payload: { requestParams }
    } as const),

  fetchUsersSuccess: (users: IUser[]) =>
    ({
      type: '[USERS] FETCH_USERS_SUCCESS',
      payload: { users },
    } as const),

  fetchUsersError: (message: string) =>
    ({
      type: '[USERS] FETCH_USERS_ERROR',
      payload: { message },
    } as const),

  destroyUsersList: () =>
    ({
      type: '[USERS] DESTROY_USERS_LIST',
    } as const),
}
