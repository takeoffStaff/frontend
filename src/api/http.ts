import { Method, Body, Headers } from 'types/api'
import { actions } from 'store/app/actions'
import { notification } from 'antd'

const PREFIX = '/api'

export async function http(url: string, method: Method = 'GET', body: Body = null, headers: Headers = {}) {
  window.store.dispatch(actions.setLoading(true))

  if (body) {
    body = JSON.stringify(body)
    headers['Content-Type'] = 'application/json'
  }

  const token = localStorage.getItem('token')

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const res = await fetch(`${PREFIX}${url}`, { method, body, headers })

  if (!res.ok) {
    const data = await res.json()
    window.store.dispatch(actions.setLoading(false))

    notification.error({
      message: 'Ошибка!',
      description: data.message
    })

    //eslint-disable-next-line
    throw { ...data }
  }

  const data = await res.json()

  window.store.dispatch(actions.setLoading(false))

  return data
}
