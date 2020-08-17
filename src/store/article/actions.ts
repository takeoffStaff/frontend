import { IArticle } from 'types/articles'

export const actions = {
  fetchArticleRequest: (articleId: string) =>
    ({
      type: '[ARTICLE] FETCH_ARTICLE_REQUEST',
      payload: { articleId },
    } as const),

  fetchArticleSuccess: (article: IArticle) =>
    ({
      type: '[ARTICLE] FETCH_ARTICLE_SUCCESS',
      payload: { article },
    } as const),

  fetchArticleError: (message: string) =>
    ({
      type: '[ARTICLE] FETCH_ARTICLE_ERROR',
      payload: { message },
    } as const),

  fetchArticleSave: (article: any) =>
    ({
      type: '[ARTICLE] FETCH_ARTICLE_SAVE',
      payload: { article },
    } as const),

  destroyArticle: () =>
    ({
      type: '[ARTICLE] DESTROY_ARTICLE',
    } as const),
}
