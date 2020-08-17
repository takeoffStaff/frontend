import React from 'react'
import styled from 'styled-components'
import { IListBlock } from 'types/editor'

const ListBlock: React.FC<Omit<IListBlock, 'type'>> = ({ data }) => {
  const listType = data.style.slice(0, 1) + 'l'

  const html = `<${listType}>${data.items.map((item) => `<li>${item}</li>`).join('')}</${listType}>`

  return <Div dangerouslySetInnerHTML={{ __html: html }}></Div>
}

const Div = styled.div``

export default ListBlock
