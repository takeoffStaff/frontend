import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { SignUp, Dashboard, SignIn } from 'pages'
import { PrivateRoute } from 'components'
import { AuthLayout } from 'layouts'
import { useSelector } from 'react-redux'
import { IStore } from 'types/store'

const Routes: React.FC = () => {
  const { authed } = useSelector((store: IStore) => store.user)

  return (
    <Router>
      <Switch>
        {!authed && (
          <AuthLayout>
            <Route exact path="/registration" component={SignUp} />
            <Route exact path="/login" component={SignIn} />
            <Redirect to="/login" />
          </AuthLayout>
        )}

        <PrivateRoute exact path="/dashboard" component={Dashboard} authed={authed} />
        <Redirect to="/dashboard" />
      </Switch>
    </Router>
  )
}

export default Routes
