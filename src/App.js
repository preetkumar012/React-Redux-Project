import React from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home'
import { Routes, Route } from 'react-router-dom';
import Product from './Component/Product';
import About from './Component/About';
import Contact from './Component/Contact';
import Products from './Component/Products';
// import Cart from './Component/Cart';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/product/:id" element={<Products/>}/>
        {/* <Route exact path='/cart' element={<Cart/>}/> */}
      </Routes>


    </>
  )
}
export default App;