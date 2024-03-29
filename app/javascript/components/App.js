import React from 'react'
import {Route, Routes, Router } from 'react-router-dom'
import Airlines from './Airlines/Airlines'
import Airline from './Airline/Airline'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Airlines />} />
            <Route path="/airlines/:slug" element={<Airline />} />
        </Routes>
    )
}

export default App