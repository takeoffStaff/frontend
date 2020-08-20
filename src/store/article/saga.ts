import { call, takeEvery, put } from 'redux-saga/effects'
import { actions } from './actions'
import { http } from 'api/http'
import { IArticle } from 'types/articles'
import { notification } from 'antd'
import { redirect } from 'helpers/redirect'

function* fetchArticle(action: ReturnType<typeof actions.fetchArticleRequest>) {
  try {
    const article: IArticle = yield call(http, `/articles/${action.payload.articleId}`, 'GET')
    yield put(actions.fetchArticleSuccess(article))
  } catch (error) {
    console.error(error)
    yield put(actions.fetchArticleError(error))
  }
}

function* fetchCreateArticle(action: ReturnType<typeof actions.fetchCreateArticle>) {
  try {
    const article: IArticle = yield call(http, '/articles', 'POST', JSON.stringify({ ...action.payload.article }), {
      'Content-Type': 'application/json',
    })

    notification.success({
      message: 'Успех!',
      description: 'Статья успешно создана',
    })

    redirect(`/articles/edit/${article.id}`)
  } catch (error) {
    console.error(error)
  }
}

function* fetchUpdateArticle(action: ReturnType<typeof actions.fetchUpdateArticle>) {
  try {
    yield call(http, `/articles/${action.payload.article.id}`, 'PUT', JSON.stringify({ ...action.payload.article }), {
      'Content-Type': 'application/json',
    })

    notification.success({
      message: 'Успех!',
      description: 'Статья успешно изменена',
    })
  } catch (error) {
    console.error(error)
  }
}

function* fetchDeleteArticle(action: ReturnType<typeof actions.fetchDeleteArticle>) {
  try {
    yield call(http, `/articles/${action.payload.articleId}`, 'DELETE')

    notification.success({
      message: 'Успех!',
      description: 'Статья успешно удалена',
    })

    redirect('/articles')
  } catch (error) {
    console.error(error)
  }
}

export function* articleSaga() {
  yield takeEvery('[ARTICLE] FETCH_ARTICLE_REQUEST', fetchArticle)
  yield takeEvery('[ARTICLE] FETCH_CREATE_ARTICLE', fetchCreateArticle)
  yield takeEvery('[ARTICLE] FETCH_UPDATE_ARTICLE', fetchUpdateArticle)
  yield takeEvery('[ARTICLE] FETCH_DELETE_ARTICLE', fetchDeleteArticle)
}
