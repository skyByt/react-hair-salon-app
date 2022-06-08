import React from 'react'


import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Experts from './components/Experts'
import Location from './components/Location'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <About/>
      <Services/>
      <Experts/>
      <Location/>
      <Footer/>
    </>
  )
}

export default App
