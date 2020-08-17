import React from 'react'
import styled from 'styled-components'
import { IHeaderBlock } from 'types/editor'

const HeaderBlock: React.FC<Omit<IHeaderBlock, 'type'>> = ({ data }) => {
  const html = `<h${data.level}>${data.text}</h${data.level}>`

  return <Div dangerouslySetInnerHTML={{ __html: html }}></Div>
}

const Div = styled.div``

export default HeaderBlock
