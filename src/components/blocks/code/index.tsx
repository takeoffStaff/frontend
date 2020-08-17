import React from 'react'
import styled from 'styled-components'
import { ICodeBlock } from 'types/editor'

const CodeBlock: React.FC<Omit<ICodeBlock, 'type'>> = ({ data }) => {
  const html = `<code>${data.code}</code>`

  return <Div dangerouslySetInnerHTML={{ __html: html }}></Div>
}

const Div = styled.div``

export default CodeBlock
