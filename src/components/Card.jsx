import React from 'react'
import './css/Home.css'

const Card = ({c}) => {
  return (
    <div className='card'>
      <img src={c} alt="d" />
    </div>
  )
}

export default Card