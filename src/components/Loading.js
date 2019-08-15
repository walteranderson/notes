import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  center: {
    display: 'flex',
    justifyContent: 'center'
  }
})

export default ({ center = true }) => {
  const styles = useStyles()

  if (center) {
    return (
      <div className={styles.center}>
        <CircularProgress />
      </div>
    )
  }

  return <CircularProgress />
}
