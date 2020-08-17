import React from 'react'
import styled from 'styled-components'
import { IImageBlock } from 'types/editor'

const ImageBlock: React.FC<Omit<IImageBlock, 'type'>> = ({ data }) => {
  const html = `
	<div>
		<img alt="${data.caption}" src="${data.file.url}" />
		<p><i>${data.caption}</i></p>
	</div
`

  return <Div dangerouslySetInnerHTML={{ __html: html }}></Div>
}

const Div = styled.div`
  img {
    max-width: 50%;
  }
`

export default ImageBlock
