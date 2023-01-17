import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import Details from './pages/Details'
import Homepage from './pages/Homepage'

const RouteApp = () => {
    return (
        <>
            <Routes>
                <Route path="/" exact element={<Homepage />} />
                <Route path="/categories/:idc" element={<Details />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    )
}

export default RouteApp