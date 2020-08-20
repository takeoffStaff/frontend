import { BlocksType } from './editor'

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
	blocks: BlocksType
	author: IAuthor
	description: string
	title: string
}

export interface ICreateArticleValues {
	blocks: BlocksType
	description: string
	title: string
}

export interface IUpdateArticleValues extends ICreateArticleValues {
	id: number
}
