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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
          commodo consequat.
        </p>
      </div>
    </div>
    </div>
  )
}

export default About
