import { IMainUser, IUser } from 'types/users'
import { IError } from './common'

export interface IStore {
  user: IMainUser
  users: {
    data: IUser[] | null
    loading: boolean
    error: IError | null
  }
  app: {
    requestInProgress: boolean
    ready: boolean
  }
  pagination: {
    currentPage: number
    totalPages: undefined | number
		totalItems: undefined | number
		perPage: number
  }
}
