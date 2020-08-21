import { useCallback } from 'react'
import { redirect } from 'helpers/redirect'
import { actions } from 'store/articles/actions'
import { useFetchDataList } from 'hooks/fetchDataList.hook'

export const usePresenter = () => {
  const { data, loading, error } = useFetchDataList({
    storeName: 'articles',
    fetchAction: actions.fetchArticlesList,
    destroyDataAction: actions.destroyArticlesList,
  })

  const goToCreateArticle = useCallback(() => {
    redirect('/articles/create')
  }, [])

  return {
    goToCreateArticle,
    data,
    loading,
    error,
    searchAction: actions.fetchArticlesList,
  }
}
