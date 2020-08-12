import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from 'store/users/actions'

const UsersPage: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchUsersList())
  }, [dispatch])

  return <div>UsersPage</div>
}

export default UsersPage
