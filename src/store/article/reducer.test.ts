import { actions } from './actions'
import { reducer } from './reducer'

const state = {
  data: null,
  loading: false,
  error: null,
}

it('loading should be true', () => {
  const action = actions.fetchArticleRequest('1')
  const newState = reducer(state, action)
  expect(newState.loading).toBe(true)
})

it('data should be an article', () => {
  const dummyArticle = {
    id: 1,
    title: 'test title',
    description: 'test desc',
    author: {
      id: 1,
      name: 'author'
    },
    blocks: []
  }

  const action = actions.fetchArticleSuccess(dummyArticle)
  const newState = reducer(state, action)

  expect(newState.loading).toBe(false)
  expect(newState.error).toBeNull
  expect(newState.data).toEqual(expect.objectContaining(dummyArticle))
})

it('error don\'t should be null', () => {
  const error = { message: 'error message' }
  const action = actions.fetchArticleError('error message')
  const newState = reducer(state, action)

  expect(newState.data).toBeNull
  expect(newState.loading).toBeFalsy
  expect(newState.error).toMatchObject(error)
})

it('data should be null', () => {
  const action = actions.destroyArticle()
  const newState = reducer(state, action)

  expect(newState.data).toBeNull
  expect(newState.loading).toBeFalsy
  expect(newState.error).toBeNull
})