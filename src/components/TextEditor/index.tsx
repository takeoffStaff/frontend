import React from 'react'
import Editor from '@stfy/react-editor.js'
import { editorTools } from './editorTools'

const TextEditor: React.FC = () => (
	<Editor
		autofocus
		onData={(data) => console.log(data, 'editorData')}
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

export default TextEditor
