// import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Login from "./components/Login";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App