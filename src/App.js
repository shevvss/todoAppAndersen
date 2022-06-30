import React from 'react';
import AboutStore from './Components/AboutStore/AboutStore';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Items from './Components/Items/Items';
import Header from './Components/Header/Header';
import './StylesApp.module.css';
import Cart from './Components/Cart/Cart';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path='/index' element={<Homepage />} />
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
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
