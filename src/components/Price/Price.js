import React from 'react'
import { GiRotaryPhone } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import classes from './Price.module.css'
import physicians from '../../db/physicians'

const Price = ({ price }) => {
  const {
    domain,
    icon,
    physician,
    speciality,
    prices,
    schedule,
    link,
    tel
  } = price
  const person = physicians.find(p => p.displayName === physician)

  return (
    <div className={classes.price}>
      <h2 className={classes.domain}>
        <Link className={classes.domain__link} to={link}>
          <span className={classes.icon__link}>{icon}</span>
          <span>{domain}</span>
        </Link>
      </h2>
      <h3 className={classes.physician}>
        <Link to={person ? `/orvosok/${person.name}` : '/pszichologia'}>
          {physician}
        </Link>
      </h3>
      <p className={classes.speciality}>{speciality}</p>
      {prices.map(p => (
        <p className={classes.label} key={p.name + p.priceInLei}>
          <span>{p.name}</span>
          <span>
            {p.priceInLei} {typeof p.priceInLei === 'number' ? 'lej' : null}
          </span>
        </p>
      ))}
      <p className={classes.label}>
        <span>Időpont foglalás</span>
        <a className={classes.telephone} href={tel}>
          <GiRotaryPhone className={classes.icon} />
          <span>{schedule}</span>
        </a>
      </p>
    </div>
  )
}

export default Price
