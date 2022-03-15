import { useState } from 'react'
import './App.css'

import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
// import Backdrop from './components/Backdrop/Backdrop'
import Home from './screens/home/Home'
import { Routes, Route } from 'react-router-dom'
import Cardiology from './screens/Cardiology/Cardiology'
import Psychiatry from './screens/Psychiatry/Psychiatry'
import InternalMed from './screens/InternalMed/InternalMed'
import FamilyMed from './screens/FamilyMed/FamilyMed'
import Footer from './components/Footer/Footer'
import Container from './components/Container/Container'
import Contact from './screens/Contact/Contact'

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
      <main style={{ marginTop: '56px' }}>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cardiology' element={<Cardiology />} />
            <Route path='/psychiatry' element={<Psychiatry />} />
            <Route path='/internalmed' element={<InternalMed />} />
            <Route path='/familymed' element={<FamilyMed />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App
