import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { SignUp, Dashboard, SignIn } from 'pages'
import { PrivateRoute } from 'components'
import { CenterLayout, DefaultLayout } from 'layouts'
import { useSelector } from 'react-redux'
import { IStore } from 'types/store'
import { Spin } from 'antd'

const Routes: React.FC = () => {
  const { authed } = useSelector((store: IStore) => store.user)
  const { ready } = useSelector((store: IStore) => store.app)

  if (ready) {
    return (
      <Router>
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

export default Routes
