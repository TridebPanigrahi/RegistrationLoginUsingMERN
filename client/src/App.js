import React from 'react'
import Register from './components/Register/Register'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App