import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'

import { logout } from '../../store/modules/auth'

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    cursor: 'pointer'
  }
})

const LoggedInActions = () => {
  const dispatch = useDispatch()
  const onLogout = () => dispatch(logout())

  return (
    <Button onClick={onLogout} color="inherit">
      Logout
    </Button>
  )
}

const LoggedOutActions = () => (
  <Button component={Link} to="/login" color="inherit">
    Login
  </Button>
)

const Navbar = () => {
  const styles = useStyles()
  const authenticated = useSelector(state => state.auth.isAuthenticated)

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography
          to="/"
          variant="h6"
          color="inherit"
          component={Link}
          className={styles.title}
        >
          Notes
        </Typography>
        {authenticated ? <LoggedInActions /> : <LoggedOutActions />}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
