import React from 'react'
import './services.css'
import scissors from '../Assets/scissors.png'

const Services = () => {
  return (
    <div id='services'>
        <div>
            <h2>Services</h2>
        </div>
        <div className='menu'>
            <div>
                <h3>haircuts</h3>
                <div className='haircuts'>
                    <ul className='menu-list'>
                        <li className='menu-item'>Men Haircut</li>
                        <li className='menu-item'>Senior Haircut</li>
                        <li className='menu-item'>Kid Haircut</li>
                        <li className='menu-item'>Cut and Shampoo</li>
                        <li className='menu-item'>Hair Color</li>
                    </ul>
                    <ul className='menu-list-prices d-inline-block'>
                        <li className='menu-item'>$45</li>
                        <li className='menu-item'>$35</li>
                        <li className='menu-item'>$35</li>
                        <li className='menu-item'>$60</li>
                        <li className='menu-item'>$80</li>
                    </ul>
                </div>
            </div>
            <div id='center'>
               <img src={scissors} id="scissors" alt='scissors'/> 
               <div id='separator'></div>
            </div>
            <div>
                <h3>shaves</h3>
                <div className='shaves'>
                    <ul className='menu-list'>
                        <li className='menu-item'>Classic Shave</li>
                        <li className='menu-item'>Hot Towel Shave</li>
                        <li className='menu-item'>Steam Shave</li>
                        <li className='menu-item'>Head Shave</li>
                        <li className='menu-item'>Beard Trimming</li>
                    </ul>
                    <ul className='menu-list-prices d-inline-block'>
                        <li className='menu-item'>$30</li>
                        <li className='menu-item'>$40</li>
                        <li className='menu-item'>$55</li>
                        <li className='menu-item'>$25</li>
                        <li className='menu-item'>$35</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Services
