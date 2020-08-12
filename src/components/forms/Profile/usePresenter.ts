import { useDispatch, useSelector } from 'react-redux'
import { IProfileFormValues } from 'types/forms'
import { Store } from 'antd/lib/form/interface'
import { actions } from 'store/user/actions'
import { IStore } from 'types/store'
import { Form } from 'antd'

export const usePresenter = () => {
  const { requestInProgress } = useSelector((store: IStore) => store.app)
  const user = useSelector((store: IStore) => store.user)
  const [form] = Form.useForm()
  const dispatch = useDispatch()

  const onSubmit = (values: Store) => {
    dispatch(actions.fetchUserUpdate(values as IProfileFormValues, user.id))
  }

  return { form, onSubmit, requestInProgress, user }
}
