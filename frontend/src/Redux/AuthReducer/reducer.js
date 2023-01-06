import * as types from "./actionType"

const initalState={
    isAuth:false,
    token:"",
    isLoading:false,
    isError:false
}

const reducer = (state = initalState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.LOGIN_REQUEST:{
            return{
                ...state,
                isLoading:true,
                isError:false,
                isAuth:false
            }
        }
        case types.LOGIN_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                isAuth:true,
                token:payload
            }
        }
        case types.LOGIN_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true,
                isAuth:false,
                token:""
            }
        }
        default:
            return state;
    }
}

export {reducer}