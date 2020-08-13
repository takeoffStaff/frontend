export interface IMenuClickEventHandler {
  key: React.Key
  keyPath: React.Key[]
  item: React.ReactInstance
  domEvent: React.MouseEvent<HTMLElement>
}

export interface IImage {
  id: number
  url: string
}

export interface IError {
  message: string
}
