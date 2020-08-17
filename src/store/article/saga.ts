import { call, takeEvery, put } from 'redux-saga/effects'
import { actions } from './actions'
import { http } from 'api/http'
import { IArticle } from 'types/articles'
import { notification } from 'antd'

function* fetchArticle(action: ReturnType<typeof actions.fetchArticleRequest>) {
  try {
    const article: IArticle = yield call(http, `/articles/${action.payload.articleId}`, 'GET')
    yield put(actions.fetchArticleSuccess(article))
  } catch (error) {
    console.error(error)
    yield put(actions.fetchArticleError(error))
  }
}

function* fetchArticleSave(action: ReturnType<typeof actions.fetchArticleSave>) {
  try {
    yield call(http, '/articles', 'POST', JSON.stringify({ ...action.payload.article }), {
      'Content-Type': 'application/json',
    })

    notification.success({
      message: 'Успех!',
      description: 'Статья успешно создана',
    })
  } catch (error) {
    console.error(error)
  }
}

export function* articleSaga() {
  yield takeEvery('[ARTICLE] FETCH_ARTICLE_REQUEST', fetchArticle)
  yield takeEvery('[ARTICLE] FETCH_ARTICLE_SAVE', fetchArticleSave)
}
