import { actions } from './actions'
import { InferActionsTypes } from 'store/configureStore'
import { IImage } from 'types/common'

const initialState = {
  id: null as string | null,
  email: null as string | null,
  name: null as string | null,
  phone: null as string | null,
  image: null as IImage | null,
  token: null as string | null,
  authed: false,
}

export const reducer = (state = initialState, action: InferActionsTypes<typeof actions>) => {
  switch (action.type) {
    case '[USER] SET_USER_DATA': {
      return {
        ...state,
        ...action.payload.user,
      }
    }
    case '[USER] DESTROY_USER_DATA': {
      return {
        ...state,
        ...initialState,
      }
    }
    default:
      return state
  }
}
