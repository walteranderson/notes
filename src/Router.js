import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UnAuthRoute from './components/UnAuthRoute'
import AuthRoute from './components/AuthRoute'
import Loading from './components/Loading'


const Login = React.lazy(() => import('./components/Login'))
const Home = React.lazy(() => import('./components/Home'))
const NotesList = React.lazy(() => import('./components/NotesList'))

export default () => (
  <Router>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" exact component={Home} />
        <UnAuthRoute path="/login" exact component={Login} />
        <AuthRoute path="/notes" exact component={NotesList} />
      </Switch>
    </Suspense>
  </Router>
)
