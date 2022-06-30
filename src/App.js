import React from 'react';
import AboutStore from './Components/AboutStore/AboutStore';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Item from './Components/Item/Item';
import Header from './Components/Header/Header';
import './StylesApp.module.css';
import Cart from './Components/Cart/Cart';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path='/products' element={<Homepage />} />
          <Route path='/aboutstore' element={<AboutStore />} />
          <Route path='/product/:id' element={<Item />} />
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
      </Provider>
    </BrowserRouter>
  );
}

export default App;
