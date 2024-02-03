import React from 'react';
import './css/Home.css';
import HeroImage from './assets/hero_image.jpg';
import Button from '@mui/material/Button';
import HomeProductsCard from './HomeProductsCard';
import './css/ProductCard.css';

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
        <div  className='hero-button'>
        <Button variant="contained" style={{padding: '10px 40px'}}>Shopping Now</Button>
        </div>
      </div>
    </div>
    <div className="trending-brands">
      <div className="trending-brands-title">
        <h4>Trending Brands</h4>
      </div>
      <div className="trending-brands-names">
        <div className="trending-brands-logos">logo1</div>
        <div className="trending-brands-logos">logo2</div>
        <div className="trending-brands-logos">logo3</div>
        <div className="trending-brands-logos">logo4</div>
      </div>
    </div>
    <div className="Product-Carousel">
      <div className="Product-Carousel-title">
        <h2>Just In</h2>
      </div>
      <div className="Product-Carousel-product-cards">
        <div className="Product-Carousel-products"><HomeProductsCard /></div>
        <div className="Product-Carousel-products"><HomeProductsCard /></div>
        <div className="Product-Carousel-products"><HomeProductsCard /></div>
        <div className="Product-Carousel-products"><HomeProductsCard /></div>
        <div className="Product-Carousel-products"><HomeProductsCard /></div>
        <div className="Product-Carousel-products"><HomeProductsCard /></div>
      </div>
    </div>
    <div className="Categories">
      <div className="Categories-title">
        <h2>Shop By Categories</h2>
      </div>
      <div className="Categories-names">
        <div className="Category"></div>
        <div className="Category"></div>
        <div className="Category"></div>
        <div className="Category"></div>
      </div>
    </div>
    </>
  )
}

export default Home
