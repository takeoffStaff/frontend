import { IAuthedUser, IUser } from 'types/users'
import { IError } from './common'
import { IArticleBrief, IArticle } from './articles'
import { BlocksType } from './editor'

export interface IStore {
  auth: {
    authedUser: IAuthedUser | null
    authed: boolean
    loading: boolean
    error: IError | null
  }
  users: {
    data: IUser[] | null
    loading: boolean
    error: IError | null
  }
  user: {
    data: IUser | null
    loading: boolean
    error: IError | null
  }
  app: {
    ready: boolean
  }
  editor: {
    blocks: BlocksType
  }
  articles: {
    data: IArticleBrief[] | null
    loading: boolean
    error: IError | null
  }
  article: {
    data: IArticle | null
    loading: boolean
    error: IError | null
  }
  pagination: {
    currentPage: number
    totalPages: undefined | number
    totalItems: undefined | number
    perPage: number
  }
}
