import React from 'react'
import { UsersList } from 'components/itemLists'
import styled from 'styled-components'
import { mixins } from 'styles'

const UsersListPage: React.FC = () => (
  <Page>
    <UsersList />
  </Page>
)

const Page = styled.div`
  > * {
    ${mixins.stackSpace('20px')}
  }
`

export default UsersListPage
