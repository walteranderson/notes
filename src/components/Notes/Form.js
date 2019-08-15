import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  root: {},
  editor: {
    padding: '2em 0'
  }
})

export default ({ onSubmit }) => {
  const styles = useStyles()

  return (
    <form className={styles.root} onSubmit={onSubmit}>
      <TextField fullWidth label="Title" required autoFocus margin="normal" />

      <Button type="submit" size="large" color="primary" variant="contained">
        Save
      </Button>
    </form>
  )
}
