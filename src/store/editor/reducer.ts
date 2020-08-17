import { actions } from './actions'
import { InferActionsTypes } from 'store/configureStore'

const initialState = {
  blocks: null as any,
}

export const reducer = (state = initialState, action: InferActionsTypes<typeof actions>) => {
  switch (action.type) {
    case '[EDITOR] SET_EDITOR_BLOCKS':
      return {
        ...state,
        blocks: action.payload.blocks,
      }
    case '[EDITOR] DESTROY_EDITOR_BLOCKS':
      return {
        ...state,
        blocks: null,
      }
    default:
      return state
  }
}
