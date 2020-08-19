import { BlocksType } from 'types/editor'

export const actions = {
	setEditorBlocks: (blocks: BlocksType) => ({
		type: '[EDITOR] SET_EDITOR_BLOCKS',
		payload: { blocks },
	}) as const,

	destroyEditorBlocks: () => ({
		type: '[EDITOR] DESTROY_EDITOR_BLOCKS',
	}) as const,

	setContentReadyStatus: (status: boolean) => ({
		type: '[EDITOR] SET_CONTENT_READY_STATUS',
		payload: { status },
	}) as const,
}