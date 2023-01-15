import CreatePost from 'Components/CreatePost'
import SinglePost from 'Components/SinglePost'
import Home from 'Pages/HomePage/Home'
import Messages from 'Pages/Messages/Messages'
import FaqPage from 'Pages/OtherPages/FaqPage'
import MainProfile from 'Pages/ProfilePages/MainProfile'
import SingleUser from 'Pages/ProfilePages/SingleUser'
import Login from 'Pages/SignLoginPage/Login'
import Signup from 'Pages/SignLoginPage/Signup'
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Notification from 'Pages/Messages/Notification'
import Dashboard from 'Pages/AdminPages/Dashboard'
import AdminSignup from "Pages/AdminPages/SignLogin/AdminSignup"
import AdminLogin from 'Pages/AdminPages/SignLogin/AdminLogin'

const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/usersign" element={<Signup/>}></Route>
        <Route path="/userlogin" element={<Login/>}></Route>
        <Route path="/profile" element={<MainProfile/>}></Route>
        <Route path="/message" element={<Messages/>}></Route>
        <Route path="/newPost" element={<CreatePost/>}></Route>
        <Route path="/SingleUser/:id" element={<SingleUser/>}></Route>
        <Route path="/SinglePost/:id" element={<SinglePost/>}></Route>
        <Route path="/faqPage" element={<FaqPage/>}></Route>
        <Route path="/Notification" element={<Notification/>}></Route>
        <Route path="/admin" element={<Dashboard/>}></Route>
        <Route path="/adminsign" element={<AdminSignup/>}></Route>
        <Route path="/adminlogin" element={<AdminLogin/>}></Route>
        <Route path="*" element={<h1>Wrong Url</h1>}></Route>
      </Routes>
  )
}

export default AllRoutes
