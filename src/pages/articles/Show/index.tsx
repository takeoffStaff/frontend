import React, { lazy } from 'react'
import { Spinner, ErrorMessage } from 'components'
import styled from 'styled-components'
import { usePresenter } from './usePresenter'
import { Typography } from 'antd'

const ShowArticlePage: React.FC = () => {

  const { data, loading, error } = usePresenter()

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorMessage message={error.message} />
  }

  if (!data) {
    return null
  }

  const { title, description } = data

  return (
    <Page>
      <Typography.Title level={3}>{title}</Typography.Title>
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

  .content {
    margin-top: 100px;
  }
`

export default ShowArticlePage
