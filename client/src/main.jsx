import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Shop from './components/Shop';
import Product from './components/Product';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart';
import MyAccount from './components/MyAccount';

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
        <Route path='/cart' element={<Cart/>} />
        <Route path='/account-details' element={<MyAccount/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  </>
)
