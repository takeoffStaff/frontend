import React from 'react'
import { Route, Redirect, RouteComponentProps } from 'react-router-dom'

interface IProps {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
  authed: boolean
  path: string
  exact?: boolean
}

const PrivateRoute: React.FC<IProps> = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authed ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      }
    />
  )
}

export default PrivateRoute
