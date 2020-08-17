import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { Store } from 'antd/lib/form/interface'
import { actions } from 'store/articles/actions'
import { Form } from 'antd'
import { IArticleFormValues } from 'types/forms'
import { IArticleBrief } from 'types/articles'
import { IStore } from 'types/store'

export const usePresenter = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()

  const { blocks } = useSelector((store: IStore) => store.editor)
  const { authedUser } = useSelector((store: IStore) => store.auth)

  const onSubmit = useCallback(
    (values: Store) => {
      if (!authedUser) {
        return
      }

      const article: any = {
        ...(values as IArticleFormValues),
        blocks,
        authorId: authedUser.id,
      }

      dispatch(actions.fetchArticleSave(article))
    },
    [dispatch, blocks, authedUser]
  )

  return { form, onSubmit }
}
