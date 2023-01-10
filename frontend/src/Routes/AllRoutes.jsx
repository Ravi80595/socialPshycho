import CreatePost from 'Components/CreatePost'
import Home from 'Pages/HomePage/Home'
import Messages from 'Pages/Messages/Messages'
import MainProfile from 'Pages/ProfilePages/MainProfile'
import Login from 'Pages/SignLoginPage/Login'
import Signup from 'Pages/SignLoginPage/Signup'
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/usersign" element={<Signup/>}></Route>
        <Route path="/userlogin" element={<Login/>}></Route>
        <Route path="/profile" element={<MainProfile/>}></Route>
        <Route path="/message" element={<Messages/>}></Route>
        <Route path="/newPost" element={<CreatePost/>}></Route>
      </Routes>
  )
}

export default AllRoutes
