import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loading from './Loading'
import { getNotes } from '../store/modules/notes'

export default () => {
  const dispatch = useDispatch()
  const notes = useSelector(state => state.notes)

  useEffect(() => {
    dispatch(getNotes())
  }, [dispatch])

  if (notes.sending) {
    return <Loading />
  }

  return (
    <div>
      <p>Notes</p>
      <ul>
        {notes.data.map(note => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </div>
  )
}
