import React from 'react'
import './hero.css';
import zoom from '../../../assets/zoom.svg'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__background-image"></div>
      <div className="hero__gradient-overlay"></div>
      <div className="hero__content">
        <p className="hero__after">Brindamos</p>
        <h1 className="hero__title"><span></span> Servicio de nutrición</h1>
        <div className='hero__content-description'>
        <p className="hero__description">Online</p><img src={zoom} alt="" className='hero__zoom-icon' />
        </div>
      </div>
      
    </div>
  )
}

export default Hero