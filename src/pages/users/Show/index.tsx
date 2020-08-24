import React from 'react'
import { Spinner, ErrorMessage } from 'components'
import { usePresenter } from './usePresenter'
import { Avatar, Typography } from 'antd'
import styled from 'styled-components'
import { mixins } from 'styles'
import moment from 'moment'

const { Title } = Typography

const ShowUserPage: React.FC = () => {

  const { data, loading, error } = usePresenter()

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorMessage message={error.message} />
  }

  if (!data) {
    return null
  }

  const { image, name, email, phone, createdAt } = data

  const formatedDate = moment(createdAt).format('DD MMMM YYYY')

  return (
    <Page>
      <StyledAvatar size="large" src={image ? image.url : undefined} />
      <div>
        <Title level={3}>{name}</Title>
        <div>E-mail: {email}</div>
        <div>Телефон: {phone}</div>
        <div>Дата регистрации: {formatedDate}</div>
      </div>
    </Page>
  )
}

const Page = styled.div`
  ${mixins.displayFlex('row', 'flex-start', 'flex-start')}

  > * {
    ${mixins.inlineSpace('30px')}
  }
`

const StyledAvatar = styled(Avatar)`
  width: 200px;
  height: 200px;
`

export default ShowUserPage
