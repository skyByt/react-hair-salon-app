import React from 'react'
import './experts.css'

import expert1 from '../Assets/expert_1.jpg'
import expert2 from '../Assets/expert_2.jpg'
import expert3 from '../Assets/expert_3.jpg'

const index = () => {
  return (
    <div className='container-fluid'>
       <div id='#squad' className='row squad'>
          <h2 className='experts'>the squad</h2>
          <div className='col-xs-12 col-sm-6 col-md-4 expert'>
            <img className='expert' src={expert1} alt='expert1'/>
            <h3>Brad</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua.
            </p>
        </div>
        <div className='col-xs-12 col-sm-6 col-md-4 expert'>
          <img className='expert' src={expert2} alt='expert1'/>
          <h3>Maxim</h3>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua.
          </p>
        </div>
        <div id='expert3' className='col-xs-12 col-sm-12 col-md-4 expert'>
          <img className='expert' src={expert3} alt='expert1'/>
          <h3>Vittorio</h3>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
              dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  )
}

export default index
