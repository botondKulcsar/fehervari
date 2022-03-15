import React from 'react'
import './DrawerToggleButton.css'

const DrawerToggleButton = ({ click, show }) => {
  let first = 'toggle-button__line'
  let middle = 'toggle-button__line'
  let last = 'toggle-button__line'

  if (show) {
    first = 'toggle-button__line crossed-first'
    middle = 'toggle-button__line crossed-middle'
    last = 'toggle-button__line crossed-last'
  }

  return (
    <button onClick={click} className='toggle-button'>
      <div className={first}></div>
      <div className={middle}></div>
      <div className={last}></div>
    </button>
  )
}

export default DrawerToggleButton
