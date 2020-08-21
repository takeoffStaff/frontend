export type Method = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT'

export type Body =
  | string
  | Blob
  | ArrayBufferView
  | ArrayBuffer
  | FormData
  | URLSearchParams
  | ReadableStream<Uint8Array>
  | null

export type Headers = { [key: string]: string }

export interface IRequestParams {
  page?: number
  perPage?: number
  search?: {
    title: string
  }
}