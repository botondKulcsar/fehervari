import { useEffect } from 'react'
import classes from './Physician.module.css'
import { useParams } from 'react-router-dom'

import physicians from '../../db/physicians'

const Physician = () => {
  const { name } = useParams()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [name])

  const physician = physicians.find(ph => ph.name === name)

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.name}>{physician.displayName}</h1>
      <div className={classes.flex}>
        <div className={classes.description}>
          <h2>Szakterületek</h2>
          <ul>
            {physician.fields.map(f => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <h2>Végzettségek</h2>
          <ul>
            {physician.education.map(ed => (
              <li key={ed}>{ed}</li>
            ))}
          </ul>
          {physician.services.length ? (
            <>
              <h2>Szolgáltatások</h2>
              <ul>
                {physician.services.map(s => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
        {physician.img ? (
          <div className={classes.imgholder}>
            <img src={physician.img} alt={physician.displayName} />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Physician
