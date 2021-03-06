import { actions } from './actions'
import { InferActionsTypes } from 'store/configureStore'
import { IAuthedUser } from 'types/users'
import { IError } from 'types/common'

const initialState = {
  authedUser: null as IAuthedUser | null,
  authed: false,
  loading: false,
  error: null as IError | null,
}

export const reducer = (state = initialState, action: InferActionsTypes<typeof actions>) => {
  switch (action.type) {
    case '[AUTH] FETCH_AUTH_LOGIN': {
      return {
        ...state,
        loading: true,
        error: null,
      }
    }
    case '[AUTH] FETCH_AUTH_REGISTRATION': {
      return {
        ...state,
        loading: true,
        error: null,
      }
    }
    case '[AUTH] CHECK_AUTH_ACCESS_RIGHTS': {
      return {
        ...state,
        loading: true,
        error: null,
      }
    }
    case '[AUTH] FETCH_AUTH_SUCCESS': {
      return {
        ...state,
        authedUser: action.payload.user,
        authed: true,
        loading: false,
        error: null,
      }
    }
    case '[AUTH] FETCH_AUTH_ERROR': {
      return {
        ...state,
        authedUser: null,
        authed: false,
        loading: false,
        error: {
          message: action.payload.message,
        },
      }
    }
    case '[AUTH] DESTROY_AUTH_DATA': {
      return {
        ...state,
        authedUser: null,
        authed: false,
        error: null,
      }
    }
    default:
      return state
  }
}
