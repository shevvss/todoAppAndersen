import React from 'react';
import AboutStore from './Components/AboutStore/AboutStore';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Items from './Components/Items/Items';
import Header from './Components/Header/Header';
import './StylesApp.module.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/index' element={<Homepage />} />
          <Route path='/aboutstore' element={<AboutStore />} />
          <Route path='/descriptionitem/:id' element={<Items />} />
          <Route
            path='*'
            element={
              <div>
                <h2>Something wrong. This page doesn't exist</h2>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
