import React, { useState } from 'react'
import Menu from '../Menu'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
  const [expanded, setExpanded] = useState(true)

  return (
    <div className={styles.Container}>
      <Menu expanded={expanded} onExpand={setExpanded} />
      <div className={styles.Content}>{children}</div>
    </div>
  )
}

export default Layout
