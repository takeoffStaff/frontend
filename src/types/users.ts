import { IImage } from './common'

export interface IUser {
  id: number
  email: string
  name: string
  phone: string
  image: IImage | null
	createdAt: string
	articles: {
		title: string
		description: string
	}
}

export interface IAuthedUser extends IUser {
  token: string
}
