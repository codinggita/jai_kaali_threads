import React from 'react';
import HeroImage from '../assets/Hero-image.svg';
import Button from '@mui/material/Button';
import HomeProductsCard from './HomeProductsCard';
import CategoriesCard from './CategoriesCard'
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import MoneyRoundedIcon from '@mui/icons-material/MoneyRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import BannerImage from '../assets/Banner-image.jpeg'
import GridCard1 from '../assets/GridCard1.svg';
import GridCard2 from '../assets/GridCard2.svg';
import GridCard3 from '../assets/GridCard3.svg';
import GridCard4 from '../assets/GridCard4.svg';
import '../css/Home.css';
import '../css/CategoryProductCard.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
        <div className="Category"><CategoriesCard/></div>
        <div className="Category"><CategoriesCard/></div>
        <div className="Category"><CategoriesCard/></div>
        <div className="Category"><CategoriesCard/></div>
      </div>
    </div>
    <div className="Grid-Container">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <Item><img src={GridCard1} alt="" /></Item>
        </Grid>
        <Grid xs={6}>
          <Item><img src={GridCard2} alt="" /></Item>
        </Grid>
        <Grid xs={6}>
          <Item><img src={GridCard3} alt="" /></Item>
        </Grid>
        <Grid xs={6}>
          <Item><img src={GridCard4} alt="" /></Item>
        </Grid>
      </Grid>
    </div>
    <div className="Banner">
      <div className='Banner-img'><img src={BannerImage} alt="" /></div>
      <div className="Banner-Content">
        <div className="Banner-title">
          <h4 style={{ color: '#377DFF', fontWeight: 'bold' }}>SALE UP TO 35% OFF</h4>
          <div className="Banner-title-header">
            <h1>HUNDREDS of</h1>
            <h1>New lower prices!</h1>
          </div>
          <p style={{ fontSize: '1.3vw' }}>Hurry up!!! Winter is coming!</p>
        </div>
        <div className="Banner-Button">
          <Button>Shop Now<ArrowForwardOutlinedIcon/></Button>
        </div>
      </div>
    </div>
    <div className="Values">
      <div className="Values-cards">
        <div className="Values-cards-icon"><LocalShippingOutlinedIcon style={{ fontSize: 48 }} /></div>
        <div className="Values-cards-text">
          <h2>Free Shipping</h2>
          <p>Order above $200</p>
        </div>
      </div>
      <div className="Values-cards">
        <div className="Values-cards-icon"><MoneyRoundedIcon style={{ fontSize: 48 }} /></div>
        <div className="Values-cards-text">
          <h2>Money Back</h2>
          <p>30 Days gurantee</p>
        </div>
      </div>
      <div className="Values-cards">
        <div className="Values-cards-icon"><LockOutlinedIcon style={{ fontSize: 48 }} /></div>
        <div className="Values-cards-text">
          <h2>Secure Payments</h2>
          <p>Secured by Stripe</p>
        </div>
      </div>
      <div className="Values-cards">
        <div className="Values-cards-icon"><CallOutlinedIcon style={{ fontSize: 48 }} /></div>
        <div className="Values-cards-text">
          <h2>24/7 Support</h2>
          <p>Phone and Email support</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
