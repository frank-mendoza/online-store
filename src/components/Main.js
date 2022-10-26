import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar } from './Navbar'
import About from './sections/About'
import Footer from './sections/Footer'
import Home from './sections/Home'
import Testimonials from './sections/Testimonials'
import Sidebar from './Sidebar'

const Main = () => {

  const [toggle, setToggle] = useState(true)

  const openSidebar = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <Router>
        <Navbar
          openSidebar={openSidebar}
        />
        <Sidebar
          toggle={toggle}
          openSidebar={openSidebar}
        />
        <Routes>
          <Route path="/online-store" element={
            <>
              <Home />
              <About />
              <Testimonials />
              <Footer />
            </>
          } />
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found etc</h2>
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default Main