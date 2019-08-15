import React from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/styles'

import Navbar from './Navbar'

const useStyles = makeStyles({
  container: {
    marginTop: '1rem',
    height: 'calc(100vh - 80px)'
  }
})

export default function Layout({ children }) {
  const styles = useStyles()

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container className={styles.container} maxWidth="lg">
        {children}
      </Container>
    </>
  )
}
