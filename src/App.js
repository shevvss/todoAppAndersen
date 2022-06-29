import React, { useState } from 'react';
import AboutStore from './Components/AboutStore/AboutStore';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Items from './Components/Items/Items';
import Header from './Components/Header/Header';
import './StylesApp.module.css';
import Cart from './Components/Cart/Cart';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  const logOut = () => {
    setLoggedIn(false);
  };

  const logIn = () => {
    setLoggedIn(true);
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
        <Header loggedIn={loggedIn} logOut={logOut} logIn={logIn} />
        <Routes>
          <Route path='/index' element={<Homepage loggedIn={loggedIn} />} />
          <Route path='/aboutstore' element={<AboutStore />} />
          <Route path='/descriptionitem/:id' element={<Items />} />
          <Route path='/cart' element={<Cart />} />
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
