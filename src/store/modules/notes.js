import { makeActionCreator } from '../makeActions'
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

export const CREATE_NOTE_SENDING = 'notes/CREATE_NOTE_SENDING'
export const createNoteSending = makeActionCreator(CREATE_NOTE_SENDING)

export const CREATE_NOTE_SUCCESS = 'notes/CREATE_NOTE_SUCCESS'
export const createNoteSuccess = makeActionCreator(CREATE_NOTE_SUCCESS, 'note')

export const CREATE_NOTE_FAILED = 'notes/CREATE_NOTE_FAILED'
export const createNoteFailed = makeActionCreator(CREATE_NOTE_FAILED, 'error')

export const createNote = payload => dispatch => {
  dispatch(createNoteSending())

  return api
    .createNote(payload)
    .then(note => dispatch(createNoteSuccess(note)))
    .catch(err => dispatch(createNoteFailed(err)))
}

// REDUCER

const initialState = {
  data: [],
  sending: false,
  fetched: false,
  error: null
}

export default (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case GET_NOTES_SENDING:
      return {
        data: [],
        sending: true,
        fetched: false,
        error: null
      }
    case GET_NOTES_SUCCESS:
      return {
        data: payload.notes,
        sending: false,
        fetched: true,
        error: null
      }
    case GET_NOTES_FAILED:
      return {
        data: [],
        sending: false,
        fetched: false,
        error: payload.error
      }
    default:
      return state
  }
}
