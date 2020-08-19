import React from 'react'
import Editor from '@stfy/react-editor.js'
import { editorTools } from './editorTools'
import { usePresenter } from './usePresenter'
import styled from 'styled-components'

interface IProps {
  isEmpty?: boolean
}

const TextEditor: React.FC<IProps> = ({ isEmpty }) => {

  const { blocks, onData } = usePresenter()

  if (!blocks && !isEmpty) {
    return null
  }

  return (
    <Wrapper>
      <Editor
        autofocus
        onData={onData}
        tools={editorTools}
        data={{
          time: 1554920381017,
          blocks: blocks || [],
          version: '2.12.4',
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
  padding-top: 50px;
  background: #ffffff;
  min-height: 800px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
`

export default TextEditor
