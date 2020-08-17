export interface IArticleBrief {
	id: number
	title: string
	description: string
  author: {
		id: number
		name: string
	}
	createdAt: string
	updatedAt: string
}
