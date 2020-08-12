import { IRegistrationFormValues, IProfileFormValues, ILoginFormValues } from 'types/forms'
import { IUser } from 'types/user'

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

  fetchUserUpdate: (profileValues: IProfileFormValues, userId: number) =>
    ({
      type: '[USER] FETCH_USER_UPDATE',
      payload: { profileValues, userId }
    } as const),

  setUserData: (user: IUser) =>
    ({
      type: '[USER] SET_USER_DATA',
      payload: { user },
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
