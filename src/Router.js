import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Route from './components/Route'
import Loading from './components/Loading'

const Login = React.lazy(() => import('./components/Login'))
const Home = React.lazy(() => import('./components/Home'))
const NotesList = React.lazy(() => import('./components/NotesList'))

export default () => (
  <Router>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route guest path="/login" exact component={Login} />
        <Route authenticate path="/notes" exact component={NotesList} />
      </Switch>
    </Suspense>
  </Router>
)
