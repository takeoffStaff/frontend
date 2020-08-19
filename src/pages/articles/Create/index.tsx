import React from 'react'
import { TextEditor } from 'components'
import { ArticleForm } from 'components/forms'
import { Button } from 'antd'
import { usePresenter } from './usePresenter'

const CreateArticlePage: React.FC = () => {

  const { onSubmit } = usePresenter()

  return (
    <div>
      <ArticleForm onSubmit={onSubmit} />
      <Button form="articleForm" htmlType="submit">Создать статью</Button>
      <TextEditor isEmpty />
    </div>
  )
}

export default CreateArticlePage
