import React from 'react'
import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import logo_small from '../../assets/imgs/logo_small.jpeg'
import { Link } from 'react-router-dom'

const Toolbar = ({ drawerClickHandler, show }) => {
  return (
    <header className='toolbar'>
      <nav className='toolbar__navigation'>
        <div className='toolbar__logo'>
          <Link to='/'>
            <img src={logo_small} alt='Fehervari Medcenter Logo' />
          </Link>
        </div>
        <div className='spacer'></div>
        <div className='toolbar__toggle-button'>
          <DrawerToggleButton click={drawerClickHandler} show={show} />
        </div>
        <div className='toolbar__navigation-items'>
          <ul className='toolbar__navigation-items-list'>
            <li>
              <Link className='toolbar__navigation-link' to='/familymed'>
                Családorvosi rendelő
              </Link>
            </li>
            <li className='toolbar__navigation-submenu-parent'>
              <span className='toolbar__navigation-link'>Szakrendelés</span>
              <ul className='toolbar__navigation-submenu-items'>
                <li>
                  <Link className='toolbar__navigation-link' to='/cardiology'>
                    Kardiológia
                  </Link>
                </li>
                <li>
                  <Link className='toolbar__navigation-link' to='/psychiatry'>
                    Pszichiátria
                  </Link>
                </li>
                <li>
                  <Link className='toolbar__navigation-link' to='/internalmed'>
                    Belgyógyászat
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className='toolbar__navigation-link' to='/psychology'>
                Pszichológia
              </Link>
            </li>
            <li className='toolbar__navigation-submenu-parent'>
              <span className='toolbar__navigation-link'>Orvosok</span>

              <ul className='toolbar__navigation-submenu-items'>
                <li>
                  <Link
                    className='toolbar__navigation-link'
                    to='/physicians/dr-fehervari-lajos'
                  >
                    Dr. Fehérvári Lajos
                  </Link>
                </li>
                <li>
                  <Link
                    className='toolbar__navigation-link'
                    to='/physicians/dr-fehervari-lazar-monika'
                  >
                    Dr. Fehérvári Lázár Mónika
                  </Link>
                </li>
                <li>
                  <Link
                    className='toolbar__navigation-link'
                    to='/physicians/dr-frink-dienes-eszter'
                  >
                    Dr. Frink-Dienes Eszter
                  </Link>
                </li>
                <li>
                  <Link
                    className='toolbar__navigation-link'
                    to='/physicians/dr-rab-andrea'
                  >
                    Dr. Rab Andrea
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className='toolbar__navigation-link' to='/prices'>
                Árak
              </Link>
            </li>
            <li className='last-item'>
              <Link className='toolbar__navigation-link' to='/contact'>
                Kapcsolat
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Toolbar
