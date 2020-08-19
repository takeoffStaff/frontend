import React from 'react'
import { TextEditor } from 'components'
import { ArticleForm } from 'components/forms'
import { usePresenter } from './usePresenter'
import { Button } from 'antd'
import styled from 'styled-components'
import { mixins } from 'styles'

const EditArticlePage: React.FC = () => {

  const { onSubmit, onDeleteArticle } = usePresenter()

  return (
    <Page>
      <ArticleForm onSubmit={onSubmit} />
      <TextEditor />
      <div className="buttons-group">
        <Button form="articleForm" htmlType="submit">Сохранить изменения</Button>
        <Button danger onClick={onDeleteArticle}>Удалить статью</Button>
      </div>
    </Page>
  )
}

const Page = styled.div`
  .buttons-group {
    position: absolute;
    bottom: 50px;
    right: 50px;
    z-index: 1000;

    > * {
      ${mixins.inlineSpace('10px')}
    }
  }
`

export default EditArticlePage
