import React from 'react'
import { Row } from 'antd'
import styled from 'styled-components'

const AuthLayout: React.FC = ({ children }) => {
  return (
    <StyledRow justify="center" align="middle">
      <Container>{children}</Container>
    </StyledRow>
  )
}

const StyledRow = styled(Row)`
  min-height: 100vh;
`

const Container = styled.div`
  width: 500px;
`

export default AuthLayout
