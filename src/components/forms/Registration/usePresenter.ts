import { useDispatch, useSelector } from 'react-redux'
import { IRegistrationFormValues } from 'types/forms'
import { Store } from 'antd/lib/form/interface'
import { actions } from 'store/user/actions'
import { IStore } from 'types/store'
import { Form } from 'antd'

export const usePresenter = () => {
  const { loading } = useSelector((store: IStore) => store.app)
  const [form] = Form.useForm()
  const dispatch = useDispatch()

  const onSubmit = (values: Store) => {
    dispatch(actions.fetchUserRegistration(values as IRegistrationFormValues))
  }

  return { form, onSubmit, loading }
}
