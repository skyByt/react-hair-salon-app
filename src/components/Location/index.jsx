import React from 'react'
import './location.css'

import blade from '../Assets/razor_blade.png'

const Location = () => {
  return (
    <div id='findUs'>
      <h2>Find Us</h2>
      <div className='wrapper_container'>
        <div className='maps'>
          <iframe id='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11199.323550867464!2d-75.70340205!3d45.43291025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04f250722f33%3A0xdf56fa747ac8b9ff!2sMcDonald&#39;s!5e0!3m2!1sen!2sca!4v1653634146455!5m2!1sen!2sca"
							 width="100%" height="250" style={{border:0}} allowFullScreen="" loading="lazy" 
							 referrerpoilcy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className=''>
          <img src={blade} target='_blank' id='razor-blade' alt='razor-blade'/>
        </div>
        <div className='divider'/>
        <div className='businessHours'>
          <h3 className='header_3'>Business hours</h3>
          <div>Mon - Thur: 10AM - 6PM</div>
          <div>Fri - Sat: 10AM - 4PM</div>
          <a className='container-fluid-button' href='#'>Book now</a>
        </div>
      </div>
    </div>
  )
}

export default Location
