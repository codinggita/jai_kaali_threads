import React from 'react';
import {Link} from 'react-router-dom';
import img1 from './assets/VISA.svg';
import img2 from './assets/AMERICANEXPRESS.svg';
import img3 from './assets/MASTERCARD.svg';
import img4 from './assets/STRIPE.svg';
import img5 from './assets/PAYPAL.svg';
import img6 from './assets/APPLEPAY.svg';
import './css/Footer.css';
import { Button } from '@mui/material';

function Footer() {
  return (
    <div className='Footer'>
      <div className="Footer-content">
        <div className="Footer-content-frame">
          <div className="Frame">
            <div className="logo">
              <h2>JaiKaaliThreads.</h2>
            </div>
            <div className="address">
              <p>43111 Hai Trieu street,</p>
              <p>District 1, HCMC</p>
              <p>Vietnam</p>
              <p>84-756-3237</p>
            </div>
          </div>
          <div className="Frame">
            <h4>Page</h4>
            <p>Home</p>
            <p>Shop</p>
            <p>Product</p>
            <p>ContactUs</p>
          </div>
          <div className="Frame">
            <h4>Join Newsletter</h4>
            <p>Subscribe our newsletter to get more deals, new</p>
            <p>products and promotions</p>
            <Button variant="contained">SUBSCRIBE</Button>
          </div>
        </div>
        <div className="Footer-content-bottombar">
          <div className="Footer-content-bottombar-content">
            <div className="Content">
              <p>Copyright © 2023 JaiKaaliThreads. All rights reserved</p>
              <span className="Content-frame">
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
              </span>
            </div>
            <div className="Content-PaymentMethod">
              <div className="PaymentMethods">
                <img src={img1} alt="" />
              </div>
              <div className="PaymentMethods">
                <img src={img2} alt="" />
              </div>
              <div className="PaymentMethods">
                <img src={img3} alt="" />
              </div>
              <div className="PaymentMethods">
                <img src={img4} alt="" />
              </div>
              <div className="PaymentMethods">
                <img src={img5} alt="" />
              </div>
              <div className="PaymentMethods">
                <img src={img6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
