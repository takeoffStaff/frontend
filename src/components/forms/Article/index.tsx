import React from 'react'
import { Input, Button, Form } from 'antd'
import { FormItem } from 'styles/components'
import { usePresenter } from './usePresenter'

interface IProps {
  buttonLabel?: string
}

const ArticleForm: React.FC<IProps> = ({ buttonLabel }) => {
  const { form, onSubmit } = usePresenter()

  return (
    <Form form={form} name="createArticle" onFinish={onSubmit} scrollToFirstError>
      <FormItem
        name="title"
        label="Заголовок"
        rules={[
          {
            required: true,
            message: 'Введите заголовок',
          },
        ]}
      >
        <Input autoComplete="new-password" />
      </FormItem>

      <FormItem
        name="description"
        label="Описание"
        rules={[
          {
            required: true,
            message: 'Введите описание',
          },
        ]}
      >
        <Input.TextArea rows={5} />
      </FormItem>

      <Button type="primary" htmlType="submit">
        {buttonLabel}
      </Button>
    </Form>
  )
}

export default ArticleForm
