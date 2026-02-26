import React from 'react'
import '../styles/Button.css'

const Button = ({text , icon}) => {
  return (
    <button className='GlobalButton'>{icon}{text}</button>
  )
}

export default Button