import React from 'react'
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom'
import Homepage from './page/Homepage'
import AdminPanel from './page/AdminPanel'
import Login from './page/Login'
import Register from './page/Register'
import AdminPage from './page/AdminPage'
import AddProduct from './page/AddProduct'




function Routerpage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/admin-panel' element={<AdminPanel />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/admin-page' element={<AdminPage />}></Route>
        <Route path='/add-product' element={<AddProduct />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routerpage