import * as types from "./actionType"
import axios from 'axios'


const postProfileRequest =()=>{
    return{
        type:types.PROFILE_REQUEST
    }
}

const postProfileSuccess = (payload) =>{
    return{
        type:types.PROFILE_SUCCESS,
        payload
    }
}
const postProfileFailure = () =>{
    return{
        type:types.PROFILE_FAILURE
    }
}



const {token,user}=JSON.parse(localStorage.getItem("socialPshcyoToken"))

const getProfiles=()=>(dispatch)=>{
    dispatch(postProfileRequest())
     axios.get(`http://localhost:3002/users/${user._id}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then((res)=>{  
        // console.log(res.data)
        return dispatch(postProfileSuccess(res.data))
    })
    .catch((err)=>{
        console.log(err)
        dispatch(postProfileFailure())
    })
}



export{getProfiles,postProfileFailure,postProfileRequest,postProfileSuccess}

