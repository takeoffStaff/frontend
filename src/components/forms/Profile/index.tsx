import React from 'react'
import { Input, Button, Form, Spin } from 'antd'
import { FormItem } from 'styles/components'
import { usePresenter } from './usePresenter'
import { UploadImage } from 'components'

const ProfileForm: React.FC = () => {
  const { form, onSubmit, loading, authedUser } = usePresenter()

  if (!authedUser) {
    return <Spin size="large" />
  }

  return (
    <Form form={form} name="profile" onFinish={onSubmit} scrollToFirstError>
      <UploadImage initialValue={authedUser.image} />
      <FormItem
        name="name"
        label="Никнейм"
        initialValue={authedUser.name}
        rules={[
          {
            required: true,
            message: 'Введите никнейм',
          },
        ]}
      >
        <Input autoComplete="new-password" />
      </FormItem>

      <FormItem
        name="email"
        label="E-mail"
        initialValue={authedUser.email}
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

      <FormItem name="phone" label="Номер телефона" initialValue={authedUser.phone}>
        <Input />
      </FormItem>

      <Button type="primary" htmlType="submit" loading={loading}>
        Сохранить изменения
      </Button>
    </Form>
  )
}

export default ProfileForm
