import React from 'react'
import './backdrop.css'

const Backdrop = (props) => {
  return (
    <div className='backdrop' onClick={props.onCancel}/>
  )
}

export default Backdrop