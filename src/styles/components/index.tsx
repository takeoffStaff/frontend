import styled from 'styled-components'
import { Form } from 'antd'

export const FormItem = styled(Form.Item)`
  display: flex;
  flex-direction: column;

  .ant-form-item-label {
    text-align: left;
  }
`

export const AuthForm = styled(Form)`
  width: 500px;
`
