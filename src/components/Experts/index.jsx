import React from 'react'
import './experts.css'

import expert1 from '../Assets/expert_1.jpg'
import expert2 from '../Assets/expert_2.jpg'
import expert3 from '../Assets/expert_3.jpg'

const index = () => {
  return (
    <div id='experts' className='container-fluid'>
       <div id='#squad' className='row squad'>
          <h2 className='experts'>the squad</h2>
          <div className='col-xs-12 col-sm-6 col-md-4 expert'>
            <img className='expert' src={expert1} alt='expert1'/>
            <h3>Brad</h3>
            <p>
                Brad is a very talented professional with deep expertise in classic haircuts and styles.
            </p>
        </div>
        <div className='col-xs-12 col-sm-6 col-md-4 expert'>
          <img className='expert' src={expert2} alt='expert1'/>
          <h3>Maxim</h3>
          <p>
          If you want a modern haircut, Maxim is the man to choose. He gained a lot popularity 
          throughout the years thanks to his magic touch.
          </p>
        </div>
        <div id='expert3' className='col-xs-12 col-sm-12 col-md-4 expert'>
          <img className='expert' src={expert3} alt='expert1'/>
          <h3>Vittorio</h3>
          <p>
            Need an advice or wanna try a new haircut? Vittorio is here. Some people say that 
            he started cutting his own hair when he was 6.
          </p>
        </div>
      </div>
    </div>
  )
}

export default index
