import { actions } from './actions'
import { InferActionsTypes } from 'store/configureStore'
import { IUser } from 'types/users'
import { IError } from 'types/common'

const initialState = {
  data: null as IUser[] | null,
  loading: false,
  error: null as IError | null,
}

export const reducer = (state = initialState, action: InferActionsTypes<typeof actions>) => {
  switch (action.type) {
    case '[USERS] FETCH_USERS_REQUEST':
      return {
        ...state,
        loading: true,
      }
    case '[USERS] FETCH_USERS_SUCCESS': {
      return {
        ...state,
        data: action.payload.users,
        loading: false,
        error: null,
      }
    }
    case '[USERS] FETCH_USERS_ERROR':
      return {
        ...state,
        data: null,
        loading: false,
        error: {
          message: action.payload.message,
        },
      }
    case '[USERS] DESTROY_USERS_LIST': {
      return {
        ...state,
        data: null,
        loading: false,
        error: null,
      }
    }
    default:
      return state
  }
}
