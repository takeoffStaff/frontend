import React, { useEffect } from 'react'
import { TextEditor } from 'components'
import { ArticleForm } from 'components/forms'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { actions } from 'store/article/actions'

const EditArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchArticleRequest(id))

    return () => {
      dispatch(actions.destroyArticle())
    }
  }, [dispatch, id])

  return (
    <div>
      <ArticleForm />
      <TextEditor />
    </div>
  )
}

export default EditArticlePage
