import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Page404 from './Components/Page404'


function App() {
  return (
    <BrowserRouter >
    <Navbar  />
    <Routes>
      <Route path='/' element={< Home />} />
      <Route path='/login' element={< Login  />} />
      <Route path='/signup' element={< Signup />} />
      <Route path='*' element={< Page404 />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App