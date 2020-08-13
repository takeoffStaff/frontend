import React from 'react'
import { Layout } from 'antd'
import { Sidebar, Header } from 'components'
import styled from 'styled-components'

const { Content } = Layout

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Header />
        <StyledContent>{children}</StyledContent>
      </Layout>
    </Layout>
  )
}

const StyledContent = styled(Content)`
  display: flex;
  flex-direction: column;
  margin: 0 16px;
  max-height: calc(100vh - 64px);
  overflow: hidden;
  overflow-y: scroll;
  padding: 16px 0 40px;
`

export default DefaultLayout
