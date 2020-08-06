import React, { SyntheticEvent } from 'react'
import { Form, Input, Button } from 'antd'
import styled from 'styled-components'
import { Store } from 'antd/lib/form/interface'
import { useHttp } from 'hooks/http.hook'
import { useAuth } from 'hooks/auth.hook'
import { useHistory } from 'react-router-dom'

interface IFormValues {
  email: string
  password: string
}

const LoginForm = () => {
  const [form] = Form.useForm()

  const history = useHistory()

  const { loading, request, error } = useHttp()
  const { login } = useAuth()

  // Store? WTF?? need to deal with this.
  const onFinish = (values: Store) => {
    try {
      request('/api/auth/login', 'POST', { ...values }).then((res) => {
        login(res)
      })
    } catch (e) {}
  }

  const goToRegister = (event: SyntheticEvent) => {
    event.preventDefault()
    history.push('/register')
  }

  return (
    <StyledForm form={form} name="login" onFinish={onFinish} scrollToFirstError>
      <FormItem
        name="email"
        label="E-mail"
        rules={[
          {
            required: true,
            message: 'Введите E-mail',
          },
        ]}
      >
        <Input autoComplete="new-password" />
      </FormItem>

      <FormItem
        name="password"
        label="Пароль"
        rules={[
          {
            required: true,
            message: 'Укажите пароль',
          },
        ]}
        hasFeedback
      >
        <Input.Password autoComplete="new-password" />
      </FormItem>

      <FormItem>
        <Button type="primary" htmlType="submit" loading={loading}>
          Войти
        </Button>
        <a href="/" onClick={goToRegister}>
          Регистрация
        </a>
      </FormItem>
    </StyledForm>
  )
}

const StyledForm = styled(Form)`
  width: 100%;
`

const FormItem = styled(Form.Item)`
  display: flex;
  flex-direction: column;

  .ant-form-item-label {
    text-align: left;
  }
`

export default LoginForm
