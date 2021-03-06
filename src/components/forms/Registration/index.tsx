import React from 'react'
import { mixins } from 'styles'
import styled from 'styled-components'
import { usePresenter } from './usePresenter'
import { Input, Tooltip, Button } from 'antd'
import { FormItem, AuthForm } from 'styles/components'
import { MaskedInput } from 'components'
import { QuestionCircleOutlined } from '@ant-design/icons'

const RegistrationForm: React.FC = () => {
  const { form, onSubmit, loading, goToLogin } = usePresenter()

  return (
    <AuthForm form={form} name="register" onFinish={onSubmit} scrollToFirstError>
      <FormItem
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'Некорректный E-mail',
          },
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
            min: 6,
            message: 'Минимальная длина пароля 6 символов',
            whitespace: true,
          },
          {
            required: true,
            message: 'Укажите пароль',
          },
        ]}
        hasFeedback
      >
        <Input.Password autoComplete="new-password" />
      </FormItem>

      <FormItem
        name="confirm"
        label="Подтвердите пароль"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Подтвердите пароль',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject('Пароли должны совпадать')
            },
          }),
        ]}
      >
        <Input.Password />
      </FormItem>

      <FormItem
        name="name"
        label={
          <span>
            Никнейм&nbsp;
            <Tooltip title="Как вы хотите что бы вас называли?">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          { required: true, message: 'Введите никнейм' },
          { max: 10, message: 'Максимальная длинна 10 символов' },
          { min: 3, message: 'Минимальная длинна 3 символа' }
        ]}
      >
        <Input />
      </FormItem>

      <FormItem name="phone" label="Номер телефона">
        <MaskedInput mask="+7 (999)-999-99-99" />
      </FormItem>

      <Div>
        <Button type="primary" htmlType="submit" loading={loading}>
          Регистрация
        </Button>
        <a href="/login" onClick={goToLogin}>
          На страницу авторизации
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

export default RegistrationForm
