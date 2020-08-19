import { IRegistrationFormValues, IProfileFormValues, ILoginFormValues } from 'types/forms'
import { IAuthedUser } from 'types/users'

export const actions = {
  fetchAuthLogin: (loginValues: ILoginFormValues) =>
    ({
      type: '[AUTH] FETCH_AUTH_LOGIN',
      payload: { loginValues },
    } as const),

  fetchAuthRegistration: (registrationValues: IRegistrationFormValues) =>
    ({
      type: '[AUTH] FETCH_AUTH_REGISTRATION',
      payload: { registrationValues },
    } as const),

  fetchAuthSuccess: (user: IAuthedUser) =>
    ({
      type: '[AUTH] FETCH_AUTH_SUCCESS',
      payload: { user },
    } as const),

  fetchAuthError: (message: string) =>
    ({
      type: '[AUTH] FETCH_AUTH_ERROR',
      payload: { message },
    } as const),

  fetchAuthUpdate: (profileValues: IProfileFormValues, userId: number) =>
    ({
      type: '[AUTH] FETCH_AUTH_UPDATE',
      payload: { profileValues, userId },
    } as const),

  destroyAuthData: () =>
    ({
      type: '[AUTH] DESTROY_AUTH_DATA',
    } as const),

  checkAuthAccessRights: () =>
    ({
      type: '[AUTH] CHECK_AUTH_ACCESS_RIGHTS',
    } as const),
}
