import { useEffect } from 'react'
import './SideDrawer.css'
import { Link } from 'react-router-dom'

const SideDrawer = ({ show, hide }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  let drawerClasses = 'side-drawer'

  if (show) {
    drawerClasses = 'side-drawer open'
  }

  return (
    <nav className={drawerClasses}>
      <ul className='side-drawer__items'>
        <li>
          <Link
            className='sidebar__navigation-link'
            to='/csaladorvos'
            onClick={hide}
          >
            Családorvosi rendelő
          </Link>
        </li>
        <li className='sidebar__navigation-submenu-parent'>
          <label htmlFor='submenu' className='sidebar__navigation-link'>
            Szakrendelés
          </label>
          <input type='checkbox' id='submenu' />
          <ul className='sidebar__navigation-submenu-items types'>
            <li>
              <Link
                className='sidebar__navigation-link'
                to='/kardiologia'
                onClick={hide}
              >
                Kardiológia
              </Link>
            </li>
            <li>
              <Link
                className='sidebar__navigation-link'
                to='/pszichiatria'
                onClick={hide}
              >
                Pszichiátria
              </Link>
            </li>

            <li>
              <Link
                className='sidebar__navigation-link'
                to='/belgyogyaszat'
                onClick={hide}
              >
                Belgyógyászat
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            className='sidebar__navigation-link'
            to='/pszichologia'
            onClick={hide}
          >
            Pszichológia
          </Link>
        </li>
        <li className='sidebar__navigation-submenu-parent'>
          <label htmlFor='submenu1' className='sidebar__navigation-link'>
            Orvosok
          </label>
          <input type='checkbox' id='submenu1' />
          <ul className='sidebar__navigation-submenu-items physicians'>
            <li>
              <Link
                className='sidebar__navigation-link'
                to='/orvosok/dr-fehervari-lajos'
                onClick={hide}
              >
                Dr. Fehérvári Lajos
              </Link>
            </li>
            <li>
              <Link
                className='sidebar__navigation-link'
                to='/orvosok/dr-fehervari-lazar-monika'
                onClick={hide}
              >
                Dr. Fehérvári Lázár Mónika
              </Link>
            </li>
            <li>
              <Link
                className='sidebar__navigation-link'
                to='/orvosok/dr-frink-dienes-eszter'
                onClick={hide}
              >
                Dr. Frink-Dienes Eszter
              </Link>
            </li>
            <li>
              <Link
                className='sidebar__navigation-link'
                to='/orvosok/dr-rab-andrea'
                onClick={hide}
              >
                Dr. Rab Andrea
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            className='sidebar__navigation-link'
            to='/arak'
            onClick={hide}
          >
            Árak
          </Link>
        </li>
        <li>
          <Link
            className='sidebar__navigation-link'
            to='/kapcsolat'
            onClick={hide}
          >
            Kapcsolat
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideDrawer
