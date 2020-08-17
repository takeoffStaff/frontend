import React from 'react'
import styled from 'styled-components'
import { Spin } from 'antd'

const Spinner: React.FC = () => <StyledSpinner size="large" />

const StyledSpinner = styled(Spin)`
  height: calc(100vh - 172px);
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Spinner
