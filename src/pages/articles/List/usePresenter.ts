import { useCallback } from 'react'
import { redirect } from 'helpers/redirect'
import { actions } from 'store/articles/actions'

export const usePresenter = () => {

  const goToCreateArticle = useCallback(() => {
    redirect('/articles/create')
  }, [])

  return {
    goToCreateArticle,
    searchAction: actions.fetchArticlesList,
  }
}
