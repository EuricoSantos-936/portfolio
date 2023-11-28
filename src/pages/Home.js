import React from 'react'
import Navigationbar from '../components/Navbar'
import Home from '../components/Homepage'
import Footer from '../components/Footer'

function Homepage() {
  return (
    <div>
      <Navigationbar />
      <Home />
      <Footer />
    </div>
  )
}

export default Homepage