import { useDispatch, useSelector } from 'react-redux'
import { SyntheticEvent, useCallback } from 'react'
import { Store } from 'antd/lib/form/interface'
import { ILoginFormValues } from 'types/forms'
import { useHistory } from 'react-router-dom'
import { actions } from 'store/auth/actions'
import { IStore } from 'types/store'
import { Form } from 'antd'

export const usePresenter = () => {
	const [form] = Form.useForm()
  const history = useHistory()
	const dispatch = useDispatch()

  const { loading } = useSelector((store: IStore) => store.auth)

  const onSubmit = useCallback(
    (values: Store) => {
      dispatch(actions.fetchUserLogin(values as ILoginFormValues))
    },
    [dispatch]
  )

  const goToRegistration = useCallback(
    (event: SyntheticEvent) => {
      event.preventDefault()
      history.push('/registration')
    },
    [history]
  )

  return { form, onSubmit, goToRegistration, loading }
}
