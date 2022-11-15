import React from 'react'
import About from '../components/About'
import Boxes from '../components/Boxes'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'

function LandingPages() {
  return (
    <div className='container'>
      <Header />
      <Hero />
      <Boxes />
      <About />
      <Footer />
    </div>
  )
}

export default LandingPages
