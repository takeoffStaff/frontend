import React, { memo } from 'react'
import { usePresenter } from './usePresenter'
import { List, Button, Typography } from 'antd'
import { Pagination, Spinner, Search } from 'components'
import { IArticleBrief } from 'types/articles'
import { ArticleCard } from 'components/cards'
import styled from 'styled-components'
import { mixins } from 'styles'

const { Title } = Typography

const ArticlesListPage: React.FC = () => {
  const { data, loading, error, goToCreateArticle, searchAction } = usePresenter()

  return (
    <Page>
      <div className="top-bar">
        <Button onClick={goToCreateArticle} >
          Создать статью
        </Button>

        <Search
          placeholder="начните вводить название статьи"
          searchAction={searchAction}
        />

        <ItemList
          data={data as IArticleBrief[] | null}
          loading={loading}
        />
      </div>

      {data && !!data.length && <Pagination />}
    </Page>
  )
}

interface IListProps {
  data: IArticleBrief[] | null
  loading: boolean
}

const ItemList: React.FC<IListProps> = memo(({ data, loading }) => {

  if (loading) {
    return <Spinner />
  }

  if (data && !data.length) {
    return <Title level={3}>Ничего не найдено</Title>
  }

  return (
    <StyledList itemLayout="vertical" size="large">
      {data && data.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </StyledList>
  )
})

const StyledList = styled(List)`
  margin-top: 20px;
`

const Page = styled.div`
  .top-bar {
    > * {
      ${mixins.stackSpace('15px')}
    }
  }
`

export default ArticlesListPage
