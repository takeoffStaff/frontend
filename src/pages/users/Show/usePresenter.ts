import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from 'types/store'
import { actions } from 'store/user/actions'

export const usePresenter = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()

  const { data, loading, error } = useSelector((store: IStore) => store.user)

  useEffect(() => {
    dispatch(actions.fetchUserRequest(id))

    return () => {
      dispatch(actions.destroyUserData())
    }
  }, [dispatch, id])

  return { data, loading, error }
}