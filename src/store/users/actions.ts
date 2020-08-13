import { IUser } from 'types/users'

export const actions = {
  fetchUsersRequest: () =>
    ({
      type: '[USERS] FETCH_USERS_REQUEST',
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
