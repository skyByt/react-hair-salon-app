import React, {useState} from 'react'
import './navbar.css'

import logo from '../Assets/Untitled.png'
import {IoMdMenu} from 'react-icons/io'
import {BsScissors} from 'react-icons/bs'
import { Offcanvas, Nav, Container } from 'react-bootstrap'

const Header = () => {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
    <nav className='navbar'>
        <a className='navbar-brand' href='#'>
          <img src={logo} alt="logo"/>
          <h1>bianchi</h1>
          <span>p r o f e s s i o n a l</span>
        </a>
        <ul className='navbar-links'>
          <li><a className='navbar-link' href='#'>About</a></li>
          <li><a className='navbar-link' href='#'>Services</a></li>
          <li><a className='navbar-link' href='#'>Awards</a></li>
        </ul>
        <div className='navbar-contact'>
          <a className='book' href='#'>Book Online</a>
          <div/>
          <a className='phone' href="tel:343-456-3000">343-456-3000</a>
          <IoMdMenu className='navbar-expand-icon' color='#fff' fontSize={35} onClick={handleShow}/>
        </div>
        <Offcanvas id='sidebar' show={show} onHide={handleClose} placement='end' scroll='true' width={100}>
          <Offcanvas.Body id='sidebar-body'>
            <BsScissors className='sidebar-icon' onClick={handleClose}/>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Container className='sidebar-links'>
                <Nav.Link className='sidebar-link' href='#' onClick={handleClose}>About</Nav.Link>
                <Nav.Link className='sidebar-link' href='#' onClick={handleClose}>Services</Nav.Link>
                <Nav.Link className='sidebar-link' href='#' onClick={handleClose}>Awards</Nav.Link>
              </Container>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
    </nav>
  )
}
export default Header
