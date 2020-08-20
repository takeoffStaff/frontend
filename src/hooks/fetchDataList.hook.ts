import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from 'types/store'
import { IRequestParams } from 'types/api'

interface IProps {
  storeName: 'users' | 'articles'
  fetchAction: (requestParams: IRequestParams) => void
  destroyDataAction: () => void
}

export const useFetchDataList = ({ storeName, fetchAction, destroyDataAction }: IProps) => {
  const dispatch = useDispatch()

  const { currentPage } = useSelector((store: IStore) => store.pagination)
  const { data, loading, error } = useSelector((store: IStore) => store[storeName])

  useEffect(() => {
    dispatch(fetchAction({ page: currentPage, perPage: 5 }))

    return () => {
      dispatch(destroyDataAction())
    }
  }, [dispatch, currentPage, fetchAction, destroyDataAction])

  return {
    data,
    loading,
    error,
  }
}
