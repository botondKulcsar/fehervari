import { useEffect } from 'react'
import { GiRotaryPhone } from 'react-icons/gi'
import classes from './Psychology.module.css'

const Psychology = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='wrapper'>
      <h1 className='title'>Pszichológia</h1>
      <a className='telephone-link' href='tel:+40720020840'>
        <GiRotaryPhone className='icon' /> <span>0720 020 840</span>
      </a>
      <h4 className='doctor'>Filip Laura pszihológus</h4>

      {/*<div className={classes['img-holder']}>
        <img src={psychiatrist} alt='Dr. Frink-Dienes Eszter' />
      </div>*/}

      <h3 className={classes.subtitle}>Egyéni pszichológiai tanácsadás</h3>
      <p>
        A pszichológiai tanácsadás során kísérjük és támogatjuk szükség esetén
        közvetlen tanácsadással látjuk el a hozzánk forduló klienseket.
        Tanácsadásra érkezhetnek egészen konkrét élethelyzetre vonatkozó
        bizonytalanságokkal, szorongásokkal és elakadásokkal, de lehet cél a
        kiegyensúlyozottság és a mélyebb önismeret felé törekvés.
      </p>
    </div>
  )
}

export default Psychology
