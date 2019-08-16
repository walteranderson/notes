import React from 'react'
import { Switch } from 'react-router-dom'
// import Slide from '@material-ui/core/Slide'

import AuthRoute from '../AuthRoute'
import Create from './Create'
import List from './List'

export default ({ match }) => {
  return (
    <Switch>
      <AuthRoute path={match.path} exact component={List} />
      <AuthRoute path={`${match.path}/create`} exact component={Create} />
    </Switch>
  )
}
