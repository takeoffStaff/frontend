import { InferActionsTypes } from 'store/configureStore'
import { actions } from './actions'

const initialState = {
  ready: true,
}

export const reducer = (state = initialState, action: InferActionsTypes<typeof actions>) => {
  switch (action.type) {
    case '[APP] SET_APP_READY': {
      return {
        ...state,
        ready: action.payload.status,
      }
    }
    default:
      return state
  }
}
