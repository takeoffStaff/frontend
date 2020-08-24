import React from 'react'
import { usePresenter } from './usePresenter'
import { Button } from 'antd'
import { Search } from 'components'
import { ArticlesList } from 'components/itemLists'
import styled from 'styled-components'
import { mixins } from 'styles'

const ArticlesListPage: React.FC = () => {
  const { goToCreateArticle, searchAction } = usePresenter()

  return (
    <Page>
      <Button onClick={goToCreateArticle} >
        Создать статью
      </Button>

      <Search
        placeholder="начните вводить название статьи"
        searchAction={searchAction}
      />

      <ArticlesList />
    </Page>
  )
}

const Page = styled.div`
  > * {
    ${mixins.stackSpace('20px')}
  }
`

export default ArticlesListPage
