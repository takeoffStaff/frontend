import React from 'react'
import { Route, Redirect, RouteComponentProps } from 'react-router-dom'
import { IStore } from 'types/store'
import { useSelector } from 'react-redux'

interface IProps {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
  path: string
  exact?: boolean
}

const PrivateRoute: React.FC<IProps> = ({ component: Component, ...rest }) => {
  const { authed } = useSelector((store: IStore) => store.auth)
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
