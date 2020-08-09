import React, { useCallback } from 'react'
import { Layout, Avatar, Dropdown, Menu } from 'antd'
import styled from 'styled-components'
import { UserOutlined } from '@ant-design/icons'
import { mixins } from 'styles'
import { useDispatch } from 'react-redux'
import { actions } from 'store/user/actions'
import { useHistory } from 'react-router-dom'
import { IMenuClickEventHandler } from 'types/common'

const Header: React.FC = () => {
  const dispatch = useDispatch()
  const {
    push,
    location: { pathname },
  } = useHistory()

  const onMenuItemClick = useCallback(
    ({ key }: IMenuClickEventHandler) => {
      if (key === '/logout') {
        localStorage.removeItem('token')
        return dispatch(actions.destroyUserData())
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
      <Dropdown overlay={menu} placement="bottomLeft">
        <StyledAvatar size="large" icon={<UserOutlined />} />
      </Dropdown>
    </StyledHeader>
  )
}

const StyledHeader = styled(Layout.Header)`
  ${mixins.displayFlex('row', 'flex-end', 'center')}
`

const StyledAvatar = styled(Avatar)`
  &:hover {
    cursor: pointer;
  }
`

export default Header
