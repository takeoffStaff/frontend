import React, { useCallback } from 'react'
import Editor from '@stfy/react-editor.js'
import { editorTools } from './editorTools'
import { actions } from 'store/editor/actions'
import { useDispatch } from 'react-redux'

const TextEditor: React.FC = () => {

	const dispatch = useDispatch()

	const onData = useCallback((data) => {
		dispatch(actions.setEditorBlocks(data.blocks))
	}, [dispatch])

	return (
		<Editor
			autofocus
			onData={onData}
			onReady={() => console.log('Start!')}
			tools={editorTools}
			data={{
				time: 1554920381017,
				blocks: [
					{
						type: 'header',
						data: {
							text: 'Hello Editor.js',
							level: 2,
						},
					},
				],
				version: '2.12.4',
			}}
		/>
	)
}

export default TextEditor
