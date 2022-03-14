import React from 'react'
import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import logo_small from '../../assets/imgs/logo_small.jpeg'
import { Link } from 'react-router-dom'

const Toolbar = ({ drawerClickHandler }) => {
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
          <DrawerToggleButton click={drawerClickHandler} />
        </div>
        <div className='toolbar__navigation-items'>
          <ul className='toolbar__navigation-items-list'>
            <li>
              <Link className='toolbar__navigation-link' to='/'>
                Családorvosi rendelő
              </Link>
            </li>
            <li className='toolbar__navigation-submenu-parent'>
              <Link className='toolbar__navigation-link' to='/'>
                Szakrendelés
              </Link>
              <ul className='toolbar__navigation-submenu-items'>
                <li>
                  <Link className='toolbar__navigation-link' to='/cardiology'>
                    Kardiológia
                  </Link>
                </li>
                <li>
                  <Link className='toolbar__navigation-link' to='/'>
                    Pszihiátria
                  </Link>
                </li>
                <li>
                  <Link className='toolbar__navigation-link' to='/'>
                    Pszihológia
                  </Link>
                </li>
                <li>
                  <Link className='toolbar__navigation-link' to='/'>
                    Belgyógyászat
                  </Link>
                </li>
              </ul>
            </li>
            <li className='toolbar__navigation-submenu-parent'>
              <Link className='toolbar__navigation-link' to='/'>
                Orvosok
              </Link>

              <ul className='toolbar__navigation-submenu-items'>
                <li>
                  <Link className='toolbar__navigation-link' to='/'>
                    Dr. Fehérvári Lajos
                  </Link>
                </li>
                <li>
                  <Link className='toolbar__navigation-link' to='/'>
                    Dr. Frink-Dienes Eszter
                  </Link>
                </li>
                <li>
                  <Link className='toolbar__navigation-link' to='/'>
                    Dr. Filip Laura
                  </Link>
                </li>
                <li>
                  <Link className='toolbar__navigation-link' to='/'>
                    Dr. Rab Andrea
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className='toolbar__navigation-link' to='/'>
                Árak
              </Link>
            </li>
            <li className='last-item'>
              <Link className='toolbar__navigation-link' to='/'>
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
