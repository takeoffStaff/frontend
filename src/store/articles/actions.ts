import { IArticleBrief } from 'types/articles'
import { IRequestParams } from 'types/api'

export const actions = {
  fetchArticleSave: (article: any) =>
    ({
      type: '[ARTICLES] FETCH_ARTICLE_SAVE',
      payload: { article },
    } as const),

  fetchArticlesList: (requestParams: IRequestParams) =>
    ({
      type: '[ARTICLES] FETCH_ARTICLES_LIST',
      payload: { requestParams },
    } as const),

  fetchArticlesListSuccess: (articles: IArticleBrief[]) =>
    ({
      type: '[ARTICLES] FETCH_ARTILCES_LIST_SUCCESS',
      payload: { articles },
    } as const),

  fetchArticlesListError: (message: string) =>
    ({
      type: '[ARTICLES] FETCH_ARTICLES_LIST_ERROR',
      payload: { message },
    } as const),

  destroyArticlesList: () =>
    ({
      type: '[ARTICLES] DESTROY_ARTICLES_LIST',
    } as const),
}
