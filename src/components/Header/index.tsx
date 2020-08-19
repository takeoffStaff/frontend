import React, { useCallback } from 'react'
import { Layout, Avatar, Dropdown, Menu, Typography } from 'antd'
import styled from 'styled-components'
import { UserOutlined } from '@ant-design/icons'
import { mixins } from 'styles'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from 'store/auth/actions'
import { useHistory } from 'react-router-dom'
import { IMenuClickEventHandler } from 'types/common'
import { IStore } from 'types/store'

const { Text } = Typography

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const { authedUser } = useSelector((store: IStore) => store.auth)

  const {
    push,
    location: { pathname },
  } = useHistory()

  const onMenuItemClick = useCallback(
    ({ key }: IMenuClickEventHandler) => {
      if (key === '/logout') {
        localStorage.removeItem('token')
        return dispatch(actions.destroyAuthData())
      }

      if (key !== pathname) {
        return push(String(key))
      }
    },
    [push, dispatch, pathname]
  )

  const menu = (
    <Menu onClick={onMenuItemClick} theme="dark" selectedKeys={[pathname]}>
      <Menu.Item key="/profile">Настройки профиля</Menu.Item>
      <Menu.Item key="/logout">Выход</Menu.Item>
    </Menu>
  )

  return (
    <StyledHeader>
      {authedUser && (
        <div className="user">
          <Text strong>{authedUser.name}</Text>
          <Dropdown overlay={menu} placement="bottomLeft">
            <StyledAvatar
              size="large"
              icon={<UserOutlined />}
              src={authedUser.image ? authedUser.image.url : undefined}
            />
          </Dropdown>
        </div>
      )}
    </StyledHeader>
  )
}

const StyledHeader = styled(Layout.Header)`
  ${mixins.displayFlex('row', 'flex-end', 'center')}

  .user {
    ${mixins.displayFlex('row', 'flex-start', 'center')}

    .ant-typography {
      color: #ffffff;
    }

    > * {
      ${mixins.inlineSpace('10px')}
    }
  }
`

const StyledAvatar = styled(Avatar)`
  &:hover {
    cursor: pointer;
  }
`

export default Header
