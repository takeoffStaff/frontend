import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Store } from 'antd/lib/form/interface'
import { actions } from 'store/article/actions'
import { IStore } from 'types/store'
import { IArticleFormValues } from 'types/forms'
import { useParams } from 'react-router'
import { omit } from 'lodash'
import { IUpdateArticleValues } from 'types/articles'

export const usePresenter = () => {
  const dispatch = useDispatch()
  const { id } = useParams<{ id: string }>()

  const { blocks, contentIsReady } = useSelector((store: IStore) => store.editor)
  const editedArticle = useSelector((store: IStore) => store.article)
  const { authedUser } = useSelector((store: IStore) => store.auth)

  useEffect(() => {
    dispatch(actions.fetchArticleRequest(id))

    return () => {
      dispatch(actions.destroyArticle())
    }
  }, [dispatch, id])

  const onSubmit = useCallback(
    (values: Store) => {
      if (!authedUser) { return }

      const article: IUpdateArticleValues = {
        ...omit(editedArticle.data, 'author'),
        ...(values as IArticleFormValues),
        blocks: blocks,
        authorId: authedUser.id,
      }

      dispatch(actions.fetchUpdateArticle(article))
    },
    [dispatch, blocks, editedArticle.data, authedUser]
  )

  const onDeleteArticle = useCallback(() => {
    if (!editedArticle.data) { return }

    dispatch(actions.fetchDeleteArticle(editedArticle.data.id))
  }, [dispatch, editedArticle.data])

  return { onSubmit, onDeleteArticle, contentIsReady }
}