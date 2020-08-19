import { IUser } from 'types/users'

export const actions = {
  fetchUserRequest: (userId: string) => ({
    type: '[USER] FETCH_USER_REQUEST',
    payload: { userId },
  }) as const,

  fetchUserSuccess: (user: IUser) => ({
    type: '[USER] FETCH_USER_SUCCESS',
    payload: { user },
  }) as const,

  fetchUserError: (message: string) => ({
    type: '[USER] FETCH_USER_ERROR',
    payload: { message },
  }) as const,

  destroyUserData: () => ({
    type: '[USER] DESTROY_USER_DATA',
  }) as const,
}
