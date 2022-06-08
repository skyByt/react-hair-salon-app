import React, {useState} from 'react'
import './navbar.css'

import logo from '../Assets/logo.png'
import {IoMdMenu} from 'react-icons/io'
import {BsScissors} from 'react-icons/bs'
import { Offcanvas, Carousel} from 'react-bootstrap'
import img1 from '../Assets/slide_img_1.jpg'
import img2 from '../Assets/slide_img_2.jpg'
import img3 from '../Assets/slide_img_3.jpg'
import img4 from '../Assets/slide_img_4.jpg'

const Navbar = () => {
   const [show, setShow] = useState(false);
  
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
     <div className='banner-container'>
        <Carousel  className='carousel' controls={false} keyboard={false}>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100 img"
                src={img1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100 img"
                src={img2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100 img"
                src={img3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100 img"
                src={img4}
                alt="Third slide"
              />
            </Carousel.Item>
        </Carousel>
        <nav className='navbar container-fluid'>
          <a className='navbar-brand' href='#'>
            <img src={logo} alt="logo"/>
            <h1>bianchi</h1>
            <span>p r o f e s s i o n a l</span>
          </a>
          <ul className='navbar-links'>
            <li><a className='navbar-link' href='#about'>About</a></li>
            <li><a className='navbar-link' href='#services'>Services</a></li>
            <li><a className='navbar-link' href='#'>Location</a></li>
          </ul>
          <div className='navbar-contact'>
            <a className='phone' href="tel:343-456-3000">343-456-3000</a>
            <IoMdMenu className='navbar-expand-icon' color='#fff' fontSize={35} onClick={handleShow}/>
          </div>
          <Offcanvas id='sidebar' show={show} onHide={handleClose} placement='end' scroll='true' width={100}>
            <Offcanvas.Body id='sidebar-body'>
              <BsScissors className='sidebar-icon' onClick={handleClose}/>
              <ul className='sidebar-links'>
                  <li><a className='sidebar-link' href='#' onClick={handleClose}>About</a></li>
                  <li><a className='sidebar-link' href='#' onClick={handleClose}>Services</a></li>
                  <li><a className='sidebar-link' href='#' onClick={handleClose}>Awards</a></li>
                  <li><a className='sidebar-link d-block d-sm-none' href='#' onClick={handleClose}>Book now</a></li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </nav>
        <div className='sub-header container-fluid'>
          <h2>the cut you trust</h2>
          <span>Classic barbershop for men </span>
          <a className='container-fluid-button' href='#'>Book now</a>
        </div>
     </div>
  )
}
export default Navbar
