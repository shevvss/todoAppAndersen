import React, { useState } from 'react';
import AboutStore from './Components/AboutStore/AboutStore';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Items from './Components/Items/Items';
import Header from './Components/Header/Header';
import './StylesApp.module.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [cart, setCart] = useState([]);

  const logOut = () => {
    setLoggedIn(false);
  };

  const logIn = () => {
    setLoggedIn(true);
  };

  const addItemToCart = (item, count = 1) => {
    let items = [];
    for (let i = 0; i < count; i++) {
      items.push(item);
    }
    setCart([...cart, ...items]);
  };

  // const removeItemFromCart = (item) => {
  //   const removeIndex = cart.findIndex((el) => {
  //     return el === item;
  //   });

  //   if (removeIndex === -1) return;
  //   cart.splice(removeIndex, 1);
  //   setCart(cart);
  // };

  return (
    <>
      <BrowserRouter>
        <Header cart={cart} loggedIn={loggedIn} logOut={logOut} logIn={logIn} />
        <Routes>
          <Route
            path='/index'
            element={
              <Homepage loggedIn={loggedIn} addItemToCart={addItemToCart} />
            }
          />
          <Route path='/aboutstore' element={<AboutStore />} />
          <Route
            path='/descriptionitem/:id'
            element={<Items addItemToCart={addItemToCart} />}
          />
          <Route
            path='*'
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
