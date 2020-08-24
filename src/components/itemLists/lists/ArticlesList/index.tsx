import React from 'react'
import { List } from 'antd'
import { IArticleBrief } from 'types/articles'
import { ArticleCard } from 'components/cards'
import { useFetchDataList } from 'hooks/fetchDataList.hook'
import { actions } from 'store/articles/actions'
import { ListProvider } from 'components/itemLists'

const ArticlesList: React.FC = () => {

  const { data, loading, error } = useFetchDataList<IArticleBrief[]>({
    storeName: 'articles',
    fetchAction: actions.fetchArticlesList,
    destroyDataAction: actions.destroyArticlesList,
  })

  return (
    <ListProvider data={{ dataItems: data, loading, error }}>
      <List itemLayout="vertical" size="large">
        {data && data.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </List>
    </ListProvider>
  )
}

export default ArticlesList
