import { InferActionsTypes } from 'store/configureStore'
import { actions } from './actions'

const initialState = {
  loading: false,
}

export const reducer = (state = initialState, action: InferActionsTypes<typeof actions>) => {
  switch (action.type) {
    case '[APP] SET_LOADING': {
      return {
        ...state,
        loading: action.payload.status,
      }
    }
    default:
      return state
  }
}
