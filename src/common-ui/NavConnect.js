import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

import ROUTES from '../app/routes'
import SVGUser from './svg/SVGUser'

const NavConnect = ({ location }) => {

  const connectStatus = ROUTES.welcome.startsWith(location.pathname)
    ? 'init' 
    : 'active'


  const [foregnd, setForegnd] = useState('')

  useEffect(() => {
    if (
      ROUTES.signin.startsWith(location.pathname) ||
      ROUTES.signup.startsWith(location.pathname)
    ) {
      setForegnd('nav__connect--backgnd')
    } else {
      setForegnd('')
    }
  }, [location.pathname])

  return (
    <>
      <Link to={ROUTES.signin}>
        <div className={`nav__connect nav__connect--${connectStatus} ${foregnd}`}>
          <div className='nav__connect-content'>
            <SVGUser />
          </div>
        </div>
      </Link>

      <Link to={ROUTES.welcome}>
        <div className={`nav__close nav__close--${connectStatus}`}>
          <div className='nav__close-content f__nav'>
            X
          </div>
        </div>
      </Link>
    </>
  )
}

export default withRouter(NavConnect)