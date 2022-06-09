import React from 'react'

import './about.css'
import img from '../Assets/about-img.jpg'

const About = () => {
  return (
    <div className='container-fluid'>
          <div id='about' className='wrapper row'>
      <div className='img col-xs-12 col-sm-12 col-md-6'>
      <img src={img} className='img-flex' width={400} alt='barbershop'/>
      </div>
      <div className='info col-xs-12 col-sm-12 col-md-6'>
        <span className='about'>about</span>
        <p>
          From any old school shave or classic haircut style to even the most popular current ones, 
          our barbers create amazing looks that enhance people's appearance and get them noticed whether 
          they like it or not.
        </p>
      </div>
    </div>
    </div>
  )
}

export default About
