import { Method, Body, Headers } from 'types/api'
import { actions as authActions } from 'store/auth/actions'
import { notification } from 'antd'
import { replace } from 'helpers/redirect'

const PREFIX = '/api'

export async function http(url: string, method: Method = 'GET', body: Body = null, headers: Headers = {}) {
  const token = localStorage.getItem('token')

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const res = await fetch(`${PREFIX}${url}`, { method, body, headers })

  if (res.status === 401) {
    window.store.dispatch(authActions.destroyUserData())
    localStorage.removeItem('token')
    replace('/login')
    return
  }

  if (!res.ok) {
    const data = await res.json()

    notification.error({
      message: 'Ошибка!',
      description: data.message,
    })

    //eslint-disable-next-line
    throw { ...data }
  }

  const data = await res.json()

  return data
}
