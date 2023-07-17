import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';
import items from "./data.js";
import Order from './components/Order';
import LastPage from './components/LastPage';
import CartItem from './components/CartItem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  const addToCart = (item) => {
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id)
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  }

  let totalPrice = 0;

  cartItems.forEach(item => {
    totalPrice += item.price;
  })

  function cleanCart(cartItems) {
    const updatedCartItems = [];
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home items={items} addToCart={addToCart}/>} />
        <Route path='/cart' element={<Cart cartItems={cartItems} removeFromCart={removeFromCart}/>} />
        <Route path='/order' element={<Order cleanCart={cleanCart}  totalPrice={totalPrice} />} />
        <Route path='/last' element={<LastPage />} />
      </Routes>
      <Footer />
      <ToastContainer position={"top-right"} autoClose={1500}/>
    </BrowserRouter>
  );
}

export default App;
