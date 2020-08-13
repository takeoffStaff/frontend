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

export interface IPaginationMeta {
  currentPage: number
  totalItems: number
	totalPages: number
	perPage: number
}

export interface IPaginate<T> extends IPaginationMeta {
  data: T
}
