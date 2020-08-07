import React from 'react'
import { Row } from 'antd'
import styled from 'styled-components'

const CenterLayout: React.FC = ({ children }) => {
  return (
    <StyledRow justify="center" align="middle">
      {children}
    </StyledRow>
  )
}

const StyledRow = styled(Row)`
  min-height: 100vh;
`

export default CenterLayout
