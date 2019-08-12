import * as api from '../../api'
import {
  loginSending,
  loginSuccess,
  logout,
  getUserSuccess,
  getUserFailed
} from './auth'

/**
 * Make any initialization calls on app load to set our redux state.
 * If we have an auth token, fetch the user to determine if that token is still valid.
 */
const init = () => dispatch => {
  if (!api.hasToken()) {
    return
  }

  dispatch(loginSending())

  return api
    .getUser()
    .then(user => {
      dispatch(getUserSuccess(user))
      dispatch(loginSuccess())
    })
    .catch(err => {
      dispatch(getUserFailed(err))
      dispatch(logout())
    })
}

export default init
