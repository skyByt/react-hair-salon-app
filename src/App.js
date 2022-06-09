import React, {useState} from 'react'


import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Experts from './components/Experts'
import Location from './components/Location'
import Confirmation from './components/Confirmation'
import Book from './components/Book'
import Footer from './components/Footer'

const App = () => {
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <>
      <Navbar setHide={setHide}/>
      <About/>
      <Services/>
      <Experts/>
      <Location setHide={setHide}/>
      {show && <Confirmation setShow={setShow}/>}
      {hide && <Book setHide={setHide} setShow={setShow}/>}
      <Footer/>
    </>
  )
}

export default App
