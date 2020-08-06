import React from 'react'
import { Form, Input, Tooltip, Button } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { Store } from 'antd/lib/form/interface'
import { useHttp } from 'hooks/http.hook'

interface IFormValues {
  email: string
  password: string
  confirm: string
  name: string
  phone?: string
}

const RegistrationForm = () => {
  const [form] = Form.useForm()

  const { loading, request, error } = useHttp()

  // Store? WTF?? need to deal with this.
  const onFinish = (values: Store) => {
    request('/api/auth/register', 'POST', { ...values })
  }

  return (
    <StyledForm form={form} name="register" onFinish={onFinish} scrollToFirstError>
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
        rules={[{ required: true, message: 'Введите никнейм', whitespace: true }]}
      >
        <Input />
      </FormItem>

      <FormItem name="phone" label="Номер телефона">
        <Input />
      </FormItem>

      <FormItem>
        <Button type="primary" htmlType="submit" loading={loading}>
          Register
        </Button>
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

export default RegistrationForm
