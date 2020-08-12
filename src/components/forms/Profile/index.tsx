import React from 'react'
import { Input, Button, Form } from 'antd'
import { FormItem } from 'styles/components'
import { usePresenter } from './usePresenter'
import { UploadImage } from 'components'

const ProfileForm: React.FC = () => {
  const { form, onSubmit, requestInProgress, user } = usePresenter()

  return (
    <Form form={form} name="profile" onFinish={onSubmit} scrollToFirstError>
      <UploadImage initialValue={user.image} />
      <FormItem
        name="name"
        label="Никнейм"
        initialValue={user.name}
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
        initialValue={user.email}
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

      <FormItem name="phone" label="Номер телефона" initialValue={user.phone}>
        <Input />
      </FormItem>

      <Button type="primary" htmlType="submit" loading={requestInProgress}>
        Сохранить изменения
      </Button>
    </Form>
  )
}

export default ProfileForm
