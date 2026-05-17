import React from 'react'
import './Hero.css'
import dark from "./../../assets/arrow1.png"
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1> We Ensure better educaton for a better world</h1>
        <p>Our cutting-edge curricu designed to students with knowlwdge,</p>
        <button className='btn'>Explore More<img src={dark} alt=""/></button>
        
      </div>
    </div>
  )
}

export default Hero