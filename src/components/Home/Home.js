import React from 'react'
import { useSelector } from 'react-redux'
import Loading from '../Loading'
import EmptyNotes from './EmptyNotes'

export default () => {
  const notes = useSelector(state => state.notes)

  if (notes.sending && !notes.data.length) {
    return <Loading center />
  }

  if (!notes.data.length && notes.fetched) {
    return <EmptyNotes />
  }

  return <EmptyNotes />
  // return <div>Logged In! {user.email}</div>
}
