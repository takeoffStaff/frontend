import { rootSaga } from 'store/rootSaga'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'

import { reducer as userReducer } from 'store/user/reducer'
import { reducer as usersReducer } from 'store/users/reducer'
import { reducer as appReducer } from 'store/app/reducer'
import { reducer as paginationReducer } from 'store/pagination/reducer'

import { combineReducers, createStore, applyMiddleware, compose } from 'redux'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  user: userReducer,
  users: usersReducer,
  app: appReducer,
  pagination: paginationReducer,
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
