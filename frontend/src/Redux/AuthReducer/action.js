import * as types from "./actionType"
import axios from 'axios'


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
        baseURL:'http://localhost:3002',
        data:payload
    }).then((res)=>{
        console.log(res)
       return dispatch(postLoginSuccess(res.data.token))
    }).catch((e)=>{
        console.log(e)
        dispatch(postLoginFailure())
    })
}


export{login,postLoginFailure,postLoginRequest,postLoginSuccess}