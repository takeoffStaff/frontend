import React from 'react'
import { mixins } from 'styles'
import styled from 'styled-components'
import { Form, Input, Button } from 'antd'
import { FormItem } from 'styles/components'
import { usePresenter } from './usePresenter'

const LoginForm = () => {
  const { form, onSubmit, goToRegister, loading } = usePresenter()

  return (
    <Form form={form} name="login" onFinish={onSubmit} scrollToFirstError>
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
        <Button type="primary" htmlType="submit" loading={loading}>
          Войти
        </Button>
        <a href="/registration" onClick={goToRegister}>
          Регистрация
        </a>
      </Div>
    </Form>
  )
}

const Div = styled.div`
  ${mixins.displayFlex('row', 'flex-start', 'center')}

  > * {
    ${mixins.inlineSpace('10px')}
  }
`

export default LoginForm
