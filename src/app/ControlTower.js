import React, { Component } from 'react'
import { Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import ROUTES from '../app/routes'
import userAPI  from '../user/userAPI'
import { isLogged } from '../utils/user-utils'
import { handleUpdateUser } from '../user/userActions'
import LocalStorage, { USER_KEY } from '../utils/local-storage-utils'

class ControlTower extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: LocalStorage.get(USER_KEY)
    }
  }

  componentDidMount() {
    this.listener = userAPI.onAuthStateChanged(this.persistUser)
  }

  persistUser = userFull => {
    const user = userAPI.filterUser(userFull)
    this.setState({ user })
    LocalStorage.set(USER_KEY, user)

    // sharing "user" with the rest of the world...
    this.props.dispatch(handleUpdateUser(user))
  }

  render() {
    const { user } = this.state

    return (
      <Switch>
        <Redirect 
          exact
          from={ROUTES.landing} 
          to={ROUTES.tuto} 
        />
        { isLogged(user)
          ? <Redirect from={[ROUTES.signin, ROUTES.signup]} to={ROUTES.stat} />
          : <Redirect from={[ROUTES.profile, ROUTES.weight, ROUTES.stat, ROUTES.rdv]} to={ROUTES.landing} />
        }
      </Switch>
    )
  }
}

export default connect()(ControlTower)