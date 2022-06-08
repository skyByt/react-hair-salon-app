import React from 'react'


import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Experts from './components/Experts'

const App = () => {
  return (
    <div id='parent'>
      <Navbar/>
      <About/>
      <Services/>
      <Experts/>
    </div>
  )
}

export default App
