import { useDispatch, useSelector } from 'react-redux'
import { IRegistrationFormValues } from 'types/forms'
import { Store } from 'antd/lib/form/interface'
import { useHistory } from 'react-router-dom'
import { actions } from 'store/user/actions'
import { IStore } from 'types/store'
import { useCallback } from 'react'
import { Form } from 'antd'

export const usePresenter = () => {
  const { loading } = useSelector((store: IStore) => store.app)
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const history = useHistory()

  const onSubmit = (values: Store) => {
    dispatch(actions.fetchUserRegistration(values as IRegistrationFormValues))
  }

  const goToLogin = useCallback(() => {
    history.push('/login')
  }, [history])

  return { form, onSubmit, loading, goToLogin }
}
