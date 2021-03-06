import { useEffect } from 'react'
import classes from './FamilyMed.module.css'
import familyMed from '../../assets/imgs/familyMed.jpeg'
import { GiRotaryPhone } from 'react-icons/gi'
import {Link} from 'react-router-dom'


const Psychiatry = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='wrapper'>
      <div className={classes['flex-container']}>
        <div>
          <h1 className='title'>Családorvosi rendelő</h1>
          <a className='telephone-link' href='tel:+40365424596'>
            <GiRotaryPhone className='icon' /> <span>0365 424 596</span>
          </a>
          <h4 className='doctor'><Link to='/orvosok/dr-fehervari-lazar-monika'>Dr. Fehérvári Lázár Mónika</Link></h4>
          <h4 className='doctor'>Dr. Bartel Klára</h4>
          <h4 className='doctor'>Rácz Emőke Irén általános asszisztens</h4>
          <h4 className='doctor'>Bárczi Emőke Ildikó védőnő</h4>
        </div>
        <div className={classes['img-holder']}>
          <img src={familyMed} alt='Dr. Fehérvári Lázár Mónika' />
        </div>
      </div>

      <p>
        Az alapellátásban dolgozó orvosok és munkatársaik az egészségügyi ellátó
        rendszer mindenesei. Ismerniük kell az orvostudomány, a szociális
        szolgáltató rendszer minden szeletét, és a hozzájuk tartozó törvényeket
      </p>

      <p>
        Munkájuk során a hozzájuk tartozó alapellátási egység, vagyis ismertebb
        nevén a háziorvosi körzet minden, életmódbeli és betegségi gyakran
        családi problémáival foglalkozni kell. Munkájukat a rendeléseken, a
        betegek lakásán, a környezetükben észlelhető megoldásra váró
        problémákkal együttesen jelentkező gyógyító, gondozó és megelőző
        feladatok határozzák meg.
      </p>

      <p>
        A háziorvosa jut eszébe először a betegnek, amikor a betegség bármilyen
        tünetét észleli magán, mert a kapcsolat vele, vagy családjával,
        környezetével mindennapos. A háziorvosától várja testi, lelki, szociális
        problémáinak lehetőség szerinti megoldását, vagy annak az útnak a
        megjelölését, amelyen az elindítható.
      </p>
      <p>
        A háziorvos megfelel ennek a kihívásnak, mert képzettsége, tapasztalata,
        átfogja mindazokat az ismereteket, amelyek ahhoz szükségesek, hogy
        meggyógyítsa a hozzá fordulót. Amikor a megbetegedés tünetei meghaladják
        lehetőségeit, feladata a megfelelő szakorvosokhoz, kórházakhoz,
        klinikákhoz irányítani betegeit. A háziorvos feladata, hogy
        tájékoztasson minden egészségét épnek érző embert arról, hogy annak
        megőrzése milyen szűrési, életmódbeli, szociális utakon érhető el. Az
        alapellátás területén szabad orvosválasztás van, a biztosítottak
        szabadon választhatnak háziorvost.
      </p>
    </div>
  )
}

export default Psychiatry
