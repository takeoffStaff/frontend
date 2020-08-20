import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Store } from 'antd/lib/form/interface'
import { actions } from 'store/article/actions'
import { IStore } from 'types/store'
import { IArticleFormValues } from 'types/forms'
import { ICreateArticleValues } from 'types/articles'

export const usePresenter = () => {
  const dispatch = useDispatch()

  const { blocks, contentIsReady } = useSelector((store: IStore) => store.editor)

  const onSubmit = useCallback(
    (values: Store) => {

      const article: ICreateArticleValues = {
        ...(values as IArticleFormValues),
        blocks: blocks,
      }

      dispatch(actions.fetchCreateArticle(article))
    },
    [dispatch, blocks]
  )

  return { onSubmit, contentIsReady }
}