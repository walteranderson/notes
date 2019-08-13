import { makeActionCreator } from '../makeActions'
import { HYDRATE_SENDING, HYDRATE_SUCCESS, HYDRATE_FAILED } from './hydrate'
import * as api from '../../api'

// ACTIONS

export const LOGIN_SENDING = 'auth/LOGIN_SENDING'
export const loginSending = makeActionCreator(LOGIN_SENDING)

export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'
export const loginSuccess = makeActionCreator(LOGIN_SUCCESS)

export const LOGIN_FAILED = 'auth/LOGIN_FAILED'
export const loginFailed = makeActionCreator(LOGIN_FAILED, 'error')

export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS'
export const logoutSuccess = makeActionCreator(LOGOUT_SUCCESS)

export const GET_USER_SENDING = 'auth/GET_USER_SENDING'
export const getUserSending = makeActionCreator(GET_USER_SENDING)

export const GET_USER_SUCCESS = 'auth/GET_USER_SUCCESS'
export const getUserSuccess = makeActionCreator(GET_USER_SUCCESS, 'user')

export const GET_USER_FAILED = 'auth/GET_USER_FAILED'
export const getUserFailed = makeActionCreator(GET_USER_FAILED, 'error')

export const getUser = () => dispatch => {
  dispatch(getUserSending())

  return api
    .getUser()
    .then(user => dispatch(getUserSuccess(user)))
    .catch(err => dispatch(getUserFailed(err)))
}

export const login = (email, password) => dispatch => {
  dispatch(loginSending())
  return api
    .login(email, password)
    .then(() => dispatch(getUser()))
    .then(() => dispatch(loginSuccess()))
    .catch(err => dispatch(loginFailed(err)))
}

export const logout = () => dispatch => {
  return api.logout().then(() => dispatch(logoutSuccess()))
}

// REDUCER

const initialState = {
  isAuthenticated: false,
  user: null,

  loginRequest: {
    sending: false,
    error: null
  },
  userRequest: {
    sending: false,
    error: null
  }
}

export default (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case LOGIN_SENDING:
    case HYDRATE_SENDING:
      return {
        ...state,
        isAuthenticated: false,
        loginRequest: {
          sending: true,
          error: null
        }
      }

    case LOGIN_SUCCESS:
    case HYDRATE_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loginRequest: {
          sending: false,
          error: null
        }
      }

    case LOGIN_FAILED:
    case HYDRATE_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        loginRequest: {
          sending: false,
          error: payload.error
        }
      }

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        loginRequest: {
          sending: false,
          error: null
        }
      }

    case GET_USER_SENDING:
      return {
        ...state,
        user: null,
        userRequest: {
          sending: true,
          error: null
        }
      }

    case GET_USER_SUCCESS:
      return {
        ...state,
        user: payload.user,
        userRequest: {
          sending: false,
          error: null
        }
      }

    case GET_USER_FAILED:
      return {
        ...state,
        user: null,
        userRequest: {
          sending: false,
          error: payload.error
        }
      }

    default:
      return state
  }
}
