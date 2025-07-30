import React from 'react'
import Navbar from './components/Navbar'

import CityCardGrid from './components/Citygrid'
import Hero from './components/Hero'
import About from './components/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>

      <CityCardGrid/>
      <About/>
    </div>
  )
}

export default App