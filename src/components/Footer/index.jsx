import React from 'react'
import './footer.css'

const Footer = () => {
  return (
      <div className='container-fluid'>
        <div className='footer row'>
            <section className='footer-links-list col-xs-6 col-sm-6 col-md-4'>
                <ul>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#services'>Services</a></li>
                    <li><a href='#experts'>Experts</a></li>
                </ul> 
            </section>
            <section className='address col-xs-6 col-sm-6 col-md-4'>
                <div>
                    <p>Address:</p>
                    <p>180 Bd Maisonneuve</p>
                    <p>Gatineau, QC J8X 3N5</p>
                </div>
            </section>
            <div className="copyright text-center">&copy; 2022 Copyright: Bianchi Professional</div>
        </div>
        
    </div>

  )
}

export default Footer
