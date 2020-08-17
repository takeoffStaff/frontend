import React from 'react'
import styled from 'styled-components'
import { mixins } from 'styles'
import { IArticleBrief } from 'types/articles'
import { Button } from 'antd'
import { usePresenter } from './usePresenter'

const ArticleCard: React.FC<{ article: IArticleBrief }> = ({ article }) => {
  const { title, description, createdAt, author, updatedAt, id } = article

  const {
    briefDescription,
    authorLabel,
    buttonLabel,
    formatedCreatedAt,
    formatedUpdatedAt,
    goToArticle,
  } = usePresenter({
    description,
    author,
    updatedAt,
    createdAt,
    articleId: id,
  })

  return (
    <Card>
      <div className="info">
        <div className="title">{title}</div>
        <div className="description">{briefDescription}</div>

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

  .title {
    font-size: 24px;
  }

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
