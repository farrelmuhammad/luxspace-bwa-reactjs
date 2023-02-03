import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import Congratulation from './pages/Congratulation'
import Details from './pages/Details'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/categories/:idc" element={<Details />} />
        <Route path="/categories/:idc/products/:idp" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/congratulation" element={<Congratulation />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
