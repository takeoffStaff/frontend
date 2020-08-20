import React, { memo } from 'react'
import { usePresenter } from './usePresenter'
import { List, Button } from 'antd'
import { Pagination, Spinner } from 'components'
import { IArticleBrief } from 'types/articles'
import { ArticleCard } from 'components/cards'
import styled from 'styled-components'

const ArticlesListPage: React.FC = () => {
  const { data, loading, error, goToCreateArticle } = usePresenter()

  if (loading) {
    return <Spinner />
  }

  return (
    <React.Fragment>
      <div>
        <Button onClick={goToCreateArticle}>Создать статью</Button>
        {!loading && !error && data && <ItemList data={data as IArticleBrief[]} />}
      </div>

      {data && !!data.length && <Pagination />}
    </React.Fragment>
  )
}

const ItemList: React.FC<{ data: IArticleBrief[] }> = memo(({ data }) => (
  <StyledList itemLayout="vertical" size="large">
    {data.map((article) => (
      <ArticleCard key={article.id} article={article} />
    ))}
  </StyledList>
))

const StyledList = styled(List)`
  margin-top: 20px;
`

export default ArticlesListPage
