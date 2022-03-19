import { useEffect } from 'react'
import classes from './PricesList.module.css'
import Price from '../../components/Price/Price'
import { RiHeartPulseLine } from 'react-icons/ri'
import { RiPsychotherapyLine } from 'react-icons/ri'
import { MdOutlinePsychology } from 'react-icons/md'
import { MdOutlineMedication } from 'react-icons/md'

const prices = [
  {
    domain: 'Kardiológia',
    link: '/kardiologia',
    icon: <RiHeartPulseLine />,
    physician: 'Dr. Fehérvári Lajos',
    speciality: 'kardiológus szakorvos',
    prices: [{ name: 'Konzultáció + EKG + ekográfia', priceInLei: 200 }],
    schedule: '0745 372 390',
    tel: 'tel:+40745372390'
  },
  {
    domain: 'Pszichiátria',
    link: '/pszichiatria',
    icon: <RiPsychotherapyLine />,
    physician: 'Dr. Frink-Dienes Eszter',
    speciality: 'pszichiáter szakorvos',
    prices: [
      { name: 'Konzultáció küldőpapírral', priceInLei: 'INGYENES' },
      { name: 'Konzultáció küldőpapír nélkül', priceInLei: 100 }
    ],
    schedule: '0743 992 618',
    tel: 'tel:+40743992618'
  },
  {
    domain: 'Pszichológia',
    link: '/pszichologia',
    icon: <MdOutlinePsychology />,
    physician: 'Dr. Filip Laura',
    speciality: 'pszichológus',
    prices: [{ name: 'Konzultáció', priceInLei: 120 }],
    schedule: '0720 020 840',
    tel: 'tel:+40720020840'
  },
  {
    domain: 'Belgyógyászat',
    link: '/belgyogyaszat',
    icon: <MdOutlineMedication />,
    physician: 'Dr. Rab Andrea',
    speciality: 'belgyógyász szakorvos',
    prices: [
      { name: 'Konzultáció', priceInLei: 100 },
      { name: 'Hasi ekográfia', priceInLei: 100 },
      { name: 'Artériás és vénás ekográfia', priceInLei: 100 }
    ],
    schedule: '0745 329 753',
    tel: 'tel:+40745329753'
  }
]

const PricesList = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='wrapper'>
      <h1 className='title'>Árak</h1>
      <div className={classes.prices}>
        {prices.map(p => (
          <Price key={p.domain} price={p} />
        ))}
      </div>
    </div>
  )
}

export default PricesList
