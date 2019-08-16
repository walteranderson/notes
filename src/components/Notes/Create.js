import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import ClearIcon from '@material-ui/icons/Clear'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { withRouter } from 'react-router'
import { useDispatch } from 'react-redux'
import { createNote } from '../../store/modules/notes'
import Form from './Form'

const useStyles = makeStyles({
  root: {
    padding: '2em 2.5em'
  },
  back: {
    cursor: 'pointer',
    float: 'right'
  }
})

const Create = ({ history }) => {
  const styles = useStyles()
  const dispatch = useDispatch()
  const goBack = () => history.goBack()

  const onSubmit = (e, form) => {
    e.preventDefault()
    dispatch(createNote(form))
  }

  return (
    <Paper className={styles.root}>
      <Typography variant="h5" display="inline">
        Create Note
      </Typography>
      <IconButton className={styles.back} size="small" onClick={goBack}>
        <ClearIcon />
      </IconButton>
      <Form onSubmit={onSubmit} />
    </Paper>
  )
}

export default withRouter(Create)
