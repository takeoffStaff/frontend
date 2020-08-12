import { IMainUser } from 'types/users'

export interface IStore {
  user: IMainUser
  app: {
    requestInProgress: boolean
    ready: boolean
  }
}
