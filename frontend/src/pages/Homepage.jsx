import React from 'react'
import Navbar from '../components/Navbar'

import CityCardGrid from '../components/Citygrid'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CityCardGrid/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Homepage