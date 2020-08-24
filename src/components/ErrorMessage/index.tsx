import React from 'react'
import { Typography } from 'antd'
import styled from 'styled-components'

interface IErrorMessageProps {
  message: string
}

const ErrorMessage: React.FC<IErrorMessageProps> = ({ message }) => (
  <Div>
    <Typography.Title level={3}>{message}</Typography.Title>
  </Div>
)

const Div = styled.div`
  text-align: center;
`

export default ErrorMessage
