import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, RouteComponentProps } from 'react-router-dom'
import { SignUp, Dashboard, SignIn, Profile, Users, Articles, CreateArticle } from 'pages'
import { PrivateRoute } from 'components'
import { CenterLayout, DefaultLayout } from 'layouts'
import { useSelector } from 'react-redux'
import { IStore } from 'types/store'
import { Spin } from 'antd'
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
              <Route exact path="/registration" component={SignUp} />
              <Route exact path="/login" component={SignIn} />
              <Redirect to="/login" />
            </CenterLayout>
          )}

          <DefaultLayout>
            <PrivateRoute exact path="/dashboard" component={Dashboard} authed={authed} />
            <PrivateRoute exact path="/profile" component={Profile} authed={authed} />
            <PrivateRoute exact path="/users" component={Users} authed={authed} />
            <PrivateRoute exact path="/articles" component={Articles} authed={authed} />
            <PrivateRoute exact path="/articles/create" component={CreateArticle} authed={authed} />
            <Redirect to="/dashboard" />
          </DefaultLayout>
        </Switch>
      </Router>
    )
  } else {
    return (
      <CenterLayout>
        <Spin size="large" />
      </CenterLayout>
    )
  }
}

function HistorySetter({ history }: RouteComponentProps) {
  setHistory(history)
  return null
}

export default Routes
