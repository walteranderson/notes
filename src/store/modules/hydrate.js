import * as api from '../../api'
import { makeActionCreator } from '../makeActions'
import { getUserSuccess } from './auth'
import { getNotesSuccess } from './notes'

export const HYDRATE_SENDING = 'auth/HYDRATE_SENDING'
export const hydrateSending = makeActionCreator(HYDRATE_SENDING)

export const HYDRATE_SUCCESS = 'auth/HYDRATE_SUCCESS'
export const hydrateSuccess = makeActionCreator(HYDRATE_SUCCESS)

export const HYDRATE_FAILED = 'auth/HYDRATE_FAILED'
export const hydrateFailed = makeActionCreator(HYDRATE_FAILED, 'error')

/**
 * Make any initialization calls on app load to set our redux state.
 * If we have an auth token, fetch the user to determine if that token is still valid.
 */
export const hydrate = () => dispatch => {
  if (!api.hasToken()) {
    return
  }

  dispatch(hydrateSending())

  return api
    .getUser()
    .then(user => {
      const { notes } = user
      delete user.notes

      dispatch(getUserSuccess(user))
      dispatch(getNotesSuccess(notes))
      dispatch(hydrateSuccess())
    })
    .catch(err => {
      dispatch(hydrateFailed(err))
      // return api.logout()
    })
}
