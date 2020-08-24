import React from 'react'
import InputMask from 'react-input-mask'
import { Input } from 'antd'

interface IMaskedInputProps {
  mask: string
}

interface IInputProps {
  id: string
}

const MaskedInput: React.FC<IMaskedInputProps> = ({ mask, ...rest }) => (
  <InputMask mask={mask} {...rest} >
    {(inputProps: IInputProps) => <Input {...inputProps} />}
  </InputMask>
)

export default MaskedInput
