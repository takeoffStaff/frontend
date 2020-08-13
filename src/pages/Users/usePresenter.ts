import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from 'store/users/actions'
import { IStore } from 'types/store'

export const usePresenter = () => {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((store: IStore) => store.users)

  useEffect(() => {
    dispatch(actions.fetchUsersRequest())
  }, [dispatch])

  return {
    data,
    loading,
    error,
  }
}
