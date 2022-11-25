import React from 'react'
import logo from './logo.svg'
import './App.css'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Room from './components/Room'
import AuthProvider from './Context/AuthProvider'

function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Room />} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default App
