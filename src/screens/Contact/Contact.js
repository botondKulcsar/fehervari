import { useEffect } from 'react'
import classes from './Contact.module.css'
import { GiRotaryPhone } from 'react-icons/gi'
import { MdEmail, MdLocationPin } from 'react-icons/md'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={classes.content}>
      <div className={classes.description}>
        <h1 className={classes.title}>Elérhetőség</h1>
        <h2 className={classes.subtitle}>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.google.com/maps/place/Str.+Violetelor+6,+T%C3%A2rgu+Mure%C8%99+547176/@46.538436,24.5626635,17z/data=!4m2!3m1!1s0x474bb7b5a99f630b:0x1190a4c1fa269a67'
          >
            <MdLocationPin className='icon' />
          </a>
          <span>Cím</span>
        </h2>
        <p>Marosvásárhely, Románia</p>
        <p>Violetelor utca 6 szám, B tömbház, 3-as ajtó</p>
        <h2 className={classes.subtitle}>
          <a href='tel:+40365424596'>
            <GiRotaryPhone className='icon' />
          </a>
          <span>Telefon</span>
        </h2>
        <p>
          <span>0365 424 596</span>
        </p>
        <h2 className={classes.subtitle}>
          <a href='mailto:cmi.fehervari@yahoo.com'>
            <MdEmail className='icon' />
          </a>
          <span>Email</span>
        </h2>
        <p>
          <span>cmi.fehervari@yahoo.com</span>
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
