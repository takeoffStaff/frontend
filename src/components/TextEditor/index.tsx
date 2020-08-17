import React, { useCallback, useEffect } from 'react'
import Editor from '@stfy/react-editor.js'
import { editorTools } from './editorTools'
import { actions } from 'store/editor/actions'
import { useDispatch, useSelector } from 'react-redux'
import { IStore } from 'types/store'

interface IProps {
  isEmpty?: boolean
}

const TextEditor: React.FC<IProps> = ({ isEmpty }) => {
  const blocks = useSelector((store: IStore) => store.article.data && store.article.data.blocks)

  const dispatch = useDispatch()

  useEffect(() => {
    if (blocks) {
      dispatch(actions.setEditorBlocks(blocks))
    } else {
      dispatch(actions.setEditorBlocks([]))
    }

    return () => {
      if (blocks) {
        dispatch(actions.destroyEditorBlocks())
      }
    }
  }, [dispatch, blocks])

  const onData = useCallback(
    (data) => {
      dispatch(actions.setEditorBlocks(data.blocks))
    },
    [dispatch]
  )

  if (!blocks && !isEmpty) {
    return null
  }

  return (
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
  )
}

export default TextEditor