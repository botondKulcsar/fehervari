import React from 'react'
import classes from './Footer.module.css'
import { GiRotaryPhone } from 'react-icons/gi'
import { MdEmail, MdLocationPin } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.flex}>
        <div className={classes.address}>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.google.com/maps/place/Str.+Violetelor+6,+T%C3%A2rgu+Mure%C8%99+547176/@46.538436,24.5626635,17z/data=!4m2!3m1!1s0x474bb7b5a99f630b:0x1190a4c1fa269a67'
          >
            <MdLocationPin className={classes.icon} />
            {/*  <span>Str.Violetelor nr.6</span>
            <span>bl.B ap.3</span> */}
          </a>
        </div>
        <div className={classes.phone}>
          <a href='tel:+40365424596'>
            <GiRotaryPhone className={classes.icon} />
            <span>0365 424 596</span>
          </a>
        </div>
        <div className={classes.email}>
          <a href='mailto:cmi.fehervari@yahoo.com'>
            <MdEmail className={classes.icon} />
            {/* <span>cmi.fehervari@yahoo.com</span> */}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
