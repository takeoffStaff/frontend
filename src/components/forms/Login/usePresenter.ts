import { useDispatch, useSelector } from 'react-redux'
import { SyntheticEvent, useCallback } from 'react'
import { Store } from 'antd/lib/form/interface'
import { ILoginFormValues } from 'types/forms'
import { actions } from 'store/auth/actions'
import { IStore } from 'types/store'
import { Form } from 'antd'
import { redirect } from 'helpers/redirect'

export const usePresenter = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()

  const { loading } = useSelector((store: IStore) => store.auth)

  const onSubmit = useCallback(
    (values: Store) => {
      dispatch(actions.fetchUserLogin(values as ILoginFormValues))
    },
    [dispatch]
  )

  const goToRegistration = useCallback((event: SyntheticEvent) => {
    event.preventDefault()
    redirect('/registration')
  }, [])

  return { form, onSubmit, goToRegistration, loading }
}
