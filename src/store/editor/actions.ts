export const actions = {
	setEditorBlocks: (blocks: any) =>
		({
			type: '[EDITOR] SET_EDITOR_BLOCKS',
			payload: { blocks }
		} as const),

	destroyEditorBlocks: () =>
		({
			type: '[EDITOR] DESTROY_EDITOR_BLOCKS',
		} as const),
}