import { useState } from 'react'
import './App.css'

import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
// import Backdrop from './components/Backdrop/Backdrop'
import Home from './screens/home/Home'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Container from './components/Container/Container'
import Cardiology from './screens/Cardiology/Cardiology'
import Psychiatry from './screens/Psychiatry/Psychiatry'
import Psychology from './screens/Psychology/Psychology'
import InternalMed from './screens/InternalMed/InternalMed'
import FamilyMed from './screens/FamilyMed/FamilyMed'
import Contact from './screens/Contact/Contact'
import Physician from './screens/Physician/Physician'
import PricesList from './screens/PricesList/PricesList'

function App () {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(() => !sideDrawerOpen)
  }

  const backdropClickHandler = () => {
    setSideDrawerOpen(false)
  }

  return (
    <div className='app-wrapper'>
      <header>
        <Toolbar
          drawerClickHandler={drawerToggleClickHandler}
          show={sideDrawerOpen}
        />
        <SideDrawer show={sideDrawerOpen} hide={backdropClickHandler} />
      </header>
      {/*sideDrawerOpen ? <Backdrop click={backdropClickHandler} /> : null */}
      <main>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/kardiologia' element={<Cardiology />} />
            <Route path='/pszichiatria' element={<Psychiatry />} />
            <Route path='/belgyogyaszat' element={<InternalMed />} />
            <Route path='/csaladorvos' element={<FamilyMed />} />
            <Route path='/pszichologia' element={<Psychology />} />
            <Route path='/orvosok/:name' element={<Physician />} />
            <Route path='/kapcsolat' element={<Contact />} />
            <Route path='/arak' element={<PricesList />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App
