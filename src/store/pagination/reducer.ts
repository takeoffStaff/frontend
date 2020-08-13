import { actions } from './actions'
import { InferActionsTypes } from 'store/configureStore'

const initialState = {
  currentPage: 1,
  totalPages: undefined as undefined | number,
	totalItems: undefined as undefined | number,
	perPage: 10,
}

export const reducer = (state = initialState, action: InferActionsTypes<typeof actions>) => {
  switch (action.type) {
    case '[PAGINATION] SET_PAGINATION':
      return {
        ...state,
        ...action.payload.values,
      }
    case '[PAGINATION] SET_CURRENT_PAGE': {
      return {
        ...state,
        currentPage: action.payload.currentPage,
      }
    }
    default:
      return state
  }
}
