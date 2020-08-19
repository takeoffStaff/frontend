import React, { lazy } from 'react'
import { Spinner } from 'components'
import styled from 'styled-components'
import { usePresenter } from './usePresenter'

const ShowArticlePage: React.FC = () => {

  const { data, loading, error } = usePresenter()

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
  word-break: break-all;

  > h1 {
    font-size: 2.5rem;
  }

  .content {
    margin-top: 100px;
  }
`

export default ShowArticlePage
