import { IRegistrationFormValues, IProfileFormValues, ILoginFormValues } from 'types/forms'
import { IAuthedUser } from 'types/users'

export const actions = {
  fetchUserLogin: (loginValues: ILoginFormValues) =>
    ({
      type: '[USER] FETCH_USER_LOGIN',
      payload: { loginValues },
    } as const),

  fetchUserRegistration: (registrationValues: IRegistrationFormValues) =>
    ({
      type: '[USER] FETCH_USER_REGISTRATION',
      payload: { registrationValues },
    } as const),

  fetchUserSuccess: (user: IAuthedUser) =>
    ({
      type: '[USER] FETCH_USER_SUCCESS',
      payload: { user },
    } as const),

  fetchUserError: (message: string) =>
    ({
      type: '[USER] FETCH_USER_ERROR',
      payload: { message },
    } as const),

  fetchUserUpdate: (profileValues: IProfileFormValues, userId: number) =>
    ({
      type: '[USER] FETCH_USER_UPDATE',
      payload: { profileValues, userId },
    } as const),

  destroyUserData: () =>
    ({
      type: '[USER] DESTROY_USER_DATA',
    } as const),

  checkUserAccessRights: () =>
    ({
      type: '[USER] CHECK_USER_ACCESS_RIGHTS',
    } as const),
}
