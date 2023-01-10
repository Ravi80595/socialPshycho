import * as types from "./actionType"

const initalState={
    profileData:[],
    isLoading:false,
    isError:false,
    AllFriends:[]
}

const reducer = (state = initalState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.PROFILE_REQUEST:{
            return{
                ...state,
                isLoading:true,
                isError:false,
            }
        }
        case types.PROFILE_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                profileData:payload
            }
        }
        case types.PROFILE_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
        }
        case types.All_FRIENDS:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                AllFriends:payload
            }
        }
        default:
            return state;
    }
}

export {reducer}