import { IArticle, ICreateArticleValues, IUpdateArticleValues } from 'types/articles'

export const actions = {
  fetchArticleRequest: (articleId: string) => ({
    type: '[ARTICLE] FETCH_ARTICLE_REQUEST',
    payload: { articleId },
  }) as const,

  fetchArticleSuccess: (article: IArticle) => ({
    type: '[ARTICLE] FETCH_ARTICLE_SUCCESS',
    payload: { article },
  }) as const,

  fetchArticleError: (message: string) => ({
    type: '[ARTICLE] FETCH_ARTICLE_ERROR',
    payload: { message },
  }) as const,

  fetchCreateArticle: (article: ICreateArticleValues) => ({
    type: '[ARTICLE] FETCH_CREATE_ARTICLE',
    payload: { article },
  }) as const,

  fetchUpdateArticle: (article: IUpdateArticleValues) => ({
    type: '[ARTICLE] FETCH_UPDATE_ARTICLE',
    payload: { article }
  }) as const,

  fetchDeleteArticle: (articleId: number) => ({
    type: '[ARTICLE] FETCH_DELETE_ARTICLE',
    payload: { articleId }
  }) as const,

  destroyArticle: () => ({
    type: '[ARTICLE] DESTROY_ARTICLE',
  }) as const,
}
