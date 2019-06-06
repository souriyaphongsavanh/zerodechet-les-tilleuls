import React, { Component } from 'react'
import { 
  BrowserRouter as Router,
} from 'react-router-dom'
import LoadingBar from 'react-redux-loading-bar'

import '../_resources/sass/main.scss'

import Loading from '../info/Loading'
import ScrollToTop from '../common-ui/ScrollToTop'
import Screen from '../common-ui/Screen'
import Content from '../common-ui/Content'
import Nav from '../common-ui/Nav'
import ControlTower from './ControlTower'
import ErrorWatcher from '../utils/ErrorWatcher'
import InfoWatcher from '../utils/InfoWatcher'

// lazy loading (/!\ BE CAREFUL FOR CSS TRANSITION... /!\)
// const Screen = React.lazy(() => import('../common-ui/Screen'))
// const Nav = React.lazy(() => import('../common-ui/Nav'))

/*
TODO
- tester lundi !!! quand il n'y a pas de données
- tuto: quand on ne connaît pas son objectif... que faire?
- web responsive
- documenter
- tester (compte/pas compte)
- releaser une version BETA
- pourquoi développeur react? 
- pourquoi les tilleuls?
- souriya or not?
- publier mon CV
- amélioration quote nuage

// not vital :
- PWA : invite Add To Screen
- PWA : offline mode ?
- firestore cache
https://stackoverflow.com/questions/50917833/firebase-firestore-how-to-identify-an-offline-read
- remplacer toutes les date par timestamp dans firebase 
eg. startDate => startTimestamp
- supprimer "endDate" in weight object (firebase)
- configure launch.json for jest ext.
https://github.com/jest-community/vscode-jest


// improvement :
- implement Dan Abramov solution linked in it : https://daveceddia.com/where-fetch-data-redux/
- material-ui pkg perf....
*/
class App extends Component {

  render() {
    console.log('render App')
    return (
      <React.Suspense fallback={<Loading />}>
        <Router>
          <ScrollToTop>

            <LoadingBar className='loading' />

            <ControlTower />

            <Screen>
              <Content />
            </Screen>

            <nav className='nav'>
              <Nav />
            </nav>

            <ErrorWatcher />
            <InfoWatcher />
          </ScrollToTop>
        </Router>
      </React.Suspense> 
    )
  }
}

export default App
