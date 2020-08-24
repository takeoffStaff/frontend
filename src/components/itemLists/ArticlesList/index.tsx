import React, { Fragment } from 'react'
import { List, Typography } from 'antd'
import { Spinner, Pagination, ErrorMessage } from 'components'
import { IArticleBrief } from 'types/articles'
import { ArticleCard } from 'components/cards'
import { useFetchDataList } from 'hooks/fetchDataList.hook'
import { actions } from 'store/articles/actions'

const { Title } = Typography

const ArticlesList: React.FC = () => {

  const { data, loading, error } = useFetchDataList<IArticleBrief[]>({
    storeName: 'articles',
    fetchAction: actions.fetchArticlesList,
    destroyDataAction: actions.destroyArticlesList,
  })

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorMessage message={error.message} />
  }

  if (data && !data.length) {
    return <Title level={3}>Ничего не найдено</Title>
  }

  return (
    <Fragment>

      <List itemLayout="vertical" size="large">
        {data && data.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </List>

      <Pagination />

    </Fragment>
  )
}

export default ArticlesList
