import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import Editor from 'rich-markdown-editor'
import { debounce } from 'lodash'

const useStyles = makeStyles({
  root: {},
  editor: {
    padding: '2em 0'
  }
})

export default function Form({ onSubmit }) {
  const styles = useStyles()
  const [form, updateForm] = useState({
    title: '',
    body: ''
  })

  const onNotesChange = debounce(value => {
    updateForm({
      ...form,
      body: value()
    })
  }, 500)

  const onTitleChange = event => {
    updateForm({
      ...form,
      title: event.target.value
    })
  }

  return (
    <form className={styles.root} onSubmit={e => onSubmit(e, form)}>
      <TextField
        fullWidth
        label="Title"
        required
        autoFocus
        margin="normal"
        value={form.title}
        onChange={onTitleChange}
      />

      <Editor className={styles.editor} onChange={onNotesChange} />

      <Button type="submit" size="large" color="primary" variant="contained">
        Save
      </Button>
    </form>
  )
}
