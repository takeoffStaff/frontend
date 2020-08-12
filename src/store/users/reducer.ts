import { actions } from './actions'
import { InferActionsTypes } from 'store/configureStore'
import { IUser } from 'types/users'

const initialState = {
  data: null as IUser[] | null
}

export const reducer = (state = initialState, action: InferActionsTypes<typeof actions>) => {
  switch (action.type) {
    case '[USERS] SET_USERS_LIST': {
      return {
        ...state,
        data: action.payload.users
      }
    }
    case '[USERS] DESTROY_USERS_LIST': {
      return {
        ...state,
        data: null,
      }
    }
    default:
      return state
  }
}
