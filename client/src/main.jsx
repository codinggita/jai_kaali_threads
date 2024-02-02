import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home.jsx';
import Shop from './Shop.jsx';
import Product from './Product.jsx';
import ContactUs from './ContactUs.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/*" element={<p>You are on wrong route.</p>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/contact_us' element={<ContactUs/>} />
        <Route path="/*" element={<Footer/>} />
      </Routes>
    </BrowserRouter>
  </>
)
