import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

export const useAuth = () => {
  const login = useCallback((token: string) => {
    localStorage.setItem('token', token)
    history.push('/dashboard')
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('token')
    history.push('/login')
  }, [])

  return { login, logout }
}
