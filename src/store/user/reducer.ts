import { actions } from './actions'
import { InferActionsTypes } from 'store/configureStore'
import { IError } from 'types/common'
import { IUser } from 'types/users'

const initialState = {
  data: null as IUser | null,
  loading: false,
  error: null as IError | null,
}

export const reducer = (state = initialState, action: InferActionsTypes<typeof actions>) => {
  switch (action.type) {
    case '[USER] FETCH_USER_REQUEST':
      return {
        ...state,
        loading: true,
      }
    case '[USER] FETCH_USER_SUCCESS': {
      return {
        ...state,
        data: action.payload.user,
        loading: false,
        error: null,
      }
    }
    case '[USER] FETCH_USER_ERROR':
      return {
        ...state,
        data: null,
        loading: false,
        error: {
          message: action.payload.message,
        },
      }
    case '[USER] DESTROY_USER_DATA': {
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
