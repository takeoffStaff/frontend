import { History } from 'history'

let history: History | null = null

const setHistory = (h: History) => {
  history = h
}

const redirect = (path: string) => {
  return history && history.push(path)
}

const replace = (path: string) => {
  return history && history.replace(path)
}

export { redirect, replace, setHistory }
