import { Method, Body, Headers } from 'types/api'
import { actions } from 'store/app/actions'
import { actions as userActions } from 'store/user/actions'
import { notification } from 'antd'
import { replace } from 'helpers/redirect'

const PREFIX = '/api'

export async function http (url: string, method: Method = 'GET', body: Body = null, headers: Headers = {}) {
  window.store.dispatch(actions.setLoading(true))

  const token = localStorage.getItem('token')

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const res = await fetch(`${PREFIX}${url}`, { method, body, headers })

  if (res.status === 401) {
    window.store.dispatch(userActions.destroyUserData())
    localStorage.removeItem('token')
    replace('/login')
  }

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
