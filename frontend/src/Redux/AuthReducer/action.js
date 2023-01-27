import * as types from "./actionType"
import axios from 'axios'
import { baseUrl } from "Utils/BaseUrl"


const postLoginRequest =()=>{
    return{
        type:types.LOGIN_REQUEST
    }
}

const postLoginSuccess = (payload) =>{
    return{
        type:types.LOGIN_SUCCESS,
        payload
    }
}
const postLoginFailure = () =>{
    return{
        type:types.LOGIN_FAILURE
    }
}

const login=(payload)=>(dispatch)=>{
    dispatch(postLoginRequest())
    return axios({
        method:'post',
        url:"/auth/login",
        baseURL:`${baseUrl}`,
        data:payload
    }).then((res)=>{
        console.log(res.data)
        localStorage.setItem("socialPshcyoToken",JSON.stringify(res.data))
       return dispatch(postLoginSuccess(res.data))
    }).catch((e)=>{
        console.log(e)
        alert(e.response.data.msg)
        dispatch(postLoginFailure())
    })
}


export{login,postLoginFailure,postLoginRequest,postLoginSuccess}