import { makeActionCreator } from '../../utils/makeActions'
import * as api from '../../api'

// ACTIONS

export const GET_NOTES_SENDING = 'notes/GET_NOTES_SENDING'
export const getNotesSending = makeActionCreator(GET_NOTES_SENDING)

export const GET_NOTES_SUCCESS = 'notes/GET_NOTES_SUCCESS'
export const getNotesSuccess = makeActionCreator(GET_NOTES_SUCCESS, 'notes')

export const GET_NOTES_FAILED = 'notes/GET_NOTES_FAILED'
export const getNotesFailed = makeActionCreator(GET_NOTES_FAILED, 'error')

export const getNotes = () => dispatch => {
  dispatch(getNotesSending())

  return api
    .getNotes()
    .then(notes => dispatch(getNotesSuccess(notes)))
    .catch(err => dispatch(getNotesFailed(err)))
}

// REDUCER

const initialState = {
  data: [],
  sending: false,
  error: null
}

export default (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case GET_NOTES_SENDING:
      return {
        data: [],
        sending: true,
        error: null
      }
    case GET_NOTES_SUCCESS:
      return {
        data: payload.notes,
        sending: false,
        error: null
      }
    case GET_NOTES_FAILED:
      return {
        data: [],
        sending: false,
        error: payload.error
      }
    default:
      return state
  }
}
