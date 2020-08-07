import React from 'react'
import { Layout } from 'antd'
import { Sidebar } from 'components'

const { Header, Content, Footer } = Layout

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, textAlign: 'center' }}>{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created by @Sugarman</Footer>
      </Layout>
    </Layout>
  )
}

export default DefaultLayout
