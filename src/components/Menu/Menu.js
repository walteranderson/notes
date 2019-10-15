import React, { Component } from 'react'
import { MdNavigateBefore, MdNavigateNext, MdHome } from 'react-icons/md'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import styles from './Menu.module.css'

export default function Menu({ expanded, onExpand }) {
  const Icon = expanded ? MdNavigateBefore : MdNavigateNext
  const onClick = () => onExpand(!expanded)

  const className = classNames(styles.Container, {
    [styles.Collapsed]: !expanded
  })

  return (
    <div className={className}>
      <Icon className={styles.ExpandIcon} onClick={onClick} />
      <h1>Notes</h1>

      <Link to="/">
        <MdHome />
        Home
      </Link>
      {/* <Link to="/tasks">Tasks</Link> */}
      {/* <Link to="/links">Links</Link> */}
      {/* <Link to="/tags">Tags</Link> */}
    </div>
  )
}
