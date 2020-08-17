import { useDispatch, useSelector } from 'react-redux'
import { IRegistrationFormValues } from 'types/forms'
import { Store } from 'antd/lib/form/interface'
import { actions } from 'store/auth/actions'
import { IStore } from 'types/store'
import { SyntheticEvent, useCallback } from 'react'
import { Form } from 'antd'
import { redirect } from 'helpers/redirect'

export const usePresenter = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()

  const { loading } = useSelector((store: IStore) => store.auth)

  const onSubmit = (values: Store) => {
    dispatch(actions.fetchUserRegistration(values as IRegistrationFormValues))
  }

  const goToLogin = useCallback((event: SyntheticEvent) => {
		event.preventDefault()
    redirect('/login')
  }, [])

  return { form, onSubmit, loading, goToLogin }
}
