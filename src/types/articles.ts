interface IAuthor {
	id: number
	name: string
}

export interface IArticleBrief {
	id: number
	title: string
	description: string
  author: IAuthor
	createdAt: string
	updatedAt: string
}

export interface IArticle {
	id: number
	blocks: any[]
	author: IAuthor
	description: string
	title: string
}
