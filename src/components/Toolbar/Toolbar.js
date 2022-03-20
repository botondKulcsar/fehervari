import React from 'react'
import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import logo_small from '../../assets/imgs/logo_small.jpeg'
import { Link } from 'react-router-dom'

const Toolbar = ({ drawerClickHandler, show, hide }) => {
  return (
    <header className='toolbar'>
      <nav className='toolbar__navigation'>
        <div className='toolbar__logo'>
          <Link to='/' onClick={hide}>
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
              <Link className='toolbar__navigation-link' to='/csaladorvos'>
                Családorvosi rendelő
              </Link>
            </li>
            <li className='toolbar__navigation-submenu-parent'>
              <span className='toolbar__navigation-link'>Szakrendelés</span>
              <ul className='toolbar__navigation-submenu-items'>
                <li>
                  <Link className='toolbar__navigation-link' to='/kardiologia'>
                    Kardiológia
                  </Link>
                </li>
                <li>
                  <Link className='toolbar__navigation-link' to='/pszichiatria'>
                    Pszichiátria
                  </Link>
                </li>
                <li>
                  <Link className='toolbar__navigation-link' to='/belgyogyaszat'>
                    Belgyógyászat
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className='toolbar__navigation-link' to='/pszichologia'>
                Pszichológia
              </Link>
            </li>
            <li className='toolbar__navigation-submenu-parent'>
              <span className='toolbar__navigation-link'>Orvosok</span>

              <ul className='toolbar__navigation-submenu-items'>
                <li>
                  <Link
                    className='toolbar__navigation-link'
                    to='/orvosok/dr-fehervari-lajos'
                  >
                    Dr. Fehérvári Lajos
                  </Link>
                </li>
                <li>
                  <Link
                    className='toolbar__navigation-link'
                    to='/orvosok/dr-fehervari-lazar-monika'
                  >
                    Dr. Fehérvári Lázár Mónika
                  </Link>
                </li>
                <li>
                  <Link
                    className='toolbar__navigation-link'
                    to='/orvosok/dr-frink-dienes-eszter'
                  >
                    Dr. Frink-Dienes Eszter
                  </Link>
                </li>
                <li>
                  <Link
                    className='toolbar__navigation-link'
                    to='/orvosok/dr-rab-andrea'
                  >
                    Dr. Rab Andrea
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className='toolbar__navigation-link' to='/arak'>
                Árak
              </Link>
            </li>
            <li className='last-item'>
              <Link className='toolbar__navigation-link' to='/kapcsolat'>
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
