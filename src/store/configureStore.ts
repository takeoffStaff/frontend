import { rootSaga } from 'store/rootSaga'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'

import { reducer as authReducer } from 'store/auth/reducer'
import { reducer as usersReducer } from 'store/users/reducer'
import { reducer as appReducer } from 'store/app/reducer'
import { reducer as paginationReducer } from 'store/pagination/reducer'
import { reducer as editorReducer } from 'store/editor/reducer'
import { reducer as articlesReducer } from 'store/articles/reducer'

import { combineReducers, createStore, applyMiddleware, compose } from 'redux'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  auth: authReducer,
  users: usersReducer,
  app: appReducer,
  pagination: paginationReducer,
  editor: editorReducer,
  articles: articlesReducer,
})

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      : (f: unknown) => f
  )
)

sagaMiddleware.run(rootSaga)

window.store = store

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>
