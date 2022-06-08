import React from 'react'


import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Experts from './components/Experts'
import Location from './components/Location'

const App = () => {
  return (
    <>
      <Navbar/>
      <About/>
      <Services/>
      <Experts/>
      <Location/>
    </>
  )
}

export default App
