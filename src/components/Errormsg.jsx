import React from 'react'
import './Errormsg.css'

export const Errormsg = (props) => {
  return (
    <h1  className="error-message">{props.children}</h1>
  )
}
