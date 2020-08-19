import React, { useCallback } from 'react'
import { IUser } from 'types/users'
import { Avatar, Button, Typography } from 'antd'
import styled from 'styled-components'
import { mixins } from 'styles'
import moment from 'moment'
import { redirect } from 'helpers/redirect'

const { Title } = Typography

const UserCard: React.FC<{ user: IUser }> = ({ user }) => {

  const goToUser = useCallback(() => {
    redirect(`/users/show/${user.id}`)
  }, [user.id])

  const { image, name, email, phone, createdAt } = user
  const formatedDate = moment(createdAt).format('DD MMMM YYYY')

  return (
    <Card>
      <StyledAvatar size="large" src={image ? image.url : undefined} />

      <div className="info">
        <Title level={4}>{name}</Title>

        <div className="additional">
          <Row label="e-mail" value={email} />
          <Row label="телефон" value={phone} />
          <Row label="дата регистрации" value={formatedDate} />
        </div>

        <Button type="primary" onClick={goToUser}>Открыть профиль</Button>
      </div>
    </Card>
  )
}

const Row: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <span>{label}:</span>
    <Right className="right">{value}</Right>
  </div>
)

const Right = styled.span`
  opacity: 0.8;
  margin-left: 6px;
`

const Card = styled.div`
  ${mixins.displayFlex('row', 'flex-start', 'flex-start')}
  ${mixins.stackSpace('30px')}

	padding: 10px;
  background: #ffffff;

  > * {
    ${mixins.inlineSpace('20px')}
  }

  .info {
    ${mixins.displayFlex('column', 'flex-start', 'flex-start')}

    > * {
      ${mixins.stackSpace('10px')}
    }
  }

  .additional {
    ${mixins.displayFlex('column', 'flex-start', 'flex-start')}
  }
`

const StyledAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
`

export default UserCard
