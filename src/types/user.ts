export interface IUser {
  id: number
  email: string
  name: string
  phone: string
  image: {
    id: number
    url: string
  } | null
  authed: boolean
  token: string
}
