import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from 'types/store'
import { actions } from 'store/article/actions'

export const usePresenter = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()

  const { data, loading, error } = useSelector((store: IStore) => store.article)

  useEffect(() => {
    dispatch(actions.fetchArticleRequest(id))

    return () => {
      dispatch(actions.destroyArticle())
    }
  }, [dispatch, id])

  return { data, loading, error }
}