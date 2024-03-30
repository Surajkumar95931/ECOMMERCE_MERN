import React from 'react'
import './Hero.css'
import hand_icon from '../Assests/hand_icon.png'
import arrow_icom from '../Assests/arrow.png'
export const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
          <h2>NEW ARIVAL ONLY</h2>
          <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt=''/>
            </div>
            <p>Collection</p>
            <p>Every One</p>
          </div>
          <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icom} alt=''/>
          </div>
        </div>
        <div className="hero-right">

        </div>
    </div>
  )
  
}

export default Hero;