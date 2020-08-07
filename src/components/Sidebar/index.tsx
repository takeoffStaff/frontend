import React, { useCallback } from 'react'
import { Layout, Menu } from 'antd'
import { useHistory } from 'react-router-dom'
import { AppstoreOutlined, TeamOutlined, DashboardOutlined } from '@ant-design/icons'

interface IMenuClickEventHandler {
  key: React.Key
  keyPath: React.Key[]
  item: React.ReactInstance
  domEvent: React.MouseEvent<HTMLElement>
}

const { Sider } = Layout

const Sidebar: React.FC = () => {
  const {
    push,
    location: { pathname },
  } = useHistory()

  const onClick = useCallback(
    ({ key }: IMenuClickEventHandler) => {
      push(String(key))
    },
    [push]
  )

  return (
    <Sider collapsible>
      <div className="logo" />
      <Menu onClick={onClick} theme="dark" mode="inline" selectedKeys={[pathname]}>
        <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="/users" icon={<TeamOutlined />}>
          Пользователи
        </Menu.Item>
        <Menu.Item key="/articles" icon={<AppstoreOutlined />}>
          Статьи
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Sidebar
