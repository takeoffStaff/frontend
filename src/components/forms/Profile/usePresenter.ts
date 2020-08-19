import { useDispatch, useSelector } from 'react-redux'
import { IProfileFormValues } from 'types/forms'
import { Store } from 'antd/lib/form/interface'
import { actions } from 'store/auth/actions'
import { IStore } from 'types/store'
import { Form } from 'antd'

export const usePresenter = () => {
  const { authedUser, loading } = useSelector((store: IStore) => store.auth)
  const [form] = Form.useForm()
  const dispatch = useDispatch()

  const onSubmit = (values: Store) => {
    if (!authedUser) {
      return
    }

    dispatch(actions.fetchAuthUpdate(values as IProfileFormValues, authedUser.id))
  }

  return { form, onSubmit, loading, authedUser }
}
