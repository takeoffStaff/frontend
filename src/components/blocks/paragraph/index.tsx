import React from 'react'
import styled from 'styled-components'
import { IParagraphBlock } from 'types/editor'

const ParagraphBlock: React.FC<Omit<IParagraphBlock, 'type'>> = ({ data }) => {
  const html = `<p>${data.text}</p>`

  return <Div dangerouslySetInnerHTML={{ __html: html }}></Div>
}

const Div = styled.div``

export default ParagraphBlock
