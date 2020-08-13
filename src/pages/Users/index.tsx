import React, { memo } from 'react'
import { usePresenter } from './usePresenter'
import { List, Spin } from 'antd'
import { UserCard } from 'components/cards'
import { Pagination } from 'components'
import styled from 'styled-components'
import { IUser } from 'types/users'

const UsersPage: React.FC = () => {
  const { data, loading, error } = usePresenter()

  return (
    <>
      {loading && <Spinner size="large" />}
      {data && !loading && <Content data={data} />}
      <Pagination />
    </>
  )
}

const Content: React.FC<{ data: IUser[] }> = memo(({ data }) => (
  <List itemLayout="vertical" size="large">
    {data.map((user) => (
      <UserCard key={user.id} user={user} />
    ))}
  </List>
))

const Spinner = styled(Spin)`
  height: calc(100vh - 172px);
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
`

export default UsersPage
