import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from 'store/auth/actions'
import { actions as appActions } from 'store/app/actions'

export const useCheckUserAccessRights = () => {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token) {
      dispatch(actions.checkAuthAccessRights())
    } else {
      dispatch(actions.destroyAuthData())
      dispatch(appActions.setAppReady(true))
    }
  }, [dispatch, token])
}
