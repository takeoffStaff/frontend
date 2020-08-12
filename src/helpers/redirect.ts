import { history } from 'store/configureStore'

const redirect = (path: string) => {
  return history.push(path)
}

const replace = (path: string) => {
  return history.push(path)
}

export {
  redirect,
  replace,
}