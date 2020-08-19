import React from 'react'
import { TextEditor } from 'components'
import { ArticleForm } from 'components/forms'
import { Button } from 'antd'
import { usePresenter } from './usePresenter'
import styled from 'styled-components'

const CreateArticlePage: React.FC = () => {

  const { onSubmit, contentIsReady } = usePresenter()

  return (
    <div>
      <ArticleForm onSubmit={onSubmit} />
      <TextEditor isEmpty />
      <SubmitButton type="primary" form="articleForm" disabled={!contentIsReady} htmlType="submit">Создать статью</SubmitButton>
    </div>
  )
}

const SubmitButton = styled(Button)`
  position: absolute !important;
  bottom: 50px;
  right: 50px;
  z-index: 1000;
`

export default CreateArticlePage
