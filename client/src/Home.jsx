import React from 'react';
import './css/Home.css';
import HeroImage from './assets/hero_image.jpg';

function Home() {
  return (
    <>
    <div className='hero-section'>
      <img src={HeroImage} className="hero-image" />
      <div className='hero-start'>
        <div className='hero-text'>
          <h1 className='bring-heading'>Bring the</h1>
          <h1 className='bring-heading'>warmth</h1>
          <p>Everyone needs a good winter jacket.</p>
          <p>Find yours with our collection and more.</p>
        </div>
        <input type="button" value="Shopping Now" className='hero-button'/>
      </div>
    </div>
    </>
  )
}

export default Home
