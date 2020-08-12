import { IImage } from './common'

export interface IMainUser {
  id: number
  email: string
  name: string
  phone: string
  image: IImage | null
  authed: boolean
  token: string
}

export interface IUser {
  id: number
  email: string
  name: string
  phone: string
  image: {
    url: string
  }
  createdAt: string
}
