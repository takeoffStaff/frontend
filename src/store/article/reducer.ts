import { actions } from './actions'
import { InferActionsTypes } from 'store/configureStore'
import { IError } from 'types/common'
import { IArticle } from 'types/articles'

const initialState = {
  data: null as IArticle | null,
  loading: false,
  error: null as IError | null,
}

export const reducer = (state = initialState, action: InferActionsTypes<typeof actions>) => {
  switch (action.type) {
    case '[ARTICLE] FETCH_ARTICLE_REQUEST':
      return {
        ...state,
        loading: true,
      }
    case '[ARTICLE] FETCH_ARTICLE_SUCCESS': {
      return {
        ...state,
        data: action.payload.article,
        loading: false,
        error: null,
      }
    }
    case '[ARTICLE] FETCH_ARTICLE_ERROR':
      return {
        ...state,
        data: null,
        loading: false,
        error: {
          message: action.payload.message,
        },
      }
    case '[ARTICLE] DESTROY_ARTICLE': {
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
