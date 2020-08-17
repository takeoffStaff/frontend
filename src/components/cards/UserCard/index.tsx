import React from 'react'
import { IUser } from 'types/users'
import { Avatar } from 'antd'
import styled from 'styled-components'
import { mixins } from 'styles'
import moment from 'moment'

const UserCard: React.FC<{ user: IUser }> = ({ user }) => {
  if (!user) {
    return null
  }

  const { image, name, email, phone, createdAt } = user
  return (
    <Card>
      <StyledAvatar size="large" src={image ? image.url : undefined} />
      <div className="info">
        <div className="name">{name}</div>
        <div className="additional">
          <Row label="e-mail" value={email} />
          <Row label="телефон" value={phone} />
          <Row label="дата регистрации" value={moment(createdAt).format('DD MMMM YYYY')} />
        </div>
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

  .name {
    font-size: 18px;
    font-weight: bold;
  }
`

const StyledAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
`

export default UserCard
