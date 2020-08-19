import React, { memo } from 'react'
import { Input, Form } from 'antd'
import { FormItem } from 'styles/components'
import { usePresenter } from './usePresenter'
import { Store } from 'antd/lib/form/interface'

interface IProps {
  onSubmit: (values: Store) => void
}

const ArticleForm: React.FC<IProps> = memo(({ onSubmit }) => {
  const { form } = usePresenter()

  return (
    <Form form={form} name="articleForm" onFinish={onSubmit} scrollToFirstError>
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
    </Form>
  )
})

export default ArticleForm
