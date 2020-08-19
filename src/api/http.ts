import { Method, Body, Headers } from 'types/api'
import { actions as authActions } from 'store/auth/actions'
import { notification } from 'antd'
import { redirect } from 'helpers/redirect'

const PREFIX = '/api'

export async function http(url: string, method: Method = 'GET', body: Body = null, headers: Headers = {}) {
  const token = localStorage.getItem('token')

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const res = await fetch(`${PREFIX}${url}`, { method, body, headers })

  if (res.status === 401) {
    window.store.dispatch(authActions.destroyAuthData())
    localStorage.removeItem('token')
    redirect('/login')
    return
  }

  if (!res.ok) {
    const error = await res.json()

    notification.error({
      message: 'Ошибка!',
      description: error.message,
    })

    throw new Error(error.message)
  }

  return await res.json()
}
