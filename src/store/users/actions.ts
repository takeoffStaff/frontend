import { IUser } from 'types/users'

export const actions = {
  fetchUsersList: () =>
    ({
      type: '[USERS] FETCH_USERS_LIST',
    } as const),

  setUsersList: (users: IUser[]) =>
    ({
      type: '[USERS] SET_USERS_LIST',
      payload: { users }
    } as const),

  destroyUsersList: () =>
    ({
      type: '[USERS] DESTROY_USERS_LIST',
    } as const),
}