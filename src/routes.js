import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'

const RouteApp = () => {
    return (
        <>
            <Routes>
                <Route to="/" element={<Homepage />} />
            </Routes>
        </>
    )
}

export default RouteApp