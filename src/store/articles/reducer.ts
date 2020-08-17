import { actions } from './actions'
import { InferActionsTypes } from 'store/configureStore'
import { IError } from 'types/common'
import { IArticleBrief } from 'types/articles'

const initialState = {
  data: null as IArticleBrief[] | null,
  loading: false,
  error: null as IError | null,
}

export const reducer = (state = initialState, action: InferActionsTypes<typeof actions>) => {
  switch (action.type) {
    case '[ARTICLES] FETCH_ARTICLES_LIST':
      return {
        ...state,
        loading: true,
      }
    case '[ARTICLES] FETCH_ARTILCES_LIST_SUCCESS': {
      return {
        ...state,
        data: action.payload.articles,
        loading: false,
        error: null,
      }
    }
    case '[ARTICLES] FETCH_ARTICLES_LIST_ERROR':
      return {
        ...state,
        data: null,
        loading: false,
        error: {
          message: action.payload.message,
        },
      }
    case '[ARTICLES] DESTROY_ARTICLES_LIST': {
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
