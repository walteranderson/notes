import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getNotes } from '../../store/modules/notes'
import Loading from '../Loading'
import EmptyNotes from './EmptyNotes'

export default () => {
  const user = useSelector(state => state.auth.user)
  const notes = useSelector(state => state.notes)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNotes())
  }, [dispatch])

  if (notes.sending && !notes.data.length) {
    return <Loading center />
  }

  if (!notes.data.length) {
    return <EmptyNotes />
  }

  return <div>Logged In! {user.email}</div>
}
