import React from 'react'
import { List } from 'antd'
import { UserCard } from 'components/cards'
import { IUser } from 'types/users'
import { actions } from 'store/users/actions'
import { useFetchDataList } from 'hooks/fetchDataList.hook'
import { ListProvider } from 'components/itemLists'

const UsersList: React.FC = () => {

  const { data, loading, error } = useFetchDataList<IUser[]>({
    storeName: 'users',
    fetchAction: actions.fetchUsersListRequest,
    destroyDataAction: actions.destroyUsersList,
  })

  return (
    <ListProvider data={{ dataItems: data, loading, error }}>
      <List itemLayout="vertical" size="large">
        {data && data.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </List>
    </ListProvider>
  )
}

export default UsersList
