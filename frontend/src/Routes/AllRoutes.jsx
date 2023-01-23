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
import UserSingl from 'Pages/AdminPages/UserSingl'
import BlueTick from 'Pages/OtherPages/BlueTick'
import Settings from 'Pages/OtherPages/Settings'
import AdminPrivateRoute from './AdminPrivateRoute'
import AdminProfile from 'Pages/AdminPages/profilePages/AdminProfile'
import SettingPage from 'Pages/AdminPages/profilePages/SettingPage'


const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}></Route>
        <Route path="/usersign" element={<Signup/>}></Route>
        <Route path="/userlogin" element={<Login/>}></Route>
        <Route path="/profile" element={<MainProfile/>}></Route>
        <Route path="/message" element={<Messages/>}></Route>
        <Route path="/newPost" element={<CreatePost/>}></Route>
        <Route path="/SingleUser/:id" element={<SingleUser/>}></Route>
        <Route path="/SinglePost/:id" element={<SinglePost/>}></Route>
        <Route path="/faqPage" element={<FaqPage/>}></Route>
        <Route path="/Notification" element={<Notification/>}></Route>
        <Route path="/adminsign" element={<AdminSignup/>}></Route>
        <Route path="/adminlogin" element={<AdminLogin/>}></Route>
        <Route path="/adminsingleuser/:id" element={<UserSingl/>}></Route>
        <Route path="/bluetick" element={<BlueTick/>}></Route>
        <Route path="/settings" element={<Settings/>}></Route>
        <Route path="/adminSetting" element={<SettingPage/>}></Route>
        <Route path="*" element={<h1>Wrong Url</h1>}></Route>
        <Route path="/adminProfile" element={<AdminProfile/>}></Route>
        <Route path="/admin" element={<AdminPrivateRoute><Dashboard/></AdminPrivateRoute>}></Route>
      </Routes>
  )
}

export default AllRoutes
