import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { SignUp, Dashboard, SignIn } from 'pages'
import { PrivateRoute } from 'components'
import { AuthLayout } from 'layouts'

const Routes: React.FC = () => {
  const authed = true
  return (
    <Router>
      <Switch>
        {!authed && (
          <AuthLayout>
            <Route exact path="/register" component={SignUp} />
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
