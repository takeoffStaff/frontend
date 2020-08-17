import React, { useEffect, useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { IStore } from 'types/store'
import { CheckCircleTwoTone } from '@ant-design/icons'
import moment from 'moment'
import { redirect } from 'helpers/redirect'

interface IProps {
  description: string
  updatedAt: string
  createdAt: string
  articleId: number
  author: {
    id: number
    name: string
  }
}

export const usePresenter = ({ description, author, createdAt, updatedAt, articleId }: IProps) => {
  const { authedUser } = useSelector((store: IStore) => store.auth)

  const [briefDescription, setBriefDescription] = useState<string>('')

  const isOwner = authedUser && authedUser.id === author.id
  const buttonLabel = isOwner ? 'Редактировать статью' : 'Посмотреть статью'

  const authorLabel = isOwner ? (
    <span>
      Вы автор этой статьи <CheckCircleTwoTone twoToneColor="#52c41a" />
    </span>
  ) : (
    author.name
  )

  useEffect(() => {
    if (description.length > 350) {
      const desc = description.slice(0, 350) + '...'
      setBriefDescription(desc)
    } else {
      setBriefDescription(description)
    }
  }, [description])

  const goToArticle = useCallback(() => {
    const path = isOwner ? `/articles/edit/${articleId}` : `/articles/show/${articleId}`
    redirect(path)
  }, [articleId, isOwner])

  return {
    briefDescription,
    buttonLabel,
    authorLabel,
    goToArticle,
    formatedCreatedAt: moment(createdAt).format('DD MMMM YYYY'),
    formatedUpdatedAt: moment(updatedAt).format('DD MMMM YYYY'),
  }
}
