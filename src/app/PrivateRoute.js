import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import ROUTES from './routes'
import { isLogged } from '../utils/user-utils'

// FIXME conflict with ControlTower???
export function PrivateRoute ({ component: Component, ...rest}) {
  const { user } = rest

  return (
    <Route {...rest} render={(props) => (
        isLogged(user)
        ? <Component {...props} />
        : <Redirect to={ROUTES.landing} />
      )} 
    />
  )
}

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps)(PrivateRoute)