import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
// link navlinbk
<>
  <BrowserRouter>
  {/* for route /home & /products show {<Hero/>} */}
  <Routes>
    <Route path="/user" element={<App />} />
    <Route path="/home" element={<Navbar/>} />
    <Route path="/*" element={<Footer/>} />
  </Routes>
  
  </BrowserRouter>
</>
)
