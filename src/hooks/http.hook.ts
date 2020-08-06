import { useState, useCallback } from 'react'

type MethodType = 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT'
type BodyType = any
type HeadersType = any

interface IUserData {
  token: string
  userId: string
}

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(
    async (url: string, method: MethodType = 'GET', body: BodyType = null, headers: HeadersType = {}) => {
      setLoading(true)
      try {
        if (body) {
          body = JSON.stringify(body)
          headers['Content-Type'] = 'application/json'
        }

        const userData = JSON.parse(localStorage.getItem('userData') || '{}') as IUserData

        if (userData && userData.token) {
          headers['Authorization'] = `Bearer ${userData.token}`
        }

        const res = await fetch(url, { method, body, headers })

        const data = await res.json()

        if (!res.ok) {
          //eslint-disable-next-line
          throw { ...data }
        }

        setLoading(false)

        return data
      } catch (e) {
        setLoading(false)
        setError(e.message)
        throw e
      }
    },
    []
  )

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  return { loading, request, error, clearError }
}
