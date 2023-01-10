import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
const {isAuth}=useSelector((store)=>store.AuthReducer)
  
if(!isAuth){
  alert("Please Login First")
  return <Navigate to="/userlogin"/>
}
  return children
}

export default PrivateRoute