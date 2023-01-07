import Home from 'Pages/HomePage/Home'
import Login from 'Pages/SignLoginPage/Login'
import Signup from 'Pages/SignLoginPage/Signup'
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}></Route>
        <Route path="/usersign" element={<Signup/>}></Route>
        <Route path="/userlogin" element={<Login/>}></Route>
        {/* <Route path="/usersign" element={<Signup/>}></Route> */}
        {/* <Route path="/usersign" element={<Signup/>}></Route> */}
      </Routes>
  )
}

export default AllRoutes
