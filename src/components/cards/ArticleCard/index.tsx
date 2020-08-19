import React from 'react'
import styled from 'styled-components'
import { mixins } from 'styles'
import { IArticleBrief } from 'types/articles'
import { Button, Typography } from 'antd'
import { usePresenter } from './usePresenter'

const { Title, Paragraph } = Typography

const ArticleCard: React.FC<{ article: IArticleBrief }> = ({ article }) => {
  const { title } = article

  const {
    briefDescription,
    authorLabel,
    buttonLabel,
    formatedCreatedAt,
    formatedUpdatedAt,
    goToArticle,
  } = usePresenter(article)

  return (
    <Card>
      <div className="info">
        <Title level={4}>{title}</Title>
        <Paragraph>{briefDescription}</Paragraph>

        <div className="additional">
          <div>автор: {authorLabel}</div>
          <div>Дата публикации: {formatedCreatedAt}</div>
          <div>Обновлена: {formatedUpdatedAt}</div>

          <Button onClick={goToArticle} type="primary">
            {buttonLabel}
          </Button>
        </div>

      </div>
    </Card>
  )
}

const Card = styled.section`
  ${mixins.displayFlex('row', 'flex-start', 'flex-start')}
  ${mixins.stackSpace('20px')}

  padding: 20px;
  background: #ffffff;
  word-break: break-all;

  .additional {
    margin-top: 10px;

    > * {
      &:last-child {
        margin-top: 10px;
      }
    }
  }
`

export default ArticleCard
