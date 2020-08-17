import { useCallback } from 'react'
import { redirect } from 'helpers/redirect'
import { actions } from 'store/articles/actions'
import { useFetchData } from 'hooks/fetchData.hook'

export const usePresenter = () => {
  const { data, loading, error } = useFetchData({
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
  }
}
