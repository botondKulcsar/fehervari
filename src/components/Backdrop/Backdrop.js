import React from 'react'
import './Backdrop.css'

const Backdrop = ({ click }) => {
  return <div onClick={click} className='backdrop'></div>
}

export default Backdrop
