import React, { memo } from 'react'
import { List } from 'antd'
import { UserCard } from 'components/cards'
import { Pagination, Spinner } from 'components'
import { IUser } from 'types/users'
import { actions } from 'store/users/actions'
import { useFetchData } from 'hooks/fetchData.hook'

const UsersListPage: React.FC = () => {
  const { data, loading, error } = useFetchData({
    storeName: 'users',
    fetchAction: actions.fetchUsersListRequest,
    destroyDataAction: actions.destroyUsersList,
  })

  if (loading) {
    return <Spinner />
  }

  return (
    <React.Fragment>
      {!loading && !error && data && <ItemList data={data as IUser[]} />}
      <Pagination />
    </React.Fragment>
  )
}

const ItemList: React.FC<{ data: IUser[] }> = memo(({ data }) => (
  <List itemLayout="vertical" size="large">
    {data.map((user) => (
      <UserCard key={user.id} user={user} />
    ))}
  </List>
))

export default UsersListPage
