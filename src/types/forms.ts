export interface IRegistrationFormValues {
  email: string
  password: string
  confirm: string
  name: string
  phone?: string
}

export interface ILoginFormValues {
  email: string
  password: string
}

export interface IProfileFormValues {
  email: string
  name: string
  phone: string
  image: number
}
