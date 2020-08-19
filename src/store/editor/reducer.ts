import { actions } from './actions'
import { InferActionsTypes } from 'store/configureStore'
import { BlocksType } from 'types/editor'

const initialState = {
  blocks: [] as BlocksType,
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
        blocks: [],
      }
    default:
      return state
  }
}
