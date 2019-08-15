import React from 'react'
import Fab from '@material-ui/core/Fab'
import Box from '@material-ui/core/Box'
import AddIcon from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <Box mx="auto" width="40%" textAlign="center">
      <Typography gutterBottom>
        You don't seem to have any notes, why not create one?
      </Typography>
      <Fab
        to="/notes/create"
        component={Link}
        variant="extended"
        color="primary"
        aria-label="add"
      >
        <AddIcon />
        Add Note
      </Fab>
    </Box>
  )
}
