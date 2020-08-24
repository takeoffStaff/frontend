import React, { Fragment } from 'react'
import { Typography } from 'antd'
import { Spinner, ErrorMessage, Pagination } from 'components'
import { IUser } from 'types/users'
import { IError } from 'types/common'
import { IArticleBrief } from 'types/articles'

interface IListProviderProps {
  data: {
    loading: boolean
    error: IError | null
    dataItems: IArticleBrief[] | IUser[] | null
  }
}

const ListProvider: React.FC<IListProviderProps> = ({ data, children }) => {

  const { loading, error, dataItems } = data

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorMessage message={error.message} />
  }

  if (dataItems && !dataItems.length) {
    return <Typography.Title level={3}>Ничего не найдено</Typography.Title>
  }

  return (
    <Fragment>
      {children}

      <Pagination />
    </Fragment>
  )
}

export default ListProvider
