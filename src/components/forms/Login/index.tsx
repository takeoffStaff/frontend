import React from 'react'
import { mixins } from 'styles'
import styled from 'styled-components'
import { Input, Button } from 'antd'
import { FormItem, AuthForm } from 'styles/components'
import { usePresenter } from './usePresenter'

const LoginForm: React.FC = () => {
  const { form, onSubmit, goToRegistration, requestInProgress } = usePresenter()

  return (
    <AuthForm form={form} name="login" onFinish={onSubmit} scrollToFirstError>
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

      <Div>
        <Button type="primary" htmlType="submit" loading={requestInProgress}>
          Войти
        </Button>
        <a href="/registration" onClick={goToRegistration}>
          Регистрация
        </a>
      </Div>
    </AuthForm>
  )
}

const Div = styled.div`
  ${mixins.displayFlex('row', 'flex-start', 'center')}

  > * {
    ${mixins.inlineSpace('10px')}
  }
`

export default LoginForm
