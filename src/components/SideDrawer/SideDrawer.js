import React from 'react'
import './SideDrawer.css'
import { Link } from 'react-router-dom'

const SideDrawer = ({ show, hide }) => {
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
            to='/familymed'
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
                to='/cardiology'
                onClick={hide}
              >
                Kardiológia
              </Link>
            </li>
            <li>
              <Link
                className='sidebar__navigation-link'
                to='/psychiatry'
                onClick={hide}
              >
                Pszihiátria
              </Link>
            </li>

            <li>
              <Link
                className='sidebar__navigation-link'
                to='/internalmed'
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
            to='/psychology'
            onClick={hide}
          >
            Pszihológia
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
                to='/physicians/dr-fehervari-lajos'
                onClick={hide}
              >
                Dr. Fehérvári Lajos
              </Link>
            </li>
            <li>
              <Link
                className='sidebar__navigation-link'
                to='/physicians/dr-fehervari-lazar-monika'
                onClick={hide}
              >
                Dr. Fehérvári Lázár Mónika
              </Link>
            </li>
            <li>
              <Link
                className='sidebar__navigation-link'
                to='/physicians/dr-frink-dienes-eszter'
                onClick={hide}
              >
                Dr. Frink-Dienes Eszter
              </Link>
            </li>
            <li>
              <Link
                className='sidebar__navigation-link'
                to='/physicians/dr-rab-andrea'
                onClick={hide}
              >
                Dr. Rab Andrea
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link className='sidebar__navigation-link' to='/' onClick={hide}>
            Árak
          </Link>
        </li>
        <li>
          <Link
            className='sidebar__navigation-link'
            to='/contact'
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
