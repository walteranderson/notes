import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AuthRoute from './components/AuthRoute'
import UnAuthRoute from './components/UnAuthRoute'
import Layout from './components/Layout'
import Login from './components/Login'
import Home from './components/Home'
import Notes from './components/Notes'

export default () => (
  <Router>
    <Layout>
      <Route path="/" exact component={Home} />
      <UnAuthRoute path="/login" exact component={Login} />
      <AuthRoute path="/notes" component={Notes} />
    </Layout>
  </Router>
)
