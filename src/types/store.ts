import { IUser } from 'types/user'

export interface IStore {
  user: IUser
  app: {
    loading: boolean
  }
}
