import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Details from './pages/Details'
import Homepage from './pages/Homepage'

const RouteApp = () => {
    return (
        <>
            <Routes>
                <Route path="/home" exact element={<Homepage />} />
                <Route path="/categories" element={<Details />} />
            </Routes>
        </>
    )
}

export default RouteApp