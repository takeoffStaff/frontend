import { call, takeEvery, put } from 'redux-saga/effects'
import { actions } from './actions'
import { http } from 'api/http'
import { IArticleBrief } from 'types/articles'
import { actions as paginateActions } from 'store/pagination/actions'
import { IPaginate } from 'types/common'
import { omit } from 'lodash'

function* fetchArticlesList(action: ReturnType<typeof actions.fetchArticlesList>) {
  try {
    const { page, perPage } = action.payload.requestParams

    const articles: IPaginate<IArticleBrief[]> = yield call(http, `/articles?page=${page}&size=${perPage}`, 'GET')

    yield put(paginateActions.setPagination(omit(articles, ['data'])))
    yield put(actions.fetchArticlesListSuccess(articles.data))
  } catch (error) {
    console.log(error)
    yield put(actions.fetchArticlesListError(error.message))
  }
}

export function* articlesSaga() {
  yield takeEvery('[ARTICLES] FETCH_ARTICLES_LIST', fetchArticlesList)
}
