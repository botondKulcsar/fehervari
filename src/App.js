import { useState } from 'react'
import './App.css'

import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import Home from './screens/home/Home'
import { Routes, Route } from 'react-router-dom'
import Cardiology from './screens/Cardiology/Cardiology'
import Footer from './components/Footer/Footer'

function App () {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(() => !sideDrawerOpen)
  }

  const backdropClickHandler = () => {
    setSideDrawerOpen(false)
  }

  return (
    <div style={{ height: '100%' }}>
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} hide={backdropClickHandler} />
      {sideDrawerOpen ? <Backdrop click={backdropClickHandler} /> : null}
      <main style={{ marginTop: '56px' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cardiology' element={<Cardiology />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
