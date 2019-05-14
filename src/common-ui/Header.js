import React from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../app/routes'
import Logo from './Logo'

const Header = () => {
  return (
    <Link className='link' to={ROUTES.landing}>
      <div className='header-connect'>
        <div className='header-connect__logo'>
          <Logo />
        </div>
      </div>
    </Link>
  )
}

export default Header