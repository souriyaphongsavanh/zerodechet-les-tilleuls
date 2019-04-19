import React from 'react';
import { Route, Link } from 'react-router-dom';

import ROUTES from './routes'

const Signin = React.lazy(() => import('../user/Signin'));
const Signup = React.lazy(() => import('../user/Signup'));
const ForgottenPwd = React.lazy(() => import('../user/ForgottenPwd'));

const Welcome = () => {

  return (
    <div className='spa-container welcome'>
      <div className='welcome__box--top'>
        <Link className='link--logo' to='/'>
         <div className='logo u-margin-bottom-small'></div>
        </Link>
        <h1 className='heading-1 u-margin-bottom-small'>Zéro Déchet App</h1>
        <p className='welcome__why'>Moins de déchets pour retrouver sa nature.</p>
      </div>

      <div className="welcome__box--bottom">

        <Route exact path={ROUTES.welcome} render={() =>
          <>
            <Link className='btn btn--ghost' to={ROUTES.welcome + ROUTES.signin}>Se connecter</Link>
            <Link className='btn btn--primary' to={ROUTES.welcome + ROUTES.signup}>Créer un profil</Link>
          </>
          }
        />
        <Route path={ROUTES.welcome + ROUTES.signin} component={Signin} />
        <Route path={ROUTES.welcome + ROUTES.signup} component={Signup} />
        <Route path={ROUTES.welcome + ROUTES.forgottenPwd} component={ForgottenPwd} />
      </div>
    </div>
  );
}

export default Welcome;