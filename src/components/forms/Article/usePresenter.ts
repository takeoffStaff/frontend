import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Form, notification } from 'antd'
import { IStore } from 'types/store'
import { useHistory } from 'react-router'

export const usePresenter = () => {
  const [form] = Form.useForm()
  
  const { goBack } = useHistory()

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

  return { form }
}
