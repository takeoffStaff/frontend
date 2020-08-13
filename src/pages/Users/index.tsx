import React from 'react'
import { usePresenter } from './usePresenter'
import { List } from 'antd'
import { UserCard } from 'components/cards'

const UsersPage: React.FC = () => {
  const { data, loading, error } = usePresenter()

  return (
    <List itemLayout="vertical" size="large" loading={loading}>
      {data && data.map((user) => <UserCard key={user.id} user={user} />)}
    </List>
  )
}

export default UsersPage
