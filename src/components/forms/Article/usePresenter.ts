import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect } from 'react'
import { Store } from 'antd/lib/form/interface'
import { actions } from 'store/article/actions'
import { Form, notification } from 'antd'
import { IArticleFormValues } from 'types/forms'
import { IStore } from 'types/store'
import { useHistory } from 'react-router'

export const usePresenter = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const { goBack } = useHistory()

  const { blocks } = useSelector((store: IStore) => store.editor)
  const { authedUser } = useSelector((store: IStore) => store.auth)
  const currentArticle = useSelector((store: IStore) => store.article.data)

  useEffect(() => {
    if (!currentArticle) {
      return
    }

    if (authedUser && currentArticle.author.id !== authedUser.id) {
      notification.error({
        message: 'Ошибка!',
        description: 'Вы не можете редактировать эту статью',
      })

      goBack()
    }

    form.setFieldsValue({
      title: currentArticle.title,
      description: currentArticle.description,
    })
  }, [currentArticle, form, authedUser, goBack])

  const onSubmit = useCallback(
    (values: Store) => {
      if (!authedUser) {
        return
      }

      const article: any = {
        ...(values as IArticleFormValues),
        blocks: blocks,
        authorId: authedUser.id,
      }

      dispatch(actions.fetchArticleSave(article))
    },
    [dispatch, blocks, authedUser]
  )

  return { form, onSubmit }
}
