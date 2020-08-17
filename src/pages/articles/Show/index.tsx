import React, { useEffect, lazy } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from 'store/article/actions'
import { IStore } from 'types/store'
import { Spinner } from 'components'
import styled from 'styled-components'

const ShowArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()

  const { data, loading, error } = useSelector((store: IStore) => store.article)

  useEffect(() => {
    dispatch(actions.fetchArticleRequest(id))

    return () => {
      dispatch(actions.destroyArticle())
    }
  }, [dispatch, id])

  if (loading) {
    return <Spinner />
  }

  if (!data) {
    return null
  }

  const { title, description } = data

  return (
    <Page>
      <h1>{title}</h1>
      <span>{description}</span>
      <div className="content">
        {data.blocks.map((block, index) => {
          const Block = lazy(() => import(`components/blocks/${block.type}`))
          return <Block data={block.data} key={index} />
        })}
      </div>
    </Page>
  )
}

const Page = styled.div`
  width: 50%;
  margin: 0 auto;

  > h1 {
    font-size: 2.5rem;
  }

  .content {
    margin-top: 100px;
  }
`

export default ShowArticlePage
