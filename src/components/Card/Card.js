import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({ icon, title, content, to }) => {
  return (
    <Link className='card' to={to}>
      <span className='card__icon'>{icon}</span>
      <h3 className='card__title'>{title}</h3>
      <p className='card__content'>Tel: {content}</p>
    </Link>
  )
}

export default Card
