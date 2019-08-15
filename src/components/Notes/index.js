import React from 'react'
import AuthRoute from '../AuthRoute'
import Create from './Create'

export default ({ match }) => {
  return (
    <>
      <AuthRoute path={`${match.path}/create`} component={Create} />
    </>
  )
}
