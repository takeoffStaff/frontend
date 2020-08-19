import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom'
import { PrivateRoute, Spinner } from 'components'
import { CenterLayout, DefaultLayout } from 'layouts'
import { useSelector } from 'react-redux'
import { IStore } from 'types/store'
import { setHistory } from 'helpers/redirect'

const Routes: React.FC = () => {
  const { authed } = useSelector((store: IStore) => store.auth)
  const { ready } = useSelector((store: IStore) => store.app)

  if (ready) {
    return (
      <Router>
        <Route component={HistorySetter} />
        <Switch>
          {!authed && (
            <CenterLayout>
              <Suspense fallback={<Spinner />}>
                <Route exact path="/registration" component={lazy(() => import('pages/SignUp'))} />
                <Route exact path="/login" component={lazy(() => import('pages/SignIn'))} />
                <Redirect to="/login" />
              </Suspense>
            </CenterLayout>
          )}

          <DefaultLayout>
            <Suspense fallback={<Spinner />}>
              <PrivateRoute exact path="/dashboard" component={lazy(() => import('pages/Dashboard'))} />
              <PrivateRoute exact path="/profile" component={lazy(() => import('pages/Profile'))} />

              <PrivateRoute exact path="/users" component={lazy(() => import('pages/users/List'))} />
              <PrivateRoute exact path="/users/show/:id" component={lazy(() => import('pages/users/Show'))} />

              <PrivateRoute exact path="/articles" component={lazy(() => import('pages/articles/List'))} />
              <PrivateRoute exact path="/articles/create" component={lazy(() => import('pages/articles/Create'))} />
              <PrivateRoute exact path="/articles/show/:id" component={lazy(() => import('pages/articles/Show'))} />
              <PrivateRoute exact path="/articles/edit/:id" component={lazy(() => import('pages/articles/Edit'))} />

              <Redirect to="/dashboard" />
            </Suspense>
          </DefaultLayout>
        </Switch>
      </Router>
    )
  } else {
    return (
      <CenterLayout>
        <Spinner />
      </CenterLayout>
    )
  }
}

function HistorySetter({ history }: RouteComponentProps) {
  setHistory(history)
  return null
}

export default Routes
