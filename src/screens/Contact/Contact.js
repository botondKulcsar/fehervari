import React from 'react'
import classes from './Contact.module.css'
import { GiRotaryPhone } from 'react-icons/gi'
import { MdEmail, MdLocationPin } from 'react-icons/md'

const Contact = () => {
  return (
    <div className={classes.content}>
      <div className={classes.description}>
        <h1 className={classes.title}>Elérhetőség</h1>
        <h2 className={classes.subtitle}>
          <MdLocationPin />
          <span>Cím</span>
        </h2>
        <p>Marosvásárhely, Románia</p>
        <p>Violetelor utca 42 szám, B tömbház, 3-as apartman</p>
        <h2 className={classes.subtitle}>
          <GiRotaryPhone />
          <span>Telefon</span>
        </h2>
        <p>
          <a className={classes.telephone} href='tel:+40365424596'>
            0365 424 596
          </a>
        </p>
        <h2 className={classes.subtitle}>
          <MdEmail />
          <span>Email</span>
        </h2>
        <p>
          <a className={classes.email} href='mailto:cmi.fehervari@yahoo.com'>
            cmi.fehervari@yahoo.com
          </a>
        </p>
      </div>
      <iframe
        className={classes.iframe}
        title='map'
        width='600'
        height='450'
        style={{ border: 0 }}
        loading='lazy'
        allowFullScreen
        src='https://www.google.com/maps/embed/v1/place?q=place_id:ChIJC2OfqbW3S0cRZ5om-sGkkBE&key=AIzaSyDk4NFB5iqKjtdBaB_lHmulwRJ4_QpzIv8'
      ></iframe>
    </div>
  )
}

export default Contact
