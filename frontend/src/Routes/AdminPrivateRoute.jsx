import React from 'react'
import { Navigate } from 'react-router-dom'

const AdminPrivateRoute = ({children}) => {

if(
    localStorage.getItem("adminToken") == " " ||
    localStorage.getItem("adminToken") == null
){
    return <Navigate to="/adminlogin"/>
}
    return children
}

export default AdminPrivateRoute
